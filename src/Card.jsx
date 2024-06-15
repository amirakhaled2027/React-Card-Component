import image from "./assets/GCyRaZ4XoAAxweA.jpg"

function Card() {

    return(
        <div className="card">
            <img src={image} alt="profile picture" className="card-image"/>
            <h2>Fang Yuan</h2>
            <p>One of the greatest fictional character of all time</p>
        </div>
    )
}

export default Card