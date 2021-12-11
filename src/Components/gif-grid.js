import useFetchGifs from "../Hooks/useFetchGifs"; //Custom hook function

import GifGridItem from "./gif-grid-Item";

export default function GifGrid({ category }) {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading ? (
        "Loading"
      ) : (
        <div className="row animate__animated  animate__slideInUp">
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </div>
      )}
    </>
  );
}
