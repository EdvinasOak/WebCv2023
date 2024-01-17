import React, { useState } from 'react';
import NavBarCss from './styles/Navbar.module.css';

interface NavbarProps {
	homeRef: React.RefObject<HTMLElement>;
	aboutRef: React.RefObject<HTMLElement>;
	experienceRef: React.RefObject<HTMLElement>;
	contactRef: React.RefObject<HTMLElement>;
}

const Navbar: React.FC<NavbarProps> = ({
	homeRef,
	aboutRef,
	experienceRef,
	contactRef,
}) => {
	const [burgerMenuActive, setBurgerMenuActive] = useState(false);

	const activateLasers = () => {
		setBurgerMenuActive(!burgerMenuActive);
		console.log(burgerMenuActive);
	};

	const scrollTo = (position: string) => {
		switch (position) {
			case 'Home':
				homeRef.current?.scrollIntoView({ behavior: 'smooth' });
				break;
			case 'About':
				aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
				break;
			case 'Skills':
				break;
			case 'Experience':
				experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
				break;
			case 'Contact':
				contactRef.current?.scrollIntoView({ behavior: 'smooth' });
				break;
			default:
		}
	};

	return (
		<div
			className={`${NavBarCss.Navbar} ${
				burgerMenuActive ? NavBarCss.open : ''
			}`}
		>
			<div onClick={activateLasers} className={NavBarCss.NavbarDesktop}>
				<div
					className={`${NavBarCss.burgerMenu} ${
						burgerMenuActive ? NavBarCss.active : ''
					}`}
				>
					<span className={NavBarCss.bar1}></span>
					<span className={NavBarCss.bar2}></span>
					<span className={NavBarCss.bar3}></span>
				</div>

				<li onClick={() => scrollTo('Home')} id={NavBarCss.menuItem}>
					Home
				</li>
				<li onClick={() => scrollTo('About')} id={NavBarCss.menuItem}>
					About Me
				</li>
				{/* <li onClick={() => scrollTo('Skills')} id={NavBarCss.menuItem}>
					Skills
				</li> */}
				<li onClick={() => scrollTo('Experience')} id={NavBarCss.menuItem}>
					Experience
				</li>
				<li onClick={() => scrollTo('Contact')} id={NavBarCss.menuItem}>
					Contact Me
				</li>
			</div>
		</div>
	);
};

export default Navbar;
