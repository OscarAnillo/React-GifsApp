export const gifsGetter = async (cate) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=wAU7ASL8Xp10wUsviGJnthj8psT6Hzw1&limit=10&q=${cate}`;
  const resp = await fetch(url); // function fetch() from javascript
  const { data } = await resp.json(); // data array is being destructured from the api response

  const gifs = data.map((img) => { //img is my iterator
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  return gifs;
};
