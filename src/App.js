import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';
import FavoriteQuoteCard from "./components/FavoriteQuoteCard";
import QouteCard from "./components/QouteCard";

export default function App() {
  const [quote, setQuote] = useState([]);
  const [id, setId] = useState();
  const [favoriteQuote, setfavoriteQuote] = useState([]);
  const [relode, setRelode] = useState(false)
  const getQuote = async () => {
    try {
      let response = await axios.get("https://api.quotable.io/random");
      setQuote(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // const newQuote = () => {
  //   getQuote();
  //   setId(id + 2);
  // };

  const removeFavoriteQuote = (id) => {
    const favoritestate = [...favoriteQuote];
    const newFavorite = favoritestate.filter((q) => q.quote._id !== id);
    setfavoriteQuote(newFavorite);
  };

  const getFavorite = () => {
    console.log(favoriteQuote);
  };

  const addFavoriteQuote = () => {
    const newFavorite = [...favoriteQuote, { quote }];
    const arrFavorite = [...favoriteQuote];
    if (arrFavorite.length === 0) {
      setfavoriteQuote(newFavorite);
    } else {
      const result = [...favoriteQuote].find((q) => q.quote._id === quote._id);
      if (result) {
        setfavoriteQuote(arrFavorite);
      } else {
        setfavoriteQuote(newFavorite);
      }
    }
  };

  useEffect(() => {
    getQuote();
  }, [relode]);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>FAMOUS QUOTE</h1>
          </div>
          <div className="col-12 d-flex justify-content-center align-item-center mt-4">
            <QouteCard 
              quote={quote}
              setRelode={setRelode}
              addFavoriteQuote={addFavoriteQuote}
            />
          </div>
        </div>
        <div className="row">
          <h3 className="mt-4">Favorite Quote</h3>
          <div className="d-flex p-2 bd-highlight justify-content-center align-item-center flex-wrap mt-4">
            {favoriteQuote ? (
              favoriteQuote.map((item, index) => {
                return (
                  <FavoriteQuoteCard
                    key={index} 
                    quote={item.quote} 
                    removeFavoriteQuote={removeFavoriteQuote}
                  />
                );
              })
            ) : (
              <>
                <div className="spinner-grow text-secondary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
