/* eslint-disable react/prop-types */
import { useState, Children, useCallback } from "react";

import { galleryList } from "../assets/data.js";
import { Header } from "../components/Header.jsx";
import { Card } from "../components/Card.jsx";

export const Gallery = () => {
    const [images, setImages] = useState(galleryList);
    const [searchQuery, setSearchQuery] = useState("");

    const moveImage = useCallback((dragIndex, hoverIndex) => {
        setImages((prevCards) => {
            const clonedCards = [...prevCards];
            const removedItem = clonedCards.splice(dragIndex, 1)[0];

            clonedCards.splice(hoverIndex, 0, removedItem);
            return clonedCards;
        });
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();

        const filteredImages = galleryList.filter((image) =>
            image.tags.join(" ").includes(searchQuery.toLowerCase())
        );
        setImages(filteredImages);
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setSearchQuery(inputValue);

        const filteredImages = galleryList.filter((image) =>
            image.tags.join(" ").includes(inputValue.toLowerCase())
        );

        if (inputValue === "") {
            // If the input is empty, show all images
            setImages(galleryList);
        } else {
            setImages(filteredImages);
        }
    };

    return (
        <main>
            <Header />

            <section className="gallery">
                <div className="search-container">
                    <form onSubmit={handleSearch} className="search-form">
                        <input
                            type="text"
                            placeholder="Search by tag"
                            value={searchQuery}
                            onChange={handleInputChange}
                        />

                        <button type="submit">Search</button>
                    </form>
                </div>

                <div className="image-container">
                    {Children.toArray(
                        images.map((image, index) => (
                            <Card
                                src={image.img}
                                title={image.title}
                                id={image.id}
                                index={index}
                                moveImage={moveImage}
                                tags={image.tags}
                            />
                        ))
                    )}
                </div>
            </section>
        </main>
    );
};
