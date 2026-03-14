import { useState, useEffect } from "react";
import "./App.css";
import { Searchbar } from "./components/Searchbar";
import { ImageGallery } from "./components/ImageGallery";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("nature");

  useEffect(() => {
    if (query === "") return;
    fetch(
      `https://pixabay.com/api/?key=55027447-f20308090ae9b5def1d57cd96&q=${query}&image_type=photo`,
    )
      .then((res) => res.json())
      .then((result) => {
        setImages(result.hits);
      });
  }, [query]);

  const handleSearch = (searchText) => {
    setQuery(searchText);
  };

  return (
    <>
      <h1 className="mainTitle">Image Gallery</h1>
      <p>
        {" "}
        For example (tree, autumn colors, nature, nature wallpaper, beautiful
        nature, water, fall, fall season, flora, plant, hd wallpaper){" "}
      </p>
      <Searchbar onSearch={handleSearch} />
      <ImageGallery images={images} />
    </>
  );
};

export default App;
