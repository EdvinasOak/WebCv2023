const Contact = () => {
	return (
		<div className='Contact'>
			<a className='contactHeroTxt'>Contact</a>

			<div className='flexContainer'>
				<div className='flex-item-1'>
					<form className='contactForm'>
						<input
							className='email'
							type='text'
							placeholder='Email'
							name='email'
						/>
						<br></br>
						<input
							className='subject'
							type='text'
							placeholder='Subject'
							name='subject'
						/>
						<br></br>
						<textarea
							className='message'
							placeholder='Message'
							name='message'
						/>
						<button type='button'>Submit</button>
					</form>
				</div>
				<div className='flex-item-2'>
					<div className='socialsContainer'>
						<img
							className='socialsLogo'
							src='src/assets/LinkedIn.svg'
							alt='Linked In'
						/>
						<img
							className='socialsLogo'
							src='src/assets/CodePen.svg'
							alt='Linked In'
						/>
						<img
							className='socialsLogo'
							src='src/assets/Dribble.svg'
							alt='Linked In'
						/>
						<img
							className='socialsLogo'
							src='src/assets/Github.svg'
							alt='GitHub'
						/>
					</div>
				</div>
			</div>
			<img
				className='blobContact'
				src='src/assets/sw-js-blob-svg.svg'
				alt='My Happy SVG'
			/>
			<img
				className='blobContact2'
				src='src/assets/sw-js-blob-svg2.svg'
				alt='My Happy SVG'
			/>
			<img
				className='blobContact3'
				src='src/assets/sw-js-blob-svg3.svg'
				alt='My Happy SVG'
			/>
		</div>
	);
};

export default Contact;
