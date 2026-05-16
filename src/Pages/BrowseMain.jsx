import { options } from "../Constant.js/contants";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BrowseMain = ({ movies }) => {
  const [movievideo, setmovievideo] = useState(null);
  const navigate = useNavigate();

  if (!movies) return null;

  const topratedMovie = movies?.results.filter(
    (movie) => movie.vote_average > 8
  );

  async function fetchMoviesvideo() {
    try {
      const result = await fetch(
        `https://api.themoviedb.org/3/movie/${topratedMovie[0].id}/videos?language=en-US`,
        options
      );

      const data = await result.json();

      setmovievideo(data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (topratedMovie.length > 0) {
      fetchMoviesvideo();
    }
  }, [movies]);

  if (!movievideo) return <h1>Loading...</h1>;

  return (
    <>
   
  <div className="aspect-video w-full">
  <iframe
    className="h-full w-full"
    src={`https://www.youtube.com/embed/${movievideo?.results?.[0]?.key}?autoplay=1&mute=1`}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
    allowFullScreen
  ></iframe>

  <div className="absolute top-1/3 left-6  w-[300px] text-white">
    <h2 className="text-2xl font-bold">{topratedMovie[0].title}</h2>
    <p className="text-sm mt-1">{topratedMovie[0].overview}</p>
    <div className="flex gap-4 mt-4">
  <button onClick={() => navigate(`/movie/${topratedMovie[0].id}`)} className="flex items-center gap-2 rounded-md bg-white px-6 py-2 text-lg font-semibold text-black transition hover:bg-white/80">
    ▶ Play
  </button>

  <button className="rounded-md bg-gray-500/70 px-6 py-2 text-lg font-semibold text-white transition hover:bg-gray-500/50">
    More Info
  </button>
</div>
    </div>
</div>
</>
  );
};

export default BrowseMain;