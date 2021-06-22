function SongContainer(props) {
    return (
        <div className="songContainer">
            <img src={props.imageUrl} alt={`Album artwork for ${props.title}`} key={props.id}/>
            <div className="songRow">
                <p className="title">{props.title}</p>
                <p>b{props.price}</p>
            </div>
            <button onClick={props.cart}>Add to Cart</button>
        </div>
    )
}

export default SongContainer