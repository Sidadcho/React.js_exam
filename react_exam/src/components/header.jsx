import { Link } from "react-router-dom"
import { getAuth, signOut } from "firebase/auth";
import { useAuth } from "../context/authContext";





function Header() {
	function Logout() {
		const auth = getAuth();
		signOut(auth).then(() => {
			localStorage.clear()
		}).catch((error) => {
			console.log(error);
		});
	}

	const {currentUser} = useAuth();

	return (
		<div id="header">
			<div>
				<Link to="/" className="logo"><img src="/images/logo.png" alt=""></img></Link>
				<ul id="navigation">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					{currentUser && (<li>
						<Link to="/create" >Create project</Link>
					</li>)}
					
					<li className="menu">
						<Link to="/projects">Projects</Link>
					</li>
					{!currentUser && (<li>
						<Link to="/login">Login</Link>
					</li>)}
					{!currentUser && (<li>
						<Link to="/register">Register</Link>
					</li>)}
					{currentUser && (<li>
						<Link to="/profile" >Profile</Link>
					</li>)}
				
					{currentUser && (<li>
						<a href="/" onClick={Logout}>Logout</a >
					</li>)}
					
				</ul>
			</div>
		</div>
	)
}
export default Header