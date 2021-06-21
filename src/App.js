import './App.css';
import {useEffect, useState} from "react";
import SongContainer from "./SongContainer";
import Header from "./Header";
import CartCorner from "./CartCorner";
import Footer from "./Footer";
import SideNav from "./SideNav";

function App() {

  const [songs, setSongs] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [name, setName] = useState("Bingus")
  
  useEffect(() => {

    fetch("https://acnhapi.com/v1/songs/").then((data) => {
      return data.json()
    }).then((jsonData) => {
      setSongs(Object.values(jsonData));
    });
  
  }, []);

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

  useEffect(() => {
    setCartCount(cartItems.length);

  }, [cartItems]);

  function changeName(e) {
    setName(e.target.value);
  }

  return (
    <>
      <Header status={loggedIn} login={()=>{setLoggedIn(!loggedIn)}} name={name} test={changeName} />
      <div className="wrapper headerFlex">
        <p>{loggedIn ? "Welcome!" : "Please log in"}</p>
        { !loggedIn ? null : <CartCorner count={cartCount} /> }
        <nav>
        <h2>Cart</h2>
        { cartItems.map((song) => {
          return (
            <SideNav art={song.image_uri} title={song.name["name-EUen"]} key={song.id} remove={()=> {removeFromCart(song.id)}} />
            )
        }) }
        </nav>
      </div>
      <main className="songBody wrapper">
        { !loggedIn ? null : songs.map((song) =>{
            return (
                <SongContainer imageUrl={song.image_uri} title={song.name["name-EUen"]} key={song.id} cart={()=> {addToCart(song.id)}}/>
            )
          })
        }
      </main>
      <Footer />
    </>
  );
}

export default App;
