import { Header } from "../components/Header";
import { NonSecureCard } from "../components/NonSecureCard";
import { galleryList } from "../assets/data.js";
import { Children } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {  SignedIn, SignedOut } from "@clerk/clerk-react";
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

<SignedOut>
<p>
    Sign in to use the drag and drop feature to rearrange your photos.
</p>
</SignedOut>

<SignedIn>
<p>
    <Link to="/gallery">Go to your gallery</Link> where you can drag and drop your photos.
</p>
</SignedIn>


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
