import {
    UserButton,
  } from "@clerk/clerk-react";



export const Header = () => {
    return (
        <header className="header">
            <h2>
                Gallerie
            </h2>

            <UserButton />

            </header>
    );
}