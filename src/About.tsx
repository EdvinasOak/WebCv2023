const About = () => {
	return (
		<div className='about'>
			<a className='aboutHeroTxt'>About Me</a>

			<div className='aboutFlexContainer'>
				<div className='aboutTextColumn1'>
					<div className='aboutText'>
						A highly skilled and motivated Front-End Developer with extensive
						experience building and maintaining enterprise software in the
						Contact Center sector. Expertise in HTML, CSS/SCSS,
						JavaScript/Typescript, and various modern frameworks to turn ideas
						into responsive, robust, and accessible websites. Seeking to
						collaborate with experienced teams to deliver an exceptional user
						experience.
						<p />
						When not coding I enjoy weight lifting, cooking, hiking, gaming and
						reading. Click here to find out what I'm reading wright now.
					</div>
				</div>
				<div className='aboutTextColumn2'>
					<div>
						<img
							className='blobAbout'
							src='src/assets/aboutBlob.svg'
							alt='My Happy SVG'
						/>
						<img
							className='mePic'
							src='src/assets/mePic.png'
							alt='My Happy SVG'
						/>
						<img
							className='blobAbout2'
							src='src/assets/blobAbout2.svg'
							alt='My Happy SVG'
						/>
						<img
							className='blobAbout3'
							src='src/assets/blobAbout3.svg'
							alt='My Happy SVG'
						/>
						<img
							className='blobAbout4'
							src='src/assets/blobAbout4.svg'
							alt='My Happy SVG'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
