import { useEffect, useState } from "react";
import { Alert, Card, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CommentArea from "./CommentArea";

const MovieDetails = () => {
  const params = useParams();

  const [myObj, setMyObj] = useState({
    hasError: false,
    isLoading: true,
    film: {},
  });

  const fetchFilms = async () => {
    const URL = "http://www.omdbapi.com/?apikey=4ed6bf96&i=" + params.movieId;
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const parsebody = await response.json();
        console.log("parsebody", parsebody);
        setMyObj({ ...myObj, film: parsebody, isLoading: false });
      } else {
        setMyObj({ ...myObj, hasError: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      {!myObj.hasError &&
        (myObj.isLoading ? (
          <Spinner animation="border" variant="danger" />
        ) : (
          <div className="d-flex flex-column">
            <Card
              className="d-flex"
              style={{
                width: "18rem",
                backgroundColor: "#221f1f",
                color: "white",
                border: "1px solid #383333",
                marginInline: "auto",
                marginTop: "10px",
              }}
            >
              <Card.Img variant="top" src={myObj.film.Poster} />
              <Card.Body>
                <Card.Title>
                  <span className="fw-bolder">{myObj.film.Title}</span>
                </Card.Title>
                <Card.Text>
                  <span className="fw-bold">Tipologia:</span> {myObj.film.Type}
                </Card.Text>
                <Card.Text>
                  <span className="fw-bold">Classificato:</span>{" "}
                  {myObj.film.Rated}
                </Card.Text>
                <Card.Text>
                  <span className="fw-bold">Genere:</span> {myObj.film.Genre}
                </Card.Text>
                <Card.Text>
                  <span className="fw-bold">Trama:</span> {myObj.film.Plot}
                </Card.Text>
                <Card.Text>
                  <span className="fw-bold">Recensioni:</span>{" "}
                  {myObj.film.Ratings[0].Value}, da {myObj.film.imdbVotes}{" "}
                  utenti
                </Card.Text>

                <Card.Text>
                  <span className="fw-bold">Anno di uscita:</span>{" "}
                  {myObj.film.Released}
                </Card.Text>
                <Card.Text>
                  <span className="fw-bold">Anni di trasmissione:</span>{" "}
                  {myObj.film.Year}
                </Card.Text>
                <Card.Text>
                  <span className="fw-bold">Durata a episodio:</span>{" "}
                  {myObj.film.Runtime}
                </Card.Text>
                <Card.Text>
                  <span className="fw-bold">Lingua:</span> {myObj.film.Language}
                </Card.Text>
                <Card.Text>
                  <span className="fw-bold">Attori:</span> {myObj.film.Actors}
                </Card.Text>
                <Card.Text>
                  <span className="fw-bold">Awards:</span> {myObj.film.Awards}
                </Card.Text>
              </Card.Body>
              {/* <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>  */}
            </Card>

            <CommentArea asin={params.movieId} />
          </div>
        ))}
      {/* {myObj.isLoading && !myObj.hasError && (
        <Spinner animation="border" variant="danger" />
      )} */}
      {/* <div>
        Funzia
        {console.log("myobj", myObj.film)}
      </div> */}
    </>
  );
};

export default MovieDetails;
