import { useContext, useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";


function Login() {
	const [error, setError] = useState(false)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const navigate = useNavigate()

	const { dispatch } = useContext(AuthContext)

	const handleLogin = (e) => {
		e.preventDefault()

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				dispatch({ type: 'LOGIN', payload: user })
				navigate('/')
			})
			.catch((error) => {
				setError(true)
			});
	}


	return (
		<div id="body">
			<div className="header">
				<div className="login">
					<h1>Login</h1>
					<h2>Please log in</h2>
					<form onSubmit={handleLogin}>
						<input type="email" name="email" placeholder="email" onChange={e => setEmail(e.target.value)}></input>
						<input type="password" name="password" placeholder="password" onChange={e => setPassword(e.target.value)}></input>
						<input type="submit" value="login" id="submit" />
						{error && <span>Wrong email or password!</span>}
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login