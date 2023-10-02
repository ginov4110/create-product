import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import App from "./routes/index"
import Navbar from "./components/navbar";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Navbar/>
		<App />
	</React.StrictMode>
);
