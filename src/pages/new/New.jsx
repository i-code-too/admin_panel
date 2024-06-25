import "./new.scss"
import { useState } from "react"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined'

const New = ({ inputs, title }) => {
    const [file, setFile] = useState("")

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
                        <form>
                        <div className="form-input">
                                <label htmlFor="image"><DriveFolderUploadOutlinedIcon className="icon" /> {title==="User" ? "Profile Picture" : "Product Image"}</label>
                                <input id="image" type="file" onChange={e => setFile(e.target.files[0])} />
                            </div>
                            {inputs.map(input => {
                                return (
                                    <div className="form-input" key={input.id}>
                                        <label htmlFor={input.label}>{input.label}</label>
                                        <input id={input.label} type={input.type} placeholder={input.placeholder} />
                                    </div>
                                )
                            })}
                            <button>CREATE</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New