function SideNav(props) {
    return (
        <div>
            <img src={props.art} alt={`Artwork for ${props.title}`} />
            <div className="cartFlex">
                <p>{props.title}</p>
                <button onClick={props.remove}>Remove</button>
            </div>
        </div>
    )
}

export default SideNav