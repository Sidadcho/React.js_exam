function Register(){
    return(
        <div id="body">
			<div className="header">
				<div className="register">
					<h1>Register</h1>
					<h2>Please register</h2>
					<form action="index.html">
						<input type="name" name="name" placeholder="name" ></input>
						<input type="email" name="email" placeholder="email" ></input>
						<input type="password" name="password" placeholder="password" ></input>
						<input type="repass" name="repass" placeholder="repeat-password" ></input>

						<input type="submit" value="Register" id="submit"/>
					</form>
				</div>
			</div>
		</div>
    )
}

export default Register