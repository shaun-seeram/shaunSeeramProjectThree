import './App.css';
import {useEffect, useState} from "react";
import SongContainer from "./SongContainer";
import Header from "./Header";
import CartCorner from "./CartCorner";
import Footer from "./Footer";
import bob from "./images/bob.gif";
import ShoppingCart from "./ShoppingCart";

function App() {

  const [songs, setSongs] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [name, setName] = useState("Bingus")
  const [loading, setLoading] = useState(true)
  
  // Call the API --------------------
  useEffect(() => {

    fetch("https://acnhapi.com/v1/songs/").then((data) => {
      return data.json()
    }).then((jsonData) => {
      setSongs(Object.values(jsonData));
      {setLoading(false)}
    });
  
  }, []);

  // Set the user's name -------------
  function changeName(e) {
    setName(e.target.value);
  }

  // Add to cart function ------------
  const addToCart = (songID) => {
    // Add to Shopping Cart
    let copiedCart = [...cartItems];
    songs.forEach((song) => {
      if (song.id === songID) {
        copiedCart.push(song)
      }
    });
    setCartItems(copiedCart)

    // Remove from Inventory
    const filteredArray = songs.filter((song) => {
      return song.id !== songID
    });
    setSongs(filteredArray);
  }

  // Remove from cart function -------
  const removeFromCart = (songID) => {
    // Add to Song Array
    let copiedSongs = [...songs];
    cartItems.forEach((song) => {
      if (song.id === songID) {
        copiedSongs.push(song)
      }
    });
    setSongs(copiedSongs)

    // Remove from Cart
    const filteredArray = cartItems.filter((song) => {
      return song.id !== songID
    });
    setCartItems(filteredArray);
  }

  // Set the cart counter ------------
  useEffect(() => {
    setCartCount(cartItems.length);
  }, [cartItems]);

  return (
    <>
      <Header status={loggedIn} login={()=>{setLoggedIn(!loggedIn)}} name={name} test={changeName} />

      <div className="wrapper headerFlex">

        <p>{loggedIn ? "Welcome!" : null}</p>

        { !loggedIn ? <img src={bob} alt="Gif of Animal Crossing Bob spinning" className="bob" /> : <CartCorner count={cartCount} /> }

        <ShoppingCart cart={cartItems} remove={removeFromCart} count={cartCount}/>

      </div>

      <main className="songBody wrapper">

        { 
          !loggedIn ? null : loading ? <p>One moment please...</p> : songs.map((song) =>{
            return (
              <SongContainer imageUrl={song.image_uri} title={song.name["name-EUen"]} price={song["sell-price"]} key={song.id} cart={()=> {addToCart(song.id)}}/>
            )
          })
        }

      </main>

      <Footer />

    </>
  );
}

export default App;
