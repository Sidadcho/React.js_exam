import { useState, useEffect } from 'react';
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom';

function Proj1() {
	const [data, setData] = useState([]);

	const params = useParams();
	useEffect(() => {
			async function getDatas() {
				const docRef = doc(db, "projects", params.id);
				const docSnap = await getDoc(docRef);
				setData(docSnap.data());
			}
			getDatas()
	}, [])
	return (
		<div id="body">
			<div className="header">
				<div>
					<h1 >{data.title}</h1>
					<img src={data.imageUrl} alt=""></img>
					<h2>{data.subtitle}</h2>
					<p>{data.description}</p>
					<div className="btns">
						<button className="update-btn">Update</button>
						<button className="delete-btn">Delete</button>
					</div>
				</div>
			</div>
		</div>
	)

}

export default Proj1

