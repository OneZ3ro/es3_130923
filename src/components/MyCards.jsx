import { useEffect, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

// *TODO: 1) Fare una fetch di qualcosa, prendere l'array che mi arriva e per ogni elemento (e/o al massimo 6)
// *TODO:    visualizzare l'immagine del film
// *?:        <div className="col mb-2 px-1">
// *?:          <img className="img-fluid" src="dalla fetch" alt="forse dalla fetch" />
// *?:        </div>

const MyCards = (props) => {
  // state = {
  //   hasError: false,
  //   isLoading: true,
  //   films: [],
  // };

  const [myObj, setMyObj] = useState({
    hasError: false,
    isLoading: true,
    films: [],
  });

  const fetchFilms = async () => {
    const URL = "http://www.omdbapi.com/?apikey=4ed6bf96&s=" + props.film;
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const parsebody = await response.json();
        // console.log(parsebody);
        setMyObj({ ...myObj, films: parsebody.Search, isLoading: false });
      } else {
        setMyObj({ ...myObj, hasError: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // componentDidMount = () => {
  //   this.fetchFilms();
  // };

  useEffect(() => {
    fetchFilms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {myObj.hasError && (
        <Alert variant="danger">
          Errore nella fetch. La preghiamo di ricaricare la pagina
        </Alert>
      )}
      {myObj.isLoading && !myObj.hasError && (
        <Spinner animation="border" variant="danger" />
      )}
      {myObj.films.map((elem) => (
        <div className="col-md-2 col-3 mb-2 px-1" key={elem.imdbID}>
          {/* {console.log(elem)} */}
          <Link to={"/movieDetails/" + elem.imdbID}>
            <img className="img-fluid" src={elem.Poster} alt={elem.Title} />
          </Link>
        </div>
      ))}
    </>
  );
};

export default MyCards;
