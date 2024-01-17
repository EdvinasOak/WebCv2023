import { useEffect, useRef, forwardRef, ForwardedRef } from 'react';

const Contact = forwardRef(
	(props, ref: ForwardedRef<HTMLDivElement | null>) => {
		const contactRef = useRef<HTMLDivElement | null>(null);

		useEffect(() => {
			if (ref) {
				if (typeof ref === 'function') {
					ref(contactRef.current);
				} else {
					ref.current = contactRef.current;
				}
			}
		}, [ref]);

		return (
			<div ref={contactRef} className='Contact'>
				<div className='contactGridContainer'>
					<div className='contactHeroTxtItem'>
						<a className='contactHeroTxt'>Contact</a>
					</div>
					<div className='contactFormItem'>
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
						</form>
						<button type='button'>Submit</button>
					</div>
					<div className='blobContact' />
					<div className='blobContact2' />
					<div className='blobContact3' />

					<div className='contactSocialsItem'>
						<div className='socialsContainer'>
							<img
								className='socialsLogo'
								src='src/assets/LinkedIn.svg'
								alt='Linked In'
							/>
							<img
								className='socialsLogo'
								src='src/assets/CodePen.svg'
								alt='Code pen'
							/>
							<img
								className='socialsLogo'
								src='src/assets/Dribble.svg'
								alt='Dribble'
							/>
							<img
								className='socialsLogo'
								src='src/assets/Behance.svg'
								alt='Behance'
							/>
							<img
								className='socialsLogo'
								src='src/assets/Github.svg'
								alt='GitHub'
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
);

export default Contact;
