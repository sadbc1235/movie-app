import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const detailUrl = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
  const getDetail = async () => {
    const json = await (await fetch(detailUrl)).json();
    setDetails(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <Movie
          id={details.id}
          coverImg={details.medium_cover_image}
          title={details.title}
          rating={details.rating}
          summary={details.description_full}
          genres={details.genres}
        />
      )}
    </>
  );
}

export default Detail;
