import { Link } from "react-router-dom"
import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";



function Projects() {
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


	return (
		<div id="body">
			<div className="header">
				<div>
					<h1>Projects</h1>
					<ul className="projectPage">
						{data.map((item) => (
							<li key={item.id}>
								<img src={item.imageUrl} alt={item.title} />
								<div className="centerText">
									<h1>{item.title}</h1>
									<p>{item.description}</p>
									<Link to={`/projects/${item.id}`} className="more">Read More</Link>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
export default Projects