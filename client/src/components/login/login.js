import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import video from "../homepage/video/4K Space_Star scene - Free M.G Stock Footage.mp4"

const Login = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        })
    }

    return (
        <div className="login">
            <h1>Toster.id <span>Login</span></h1>
            <br></br>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div className="or">or</div>
            <div className="buttonRegister" onClick={() => history.push("/register")}>Register</div>
            {/* Background video */}
            <div className="tm-video-wrapper">
                <i id="tm-video-control-button" className="fas fa-pause" />
                <video autoPlay muted loop id="tm-video">
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default Login