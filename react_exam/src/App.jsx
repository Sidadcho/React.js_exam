import Header from "./components/header.jsx"
import Footer from "./components/footer.jsx"
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Projects from "./components/Projects.jsx"
import Contact from "./components/Contact.jsx"
import Proj1 from "./components/Proj1.jsx"
import Create from "./components/Create.jsx"

function App() {
	return (
		<div id="page">
			<Header />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/projects" element={<Projects />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
				<Route path="/proj1" element={<Proj1 />}></Route>
				<Route path="/create" element={<Create />}></Route>
			</Routes>
			<Footer />
		</div>
	)
}

export default App
