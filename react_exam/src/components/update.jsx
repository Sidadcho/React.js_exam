import { addDoc, collection, doc, getDoc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";




function Update() {
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [description, setDescription] = useState('');
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

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updatingData = doc(db, "projects", params.id);
        await updateDoc(updatingData, {
            title: title,
            imageUrl: imageUrl,
            subtitle: subtitle,
            description: description

        });
        navigate('/projects');
    }
    return (
        <div id="body">
            <div className="header">
                <div className="update">
                    <h1>Update</h1>
                    <h2>Update your project details</h2>
                    <form onSubmit={handleUpdate} >
                        <input type="text" name="title" placeholder={data.title} onChange={e => setTitle(e.target.value)} ></input>
                        <input type="url" name="imageUrl" placeholder={data.imageUrl} onChange={e => setImageUrl(e.target.value)} ></input>
                        <input type="text" name="subtitle" placeholder={data.subtitle} onChange={e => setSubtitle(e.target.value)} ></input>
                        <textarea type="text" name="description" placeholder={data.description} onChange={e => setDescription(e.target.value)} ></textarea>
                        <input type="submit" value="Update" id="submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Update

