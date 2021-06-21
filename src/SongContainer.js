function SongContainer(props) {
    return (
        <div className="songContainer">
            <img src={props.imageUrl} alt={`Album artwork for ${props.title}`} key={props.id}/>
            <p>{props.title}</p>
            <button onClick={props.cart}>Cart</button>
        </div>
    )
}

export default SongContainer