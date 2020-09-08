import React, { useState } from "react";

export const GifGrid = ({ category }) => {
  const [count, setCount] = useState(0);

  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=Z2OW4NYMpLCg45YT4B2wLn2jnpWy1RUY";
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    console.log(gifs);
  };

  getGifs();

  return (
    <div>
      <h3>{category}</h3>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}></button>
    </div>
  );
};
