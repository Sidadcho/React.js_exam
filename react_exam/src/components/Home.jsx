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
					<img src="https://www.pngall.com/wp-content/uploads/2017/01/Weather-Satellite-Free-Download-PNG.png" alt="" className="satellite"></img>
					<h1>SOYUZ TMA-M</h1>
					<h2>SPACECRAFT</h2>
					<h3>DIVE IN OUR SPACE</h3>
					<div className="home_pictures">
							<img src="https://media.wired.co.uk/photos/606dba78c36e357873e6cfef/3:2/pass/dasdasd.png" alt=""></img>
							<img src="https://res.cloudinary.com/momentum-media-group-pty-ltd/image/upload/v1686795211/Space%20Connect/space-exploration-sc_fm1ysf.jpg" alt=""></img>
							<img src="https://www.livemint.com/lm-img/img/2023/05/24/600x338/AP04-24-2023-000002B-0_1684900987128_1684901268251.jpg" alt=""></img>
							<img src="https://www.aerospacelab.be/wp-content/uploads/2022/12/PVCC-webstory-header.png" alt=""></img>
					</div>
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