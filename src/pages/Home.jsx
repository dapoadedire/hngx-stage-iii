import { Header } from "../components/Header";
import { NonSecureCard } from "../components/NonSecureCard";
import { galleryList } from "../assets/data.js";
import { Children } from "react";
import { useState } from "react";

export const Home = () => {
    const [images, setImages] = useState(galleryList);
    return (
        <div>
            <Header />

            <main>
                <section className="gallery">
                 <div
                 className="welcome-container"
                 >
                 <h2>Gallery</h2>

<p>
    Welcome to Gallerie, a place to share your photos with
    the world.
</p>
<p>
    Sign in to use the drag and drop feature to rearrange your photos.
</p>
                 </div>
                    <div className="image-container">
                        {Children.toArray(
                            images.map((image, index) => (
                                <NonSecureCard
                                    src={image.img}
                                    title={image.title}
                                    key={index}
                                    tags={image.tags}
                                />
                            ))
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
};
