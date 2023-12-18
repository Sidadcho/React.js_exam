import { useState, useEffect, useContext } from 'react';
import { db } from "../firebase";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

function Proj1() {
	const [data, setData] = useState([]);
	const navigate = useNavigate()

	const params = useParams();
	useEffect(() => {
			async function getDatas() {
				const docRef = doc(db, "projects", params.id);
				const docSnap = await getDoc(docRef);
				setData(docSnap.data());
			}
			getDatas()
	}, [])

	async function deleteData(e){
		e.preventDefault();
		await deleteDoc(doc(db, "projects", params.id));
		navigate('/projects')
	}

	const { currentUser } = useContext(AuthContext)
	
	return (
		<div id="body">
			<div className="header">
				<div>
					<h1 >{data.title}</h1>
					<img src={data.imageUrl} alt=""></img>
					<h2>{data.subtitle}</h2>
					<p className='descriptionPage'>{data.description}</p>
					{currentUser.uid == data.userId && (<div className="btns">
						<button className="update-btn">UPDATE</button>
						<button onClick={deleteData} className="delete-btn">DELETE</button>
					</div>)}
					
				</div>
			</div>
		</div>
	)

}

export default Proj1

