import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";

//This component renders Home page
function Home() {
    const [dogImg, setDogImg] = useState([]);
    const [favDogImg, setFavDogImg] = useState([]);
    let navigate = useNavigate();

    //Function to get the 6 random URL from the external API using axios  module.
    const getData = async () => {
        const imageFormats = ['jpg', 'jpeg', 'png', 'JPG', 'gif', 'webp', 'svg'];
        const dataArr = [];
        while (dataArr.length < 6) {
            const res = await axios.get(`https://random.dog/woof.json`);
            const lastIndex = res.data.url.lastIndexOf('.');
            const responseImgFormat = res.data.url.slice(lastIndex + 1);
            if (imageFormats.includes(responseImgFormat)) {
                dataArr.push(res.data.url);
            }
        }
        setDogImg(dataArr);
    };

    useEffect(() => {
            getData();
    }, []);

    //Function to set URL into favDogImg useState.
    const setFavDogs = (item) => {
        if (!favDogImg.includes(item)) {
            setFavDogImg(arr => [...arr, item]);
        }
    }

    //Function to get the next 6 dog URLs from the external API.
    const refresh = () => {
        setDogImg([]);
        getData();
    }

    //Function to set the favourite dogs in localStorage and redirect to /favourites page.
    const goFavourites = () => {
        localStorage.setItem("favDogImg", JSON.stringify(favDogImg));
        navigate("/favourites");
    }

    return (
        <div className='Home'>
            <div className="header">
                <h1>Dog Gallery</h1>
                <button type="button" onClick={() => refresh()}>Next/Refresh</button>
                <button type="button" onClick={() => goFavourites()}>Favourites</button>
            </div>
            <div className='row' >
                {dogImg.length ? dogImg.map((item, i) =>
                    <div className='column' key={i}>
                        <div className='image'>
                            <img src={item} alt={i} height='300' onClick={() => setFavDogs(item)} />
                        </div>
                    </div>
                ) : <div className="no-data"><p>Loading images ....</p></div>}
            </div>

        </div>
    );
}

export default Home;
