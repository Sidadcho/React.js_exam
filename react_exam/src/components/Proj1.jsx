import { useState, useEffect, useContext } from 'react';
import { db } from "../firebase";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import Likes from './Likes';

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

	async function deleteData(e) {
		e.preventDefault();
		await deleteDoc(doc(db, "projects", params.id));
		navigate('/projects')
	}

	const { currentUser } = useContext(AuthContext);

	return (
		<div id="body">
			<div className="header">
				<div>
					<h1 >{data.title}</h1>
					<img src={data.imageUrl} alt=""></img>
					<h2>{data.subtitle}</h2>
					<p className='descriptionPage'>{data.description}</p>

					{!currentUser ? (<p></p>) : currentUser.uid == data.userId ? (<div className="btns">
						<Link to={`/update/${params.id}`} className='update-btn'>UPDATE</Link>
						<button onClick={deleteData} className="delete-btn">DELETE</button>
					</div>) : <p></p>}

					<Likes />

				</div>
			</div>
		</div>
	)

}

export default Proj1

