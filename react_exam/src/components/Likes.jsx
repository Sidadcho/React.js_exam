import { useContext, useEffect, useState } from "react";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/authContext";
import { useParams } from "react-router-dom";




function Likes() {
    const [likes, setLikes] = useState(0);
    const [data, setData] = useState([]);
    const params = useParams();

    async function addLike(e) {
        e.preventDefault();
        setLikes(likes + 1)
        const updatingData = doc(db, "projects", params.id);
        await updateDoc(updatingData, {
            likes: likes,
        });
    }

    useEffect(() => {
        async function getDatas() {
            const docRef = doc(db, "projects", params.id);
            const docSnap = await getDoc(docRef);
            setData(docSnap.data());
        }
        getDatas()
        
    }, [])

    const { currentUser } = useContext(AuthContext);

    return (
        <div className="likesDiv">
            <span className="likeSpan">Likes: {data.likes}</span>
            {!currentUser ? <p></p> : <button onClick={addLike} className="likeBtn">Like</button>}
        </div>
    )
}

export default Likes