import { Link } from "react-router-dom"


function Header() {
	return (
		<div id="header">
			<div>
				<Link to="/" class="logo"><img src="images/logo.png" alt=""></img></Link>
				<ul id="navigation">
					<li class="selected">
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/create">Create project</Link>
					</li>
					<li class="menu">
						<Link to="/projects">Projects</Link>
						<ul class="primary">
							<li>
								<Link to="/proj1">Proj1</Link>
							</li>
						</ul>
					</li>

					<li>
						<Link to="/contact">Contact</Link>

					</li>
				</ul>
			</div>
		</div>
	)
}
export default Header