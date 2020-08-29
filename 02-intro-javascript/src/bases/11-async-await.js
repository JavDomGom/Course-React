// const getImagenPromesa = () =>
//   new Promise((resolve) => resolve("http://oiwjeofijwef.com"));

// getImagenPromesa().then(console.log);

const getImage = async () => {
  try {
    const apiKey = "Z2OW4NYMpLCg45YT4B2wLn2jnpWy1RUY";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    // Manejo del error.
    console.error(error);
  }
};

getImage();
