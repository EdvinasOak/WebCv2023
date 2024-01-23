import { useEffect, useRef, forwardRef, ForwardedRef } from 'react';
import HomeCss from './styles/Home.module.css';

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
		<div ref={homeRef} className={HomeCss.Home}>
			<div className={HomeCss.homeGridContainer}>
				<div className={HomeCss.homeGridColumnItem1}>a</div>
				<div className={HomeCss.homeGridColumnItem2}>
					<div className={HomeCss.homeHeroTextContainer}>
						<a className={HomeCss.homeHeroText1}>Hi, I’m Ed.</a>
						<br />
						<a className={HomeCss.homeHeroText2}>Web Developer</a>
						<br />
						<a className={HomeCss.homeHeroText3}>
							I like to craft exceptional user experiences
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
