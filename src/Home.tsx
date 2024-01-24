import { useEffect, useRef, forwardRef, ForwardedRef } from 'react';
import HomeCss from './styles/Home.module.css';
import { ReactTyped } from 'react-typed';

const Home = forwardRef((props, ref: ForwardedRef<HTMLDivElement | null>) => {
	const homeRef = useRef<HTMLDivElement | null>(null);
	console.log('props', props);

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
		<div ref={homeRef} className={HomeCss.Home}>
			<div className={HomeCss.homeGridContainer}>
				<div className={HomeCss.homeGridColumnItem1}></div>
				<div className={HomeCss.homeGridColumnItem2}>
					<div className={HomeCss.homeHeroTextContainer}>
						<a className={HomeCss.homeHeroText1}>Hi, I’m Ed.</a>
						<br />
						<a className={HomeCss.homeHeroText2}>Web Developer.</a>
						<br />
						<a className={HomeCss.homeHeroText3}>
							<ReactTyped
								strings={[
									'I convert coffee into ^400 lines of code ^1000',
									'I convert coffee into ^400 digital solutions ^1000',
									'I convert coffee into ^400 seamless web experience ^1000',
									'I convert ^400 ideas into ^500 products ^10000',
								]}
								typeSpeed={40}
								backSpeed={50}
								loop
								smartBackspace={true}
							></ReactTyped>
						</a>
					</div>
					<div className={HomeCss.homeGridColumnItem3}></div>

					<div className={HomeCss.homeGridColumn2Item1}></div>
					<div className={HomeCss.homeGridColumn2Item2}></div>
					<div className={HomeCss.homeGridColumn2Item3}></div>

					<div className={HomeCss.homeGridColumn3Item1}></div>
					<div className={HomeCss.homeGridColumn3Item2}></div>
					<div className={HomeCss.homeGridColumn3Item3}></div>
				</div>
			</div>
		</div>
	);
});

export default Home;
