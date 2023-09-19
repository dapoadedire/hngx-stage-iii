
import { BrowserRouter as Router, Route, Routes, useNavigate  } from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
} from "@clerk/clerk-react";
import "./App.css";

import { Home } from "./pages/Home";
import {Gallery} from "./pages/Gallery";


const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;




function ClerkProviderWithRoutes() {
  const navigate = useNavigate();
 
  return (
    <ClerkProvider
      publishableKey={clerkPublishableKey}
      navigate={(to) => navigate(to)}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/sign-in/*"
          element={<SignIn routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />
        <Route
          path="/gallery"
          element={
          <>
            <SignedIn>
              <Gallery />
            </SignedIn>
             <SignedOut>
              <RedirectToSignIn />
           </SignedOut>
          </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
}




function App() {
  return (
    <Router>
      <ClerkProviderWithRoutes />
    </Router>
  );
}

export default App;

