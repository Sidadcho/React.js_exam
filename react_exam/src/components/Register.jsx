import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Register(){
	const [error, setError] = useState(false)
	const [passErr, setPassErr] = useState(false)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [rePass, setRePass] = useState("")
	const navigate = useNavigate()


	const  handleRegister =(e) => {
		e.preventDefault()

		if(password != rePass){
			return setPassErr(true);
		}
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				navigate('/login')
			})
			.catch((error) => {
				setError(true)
			});
	}

    return(
        <div id="body">
			<div className="header">
				<div className="register">
					<h1>Register</h1>
					<h2>Please register</h2>
					<form onSubmit={handleRegister}>
						<input type="email" name="email" placeholder="email" onChange={e => setEmail(e.target.value)} ></input>
						<input type="password" name="password" placeholder="password" onChange={e => setPassword(e.target.value)} ></input>
						<input type="repass" name="repass" placeholder="repeat-password" onChange={e => setRePass(e.target.value)} ></input>
						<input type="submit" value="Register" id="submit"/>
						{error && <span>All fields are required</span>}
						{passErr && <span>Passwords dont match</span>}

					</form>
				</div>
			</div>
		</div>
    )
}

export default Register