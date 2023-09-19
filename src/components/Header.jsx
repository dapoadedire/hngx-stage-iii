import {} from "@clerk/clerk-react";
import { UserButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="header">
            <h2>
                <Link to="/">Gallerie</Link>
            </h2>

            <nav>
                <SignedIn>
                    <UserButton />
                </SignedIn>

                <SignedOut>
                    <Link to="/sign-in">Sign In</Link>
                </SignedOut>

                <SignedOut>
                    <Link to="/sign-up">Sign Up</Link>
                </SignedOut>

                <SignedIn>
                    <Link to="/gallery">Gallery</Link>
                </SignedIn>
            </nav>
        </header>
    );
};
