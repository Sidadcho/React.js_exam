import { Link } from "react-router-dom"


function Projects() {
	return (
		<div id="body">
			<div className="header">
				<div>
					<h1>Projects</h1>
					<ul>
						<li>
							<Link to="/proj1"><img src="images/curious-rover.jpg" alt=""></img></Link>
							<div>
								<h1>MARS CURIOSITY ROVER </h1>
								<p>Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What’s more, they’re absolutely free! You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the Terms of Use.</p>
								<Link to="/proj1" className="more">Read More</Link>
							</div>
						</li>
						<li>
							<Link to="/proj1"><img src="images/space-station.jpg" alt=""></img></Link>
							<div>
								<h1>INTERTERNATIONAL SPACE STATION</h1>
								<p>Looking for more templates? Just browse through all our Free Website Templates and find what you’re looking for. But if you don’t find any website template you can use, you can try our Free Web Design service and tell us all about it. Maybe you’re looking for something different, something special.</p>
								<Link to="/proj1" className="more">Read More</Link>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
export default Projects