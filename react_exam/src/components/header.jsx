function Header(){
    return(
        <div id="header">
			<div>
				<a href="#" class="logo"><img src="images/logo.png" alt=""></img></a>
				<ul id="navigation">
					<li class="selected">
						<a href="#">Home</a>
					</li>
					<li>
						<a href="about.html">About</a>
					</li>
					<li class="menu">
						<a href="projects.html">Projects</a>
						<ul class="primary">
							<li>
								<a href="proj1.html">proj 1</a>
							</li>
						</ul>
					</li>
				
					<li>
						<a href="contact.html">Contact</a>
					</li>
				</ul>
			</div>
		</div>
    )
}
export default Header