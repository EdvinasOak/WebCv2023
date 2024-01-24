import { useEffect, useRef, forwardRef, ForwardedRef } from 'react';
import BlobAbout2 from './assets/blobAbout2.svg'; // Import the images
import BlobAbout1 from './assets/aboutBlob1.svg'; // Import the images
import smallBlob from './assets/smallBlob.svg'; // Import the images

const About = forwardRef((props, ref: ForwardedRef<HTMLDivElement | null>) => {
	const aboutRef = useRef<HTMLDivElement | null>(null);
	console.log('props', props);
	useEffect(() => {
		if (ref) {
			if (typeof ref === 'function') {
				ref(aboutRef.current);
			} else {
				ref.current = aboutRef.current;
			}
		}
	}, [ref]);

	return (
		<div ref={aboutRef} className='about'>
			<div className='aboutGridContainer'>
				<div className='aboutImageItem'>
					<div className='aboutImageGridContainer'>
						<div className='aboutDescriptionItem2'>
							<a className='aboutHeroTxt'>About Me</a>
							<div className='aboutText'>
								A highly skilled and motivated Front-End Developer with
								extensive experience building and maintaining enterprise
								software in the Contact Center sector. Expertise in HTML,
								CSS/SCSS, JavaScript/Typescript, and various modern frameworks
								to turn ideas into responsive, robust, and accessible websites.
								Seeking to collaborate with experienced teams to deliver an
								exceptional user experience.
								<p />
								{/* When not coding I enjoy weight lifting, cooking, hiking, gaming
								and reading. Click here to find out what I'm reading wright now. */}
							</div>
						</div>
						<div className='topImageItem'>
							<img className='blobAbout2' src={BlobAbout2} alt='My Happy SVG' />
						</div>
						<div className='centerImageItem'>
							<img className='blobAbout' src={BlobAbout1} alt='My Happy SVG' />
						</div>
						<div className='bottomImageItem'>
							<img className='leftBlob' src={BlobAbout2} alt='My Happy SVG' />
						</div>
						<div className='bottomImageItemLeft'>
							<img className='blobAbout3' src={smallBlob} alt='My Happy SVG' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});

export default About;
