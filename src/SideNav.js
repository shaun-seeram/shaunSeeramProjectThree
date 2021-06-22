function SideNav(props) {
    return (
        <div className="cartItemRow">
            <img src={props.art} alt={`Artwork for ${props.title}`} />
            <div className="cartText">
                <div>
                    <p>{props.title}</p>
                    <p>b{props.price}</p>
                </div>
                <button onClick={props.remove}>Remove</button>
            </div>
        </div>
    )
}

export default SideNav