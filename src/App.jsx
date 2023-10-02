import React from "react";
import Navbar from "./components/navbar";
import { CreateProduct } from "./pages/create-product";
import LandingPage from "./pages/landing-page";

function App() {
	return (
		<>
			<LandingPage/>
			<CreateProduct />
		</>
	);
}

export default App;
