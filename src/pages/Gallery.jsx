/* eslint-disable react/prop-types */
import { useState, Children, useCallback } from "react";
import {
  UserButton,
} from "@clerk/clerk-react";
import {galleryList} from "../assets/data.js"
import { Card } from "../components/Card.jsx";


export const Gallery = () => {
  const [images, setImages] = useState(galleryList);

  const moveImage = useCallback((dragIndex, hoverIndex) => {
    setImages((prevCards) => {
      const clonedCards = [...prevCards];
      const removedItem = clonedCards.splice(dragIndex, 1)[0];

      clonedCards.splice(hoverIndex, 0, removedItem);
      return clonedCards;
    });
  }, []);
  return (
    <main>
      <h1>Gallery</h1>
      <div>
        <UserButton />
      </div>
      {Children.toArray(
        images.map((image, index) => (
          <Card
            src={image.img}
            title={image.title}
            id={image.id}
            index={index}
            moveImage={moveImage}
          />
        ))
      )}
    </main>
  );
};
