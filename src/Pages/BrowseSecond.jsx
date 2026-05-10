import MoviesCard from "./MoviesCard";

const BrowseSecond = ({ movies }) => {
  return (
    <div className="bg-black px-6 py-4 -mt-[130px] space-y-8">
      
      <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
        {movies?.results?.map((movie) => (
          <MoviesCard
            key={movie.id}
            path={movie.poster_path}
          />
        ))}
      </div>
        <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
        {movies?.results?.map((movie) => (
          <MoviesCard
            key={movie.id}
            path={movie.poster_path}
          />
        ))}
      </div>
        <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
        {movies?.results?.map((movie) => (
          <MoviesCard
            key={movie.id}
            path={movie.poster_path}
          />
        ))}
      </div>

      <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
        {movies?.results?.map((movie) => (
          <MoviesCard
            key={movie.id}
            path={movie.poster_path}
          />
        ))}
      </div>

    </div>
  );
};

export default BrowseSecond;