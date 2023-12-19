import { useContext, useEffect, useState } from "react";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/authContext";
import { useNavigate, useParams } from "react-router-dom";




function Likes() {
    const [data, setData] = useState([]);
    const params = useParams();
        const navigate = useNavigate()
        let btnDisabled = true

    async function addLike(e) {
        const updatingData = doc(db, "projects", params.id);
        await updateDoc(updatingData, {
            likes: data.likes + 1,
        });
        btnDisabled=false
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
            {!currentUser ? <p></p> : <button onClick={addLike} className={[btnDisabled ? 'active-like':'diactive-btn']}>Like</button>}
        </div>
    )
}

export default Likes