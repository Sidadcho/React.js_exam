import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/authContext";


function Profile(){
	const {currentUser} = useAuth()
    return(
        <div id="body" className="home">
			<div className="header">
			</div>
			<div className="body">
				<div>
					<h1>Welcome, <br/>{currentUser ? currentUser.email : "Guest"}!</h1>
					<p></p>
				</div>
			</div>
			<div className="footer">
				
			</div>
		</div>
    )
}

export default Profile