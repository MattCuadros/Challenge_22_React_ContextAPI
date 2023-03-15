import { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { UserContext } from "../context/UserContextProvider";

export default function Favs() {
  const { photos, arrayFav } = useContext(UserContext);
  const count = photos.filter((item) => {
    return item.like;
  }).length;

  return (
    <>
      <div className="d-flex justify-content-center flex-column align-items-center">
        <h2>Favoritos</h2>
        {count === 0 ? (
          <>
            <h5>
              No tiene Fotos Favoritas, favor vuelva a Home y haga click en el
              corazón de la fotografía de su gusto
            </h5>
            <Link to="/">
              <button className="btn btn-info">Volver a Home</button>
            </Link>
          </>
        ) : (
          <div className="gallery">
            {arrayFav.map((item) => {
              return (
                <Card
                  key={item.id}
                  url={item.url}
                  alt={item.alt}
                  id={item.id}
                  like={item.like}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
