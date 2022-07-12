// import { useState } from 'react'
import './index.css'
// import { useNavigate } from "react-router-dom";

function Card(props) {
    // const [currAlbum, setCurrAlbum] = useState("")
    // const [tracks, setTracks] = useState([])
    // let navigate = useNavigate();

    // let token = window.localStorage.getItem("token")

   
    return (
        <>
            <div className="Cards" onClick={(e) => { console.log("clicked")}}>
                {/* <Link to="/tracks"> */}
                <div className="Card" >
                    <img src={props.img_src}
                        alt="Artist Profile"
                        className="imgClass"
                    />
                    <p className="Artist Name">{props.name}</p>
        
                </div>
                {/* </Link> */}
            </div>
        </>
    )
}


export default Card;