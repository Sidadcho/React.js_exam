import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";




function Home(){
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			let list = [];
			try {
				const querySnapshot = await getDocs(collection(db, "projects"));
				querySnapshot.forEach((doc) => {
					list.push({ id: doc.id, ...doc.data() });
				});
				setData(list)
			} catch (err) {
				console.log(err);
			}
		}
		fetchData()
	}, [])
	
    return(
        <div id="body" className="home">
			<div className="header">
				<div>
					<img src="images/satellite.png" alt="" className="satellite"></img>
					<h1>SOYUZ TMA-M</h1>
					<h2>SPACECRAFT</h2>
					<h3>DIVE IN OUR SPACE</h3>
					<ul>
						<li>
							<img src="images/project-image1.jpg" alt=""></img>
						</li>
						<li>
							<img src="images/project-image2.jpg" alt=""></img>
						</li>
						<li>
							<img src="images/project-image3.jpg" alt=""></img>
						</li>
						<li>
							<img src="images/project-image4.jpg" alt=""></img>
						</li>
					</ul>
				</div>
			</div>
			<div className="body">
				<div>
					<h1>OUR MISSION</h1>
					<p>Keeping you all up with the latest of space technology, by using your own projects as proof!</p>
				</div>
			</div>
			<div className="footer">
				<div>
					<ul>
						<li>
							<h1>FEATURED VIDEO</h1>
							<a href="https://www.youtube.com/watch?v=qDhP6lUO_AY" alt=""></a>
						</li>
						<li>
							<h1>LATEST PROJECTS</h1>
							<ul>
							{data.map((item) => (
							<li key={item.id}>
								<img className="homeImage" src={item.imageUrl} alt={item.title} />
								<div className="homePageText">
									<h1 >{item.title}</h1>
									<p >{item.description}</p>
								</div>
							</li>
						))}
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
    )
}

export default Home