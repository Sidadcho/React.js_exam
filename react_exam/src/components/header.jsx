import { Link } from "react-router-dom"
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";





function Header() {
	function Logout() {
		const auth = getAuth();
		signOut(auth).then(() => {
			localStorage.clear()
		}).catch((error) => {
			console.log(error);
		});
	
	}
	return (
		<div id="header">
			<div>
				<Link to="/" className="logo"><img src="images/logo.png" alt=""></img></Link>
				<ul id="navigation">
					<li className="selected">
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/create">Create project</Link>
					</li>
					<li className="menu">
						<Link to="/projects">Projects</Link>
						<ul className="primary">
							<li>
								<Link to="/proj1">Proj1</Link>
							</li>
						</ul>
					</li>

					
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/register">Register</Link>
					</li>
					<li>
						<a href="/" onClick={Logout}>Logout</a >
					</li>
				</ul>
			</div>
		</div>
	)
}
export default Header