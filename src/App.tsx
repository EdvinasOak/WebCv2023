// App.jsx
import './App.css';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';
import { useRef } from 'react';

function App() {
	const homeRef = useRef(null);
	const aboutRef = useRef(null);
	const experienceRef = useRef(null);
	const contactRef = useRef(null);

	return (
		<>
			<Navbar
				homeRef={homeRef}
				aboutRef={aboutRef}
				contactRef={contactRef}
				experienceRef={experienceRef}
			/>
			<Home ref={homeRef} />
			<About ref={aboutRef} />
			<Skills />
			<Experience ref={experienceRef} />
			<Contact ref={contactRef} />
		</>
	);
}

export default App;
