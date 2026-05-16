import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { options } from "../Constant.js/contants";

export default function MoviePlayer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [key, setKey] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function fetchVideo() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          options
        );
        const data = await res.json();
        const trailer = data.results.find(
          (v) => v.type === "Trailer" && v.site === "YouTube"
        );
        if (!mounted) return;
        if (trailer) setKey(trailer.key);
        else setError("No trailer found for this movie.");
      } catch (err) {
        if (!mounted) return;
        setError(err.message || "Failed to fetch video.");
      } finally {
        if (!mounted) return;
        setLoading(false);
      }
    }

    fetchVideo();

    return () => {
      mounted = false;
    };
  }, [id]);

  return (
    <div className="p-4 min-h-screen bg-black text-white flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <button
          className="mb-4 px-4 py-2 rounded bg-gray-700 hover:bg-gray-600"
          onClick={() => navigate(-1)}
        >
          Back
        </button>

        {loading && <p>Loading trailer…</p>}
        {error && <p>{error}</p>}

        {key && (
          <div style={{ position: "relative", paddingTop: "56.25%" }}>
            <iframe
              title="movie-trailer"
              src={`https://www.youtube.com/embed/${key}?autoplay=1`}
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>
  );
}
