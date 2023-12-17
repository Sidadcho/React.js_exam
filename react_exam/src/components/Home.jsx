function Home(){
    return(
        <div id="body" class="home">
			<div class="header">
				<div>
					<img src="images/satellite.png" alt="" class="satellite"></img>
					<h1>SOYUZ TMA-M</h1>
					<h2>SPACECRAFT</h2>
					<h3>FEATURED PROJECTS</h3>
					<ul>
						<li>
							<a href="projects.html"><img src="images/project-image1.jpg" alt=""></img></a>
						</li>
						<li>
							<a href="projects.html"><img src="images/project-image2.jpg" alt=""></img></a>
						</li>
						<li>
							<a href="projects.html"><img src="images/project-image3.jpg" alt=""></img></a>
						</li>
						<li>
							<a href="projects.html"><img src="images/project-image4.jpg" alt=""></img></a>
						</li>
					</ul>
				</div>
			</div>
			<div class="body">
				<div>
					<h1>OUR MISSION</h1>
					<p>This website template has been designed by Free Website Templates for you, for free. You can replace all this text with your own text.</p>
				</div>
			</div>
			<div class="footer">
				<div>
					<ul>
						<li>
							<h1>FEATURED VIDEO</h1>
							<a href="blog.html"><img src="images/mars-rover.jpg" alt=""></img><span></span></a>
						</li>
						<li>
							<h1>LATEST BLOG</h1>
							<ul>
								<li>
									<a href="blog.html"><img src="images/finding-planet.jpg" alt=""></img></a>
									<h1>FINDING PLANET X-123</h1>
									<span>FEBRUARY 6, 2023</span>
									<a href="blog.html" class="more">Read More</a>
								</li>
								<li>
									<a href="blog.html"><img src="images/new-satellitedish.jpg" alt=""></img></a>
									<h1>NEW SATELLITE DISH</h1>
									<span>FEBRUARY 3, 2023</span>
									<a href="blog.html" class="more">Read More</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
    )
}

export default Home