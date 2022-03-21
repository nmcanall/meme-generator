import {useState, useEffect} from "react";

function Meme() {

    const [memesArray, setMemesArray] = useState({});

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setMemesArray(data.data.memes))
    }, [])

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        url: "https://i.imgflip.com/1g8my4.jpg" 
    });

    function handleGetNewImage(e) {
        e.preventDefault();
        const randomInt = Math.floor((Math.random() * memesArray.length))
        setMeme(prevMeme => ({
                ...prevMeme,
                url: memesArray[randomInt].url
            })
        );
    }

    function changeText(e) {
        e.preventDefault();
        setMeme(prevMeme => ({
            ...prevMeme,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    onChange={changeText}
                    name="topText"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    onChange={changeText}
                    name="bottomText"
                />
                <button 
                    className="form--button"
                    onClick={handleGetNewImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.url} className="meme--image" alt="random-meme"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme;