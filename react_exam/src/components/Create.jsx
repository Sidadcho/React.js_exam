import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";


function Create() {
    const [title, setTitle] = useState({});
    const [imageUrl, setImageUrl] = useState({});
    const [subtitle, setSubtitle] = useState({});
    const [description, setDescription] = useState({});
    const [error, setError] = useState(false);
    const navigate = useNavigate();

   
    const handleUpdate = async (e) => {
        e.preventDefault();
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
            const uid = user.uid
            console.log(uid);
            try {
                await addDoc(collection(db, "projects"), {
                    userId: uid,
                    title: title,
                    imageUrl: imageUrl,
                    subtitle: subtitle,
                    description: description,
                    timeStamp: serverTimestamp()
                });
                navigate('/projects')
            } catch (err) {
                console.log(err);
            }
        });



    }
    return (
        <div id="body">
            <div className="header">
                <div className="create">
                    <h1>Create</h1>
                    <h2>What is your project?</h2>
                    <form onSubmit={handleUpdate} >
                        <input type="text" name="title" placeholder="TITLE" onChange={e => setTitle(e.target.value)}></input>
                        <input type="url" name="imageUrl" placeholder="IMAGE-URL" onChange={e => setImageUrl(e.target.value)}></input>
                        <input type="text" name="subtitle" placeholder="SUB-TITLE" onChange={e => setSubtitle(e.target.value)}></input>
                        <textarea type="text" name="description" placeholder="DESCRIPTION" onChange={e => setDescription(e.target.value)}></textarea>
                        <input type="submit" value="Create" id="submit"/>
                        {error && <span>All fields are required!</span>}

                    </form>
                </div>
            </div>
        </div>
    )
}
export default Create