import { useEffect, useRef, forwardRef, ForwardedRef } from 'react';

const Home = forwardRef((props, ref: ForwardedRef<HTMLDivElement | null>) => {
	const homeRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (ref) {
			if (typeof ref === 'function') {
				ref(homeRef.current);
			} else {
				ref.current = homeRef.current;
			}
		}
	}, [ref]);

	return (
		<div ref={homeRef} className='Home'>
			<div className='homeHeroTextContainer'>
				<a className='homeHeroText1'>Hi, I’m Ed.</a>
				<br />
				<a className='homeHeroText2'>Web Developer</a>
				<br />
				<a className='homeHeroText3'>
					I like to craft exceptional user experiences
				</a>
			</div>
		</div>
	);
});

export default Home;
