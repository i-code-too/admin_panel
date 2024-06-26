import "./login.scss"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Circle as CircleIcon } from '@mui/icons-material'
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase"
import { AuthContext } from "../../context/authContext"

const Login = () => {
    const [error, setError] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const {dispatch} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            dispatch({type: "LOGIN", payload: user})
            navigate("/")
        })
        .catch((error) => {
            setError(true)
        })
    }

    return(
        <div className="login">
            <form onSubmit={handleLogin}>
                <div className="top">
                    <Link to="/" className="link">
                        <span className="logo">admin<CircleIcon className="icon" /></span>
                    </Link>
                </div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="john_doe@gmail.com" onChange={(e)=>{setEmail(e.target.value)}} />
                <label htmlFor="password">Password</label>
                <input id="password" type="password" placeholder="*********" onChange={(e)=>{setPassword(e.target.value)}} />
                <button type="submit">Login</button>
                {error && <span>Wrong email or password !! Please recheck the credentials entered.</span>}
            </form>
        </div>
    )
}

export default Login