import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Favourites.css";

//This component renders favourites page and display favourite dogs.
function Favourites() {
    const [favDogImg] = useState(JSON.parse(localStorage.getItem("favDogImg")));
    let navigate = useNavigate();

    //Function to redirect to home page
    const goHome = () => {
        navigate("/");
    }

    return (
        <div className='Favourites'>
            <div className="header">
                <h1>Favourite Dogs</h1>
                <button type="button" onClick={() => goHome()}>Home</button>
            </div>
            <div className='row' >
                {favDogImg.length ? favDogImg.map((item, i) =>
                    <div className='column' key={i}>
                        <img src={item} alt='' height='300' />
                    </div>
                ) : <div className="no-data"><p>No Favourite Dogs found.</p></div>}
            </div>
        </div>
    );
}

export default Favourites;
