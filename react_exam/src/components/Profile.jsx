import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/authContext";


function Profile() {
    const { currentUser } = useAuth()
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0)


    useEffect(() => {
        async function fetchData() {
            let list = [];
            let projectCount = 0;

            try {
                const querySnapshot = await getDocs(collection(db, "projects"));
                querySnapshot.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() });
                });
                setData(list)

                list.forEach((item) => {
                    if (item.userId == currentUser.uid) {
                        projectCount++
                        setCount(projectCount)
                    }
                })
            } catch (err) {
                console.log(err);
            }
        }
        fetchData()
    }, [])



    return (
        <div id="body" className="profile home">
            <div className="profilePage body">
                <div>
                    <h1>Welcome, <br />{currentUser ? currentUser.email : "Guest"}!</h1>
                    <p>You have a total of {count} posts!</p>
                    {/* <iframe  src="https://www.youtube.com/embed/ztVV54sPOns&t=2s" frameborder="0"></iframe> */}
                </div>
            </div>
        </div>
    )
}

export default Profile