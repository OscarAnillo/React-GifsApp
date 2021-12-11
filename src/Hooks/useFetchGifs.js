import { useState, useEffect } from "react";
import { gifsGetter } from "../Helpers/get-gifs"; //helper function

/* This is a custom hook */
export default function useFetchGifs(category) {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    gifsGetter(category).then(
      (imgs) => {
        setState({
          data: imgs,
          loading: false,
        });
      },
      [category]
    );
  });
  return state;
}
