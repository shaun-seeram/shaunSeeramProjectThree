import SideNav from "./SideNav";

function ShoppingCart(props) {
    return (
        <section className="cart">
            <h2>Cart</h2>
            { props.cart.map((song) => {
            return (
                <SideNav art={song.image_uri} title={song.name["name-EUen"]} price={song["sell-price"]} key={song.id} remove={()=> {props.remove(song.id)}} />
                )
            }) }
            <p className="totalPrice">Total Price: b{props.count * 800}</p>
        </section>
    )
}

export default ShoppingCart;