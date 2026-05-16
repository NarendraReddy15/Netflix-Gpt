import { imgdisplayurl } from "../Constant.js/contants";
import { useNavigate } from "react-router-dom";

const MoviesCard = ({ path, movieid }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex-shrink-0 overflow-hidden rounded-md cursor-pointer"
      onClick={() => navigate(`/movie/${movieid}`)}
    >
      <img
        className="
          w-44
          md:w-52
          h-72
          object-cover
          rounded-md
          hover:scale-105
          transition-transform
          duration-300
        "
        src={`${imgdisplayurl}${path}`}
        alt="movie"
      />
    </div>
  );
};

export default MoviesCard;