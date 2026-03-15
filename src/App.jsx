import { useState, useEffect } from "react";
import "./App.css";
import { Searchbar } from "./components/Searchbar";
import { ImageGallery } from "./components/ImageGallery";
import { Button } from "./components/Button";
import { Modal } from "./components/Modal";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("nature");
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (query === "") return;
    fetch(
      `https://pixabay.com/api/?key=55027447-f20308090ae9b5def1d57cd96&q=${query}&image_type=photo&page=${page}`,
    )
      .then((res) => res.json())
      .then((result) => {
        setImages((prev) => [...prev, ...result.hits]);
      });
  }, [page, query]);

  const handleSearch = (searchText) => {
    setImages([]);
    setPage(1);
    setQuery(searchText);
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
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
      <ImageGallery images={images} onImageClick={setSelectedImage} />

      {images.length > 0 && <Button onClick={loadMore} />}
      <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  );
};

export default App;
