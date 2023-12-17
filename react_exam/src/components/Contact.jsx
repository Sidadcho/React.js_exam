function Contact(){
    return(
        <div id="body">
			<div class="header">
				<div class="contact">
					<h1>Contact</h1>
					<h2>DO NOT HESITATE TO CONTACT US</h2>
					<form action="index.html">
						<input type="text" name="Name" placeholder="Name" onblur="this.value=!this.value?'Name':this.value;" onfocus="this.select()" onclick="this.value='';"></input>
						<input type="text" name="Subject" placeholder="Subject" onblur="this.value=!this.value?'Subject':this.value;" onfocus="this.select()" onclick="this.value='';"/>
						<textarea name="message" placeholder="Message" cols="50" rows="7"></textarea>
						<input type="submit" value="Send" id="submit"/>
					</form>
				</div>
			</div>
		</div>
    )
}

export default Contact