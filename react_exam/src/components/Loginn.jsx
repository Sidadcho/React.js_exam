function Login(){
    return(
        <div id="body">
			<div className="header">
				<div className="login">
					<h1>Login</h1>
					<h2>Please log in</h2>
					<form action="index.html">
						<input type="email" name="email" placeholder="email"></input>
						<input type="password" name="password" placeholder="password"></input>

						<input type="submit" value="login" id="submit"/>
					</form>
				</div>
			</div>
		</div>
    )
}

export default Login