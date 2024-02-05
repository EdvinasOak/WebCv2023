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
				<div className={HomeCss.homeGridColumnItem1}>
					<span className={HomeCss.curlyBrace}>{'{ }'}</span>
					<span className={HomeCss.notEqualMobile}>{'!='}</span>

					<span className={HomeCss.dblApostrophe}>{'" "'}</span>
				</div>
				<div className={HomeCss.homeGridColumnItem2}>
					<div className={HomeCss.homeHeroTextContainer}>
						<a className={HomeCss.homeHeroText1}>Hi, I’m Ed.</a>
						<br />
						<a className={HomeCss.homeHeroText2}>Web Developer.</a>
						<br />
						<a className={HomeCss.homeHeroText3}>
							<ReactTyped
								strings={[
									'^800 I convert coffee into ^400 lines of code ^1000',
									'I convert coffee into ^400 digital solutions ^1000',
									'I convert coffee into ^400 seamless web experiences ^1000',
									'I convert ^400 ideas into ^500 reality ^10000',
								]}
								typeSpeed={40}
								backSpeed={50}
								loop
								smartBackspace={true}
							></ReactTyped>
						</a>
					</div>
				</div>
				<div className={HomeCss.homeGridColumnItem3}>
					<span className={HomeCss.squareBrackets}>{'[ ]'}</span>
					<span className={HomeCss.and2}>{'&&'}</span>
				</div>

				<div className={HomeCss.homeGridColumn2Item1}>
					<span className={HomeCss.and}>{'&&'}</span>
					<span className={HomeCss.notEqual}>{'!='}</span>
				</div>
				<div className={HomeCss.homeGridColumn2Item2}>
					<span className={HomeCss.dollarSign}>{'$'}</span>
				</div>
				<div className={HomeCss.homeGridColumn2Item3}>
					<span className={HomeCss.backticks}>{"' '"}</span>
				</div>

				<div className={HomeCss.homeGridColumn3Item1}>
					<span className={HomeCss.equal}>{'=='}</span>
					<span className={HomeCss.closingTag}>{'</>'}</span>
				</div>
				<div className={HomeCss.homeGridColumn3Item2}>
					<span className={HomeCss.semicolon}>{';'}</span>
				</div>
				<div className={HomeCss.homeGridColumn3Item3}>
					<span className={HomeCss.lessOrEqual}>{'<='}</span>
				</div>
			</div>
		</div>
	);
});

export default Home;
