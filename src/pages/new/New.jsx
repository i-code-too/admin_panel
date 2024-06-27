import "./new.scss"
import { useEffect, useState } from "react"
import { setDoc, doc, serverTimestamp } from "firebase/firestore"
import { auth, db, storage } from "../../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined'
import { useNavigate } from "react-router-dom"

const New = ({ inputs, title }) => {
    const [file, setFile] = useState("")
    const [data, setData] = useState({})
    const [fileUploadPercentage, setfileUploadPercentage] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        const uploadFile = () => {
            const uniqueName = new Date().getTime() + file.name
            console.log(uniqueName)
            const storageRef = ref(storage, file.name)
            const uploadTask = uploadBytesResumable(storageRef, file)
            uploadTask.on('state_changed', (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                console.log('Upload is ' + progress + '% done')
                setfileUploadPercentage(progress)
                switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused')
                    break
                case 'running':
                    console.log('Upload is running')
                    break
                default:
                    break
                }
            }, 
            (error) => {
                console.log(error)
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setData(prev => ({...prev, Image:downloadURL}))
                })
            }
            )
        }
        file && uploadFile()
    }, [file])

    const handleInput = (e) => {
        const id = e.target.id
        const value = e.target.value
        setData({...data, [id]:value})
    }

    const handleAddDoc = async (e) => {
        e.preventDefault()
        try {
            const res = await createUserWithEmailAndPassword(auth, data.Email, data.Password)
            await setDoc(doc(db, "users", res.user.uid), {
                ...data, 
                timeStamp: serverTimestamp(), 
            })
            navigate(-1)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className="new">
            <Sidebar />
            <div className="new-container">
                <Navbar />
                <div className="top">
                    <h1 className="title">Create New {title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
                    </div>
                    <div className="right">
                        <form onSubmit={handleAddDoc}>
                        <div className="form-input">
                                <label htmlFor="image"><DriveFolderUploadOutlinedIcon className="icon" /> {title==="User" ? "Profile Picture" : "Product Image"}</label>
                                <input id="image" type="file" onChange={e => setFile(e.target.files[0])} />
                            </div>
                            {inputs.map(input => {
                                return (
                                    <div className="form-input" key={input.id}>
                                        <label htmlFor={input.id}>{input.label}</label>
                                        <input id={input.id} type={input.type} placeholder={input.placeholder} onChange={handleInput} />
                                    </div>
                                )
                            })}
                            <button type="submit" disabled={ fileUploadPercentage!==null && fileUploadPercentage<100}>Create {title}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New