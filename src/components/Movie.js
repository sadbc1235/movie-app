import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres, rating }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      {!rating ? (
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
      ) : (
        <h2>{title}</h2>
      )}
      {rating ? <span>{rating}</span> : null}
      <p>{summary}</p>
      <ul>
        {genres.map((g, index) => (
          <li key={index}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number,
};

export default Movie;
