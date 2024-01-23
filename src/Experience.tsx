import { ForwardedRef, forwardRef, useEffect, useRef } from 'react';

const Experience = forwardRef(
	(props, ref: ForwardedRef<HTMLDivElement | null>) => {
		const experienceRef = useRef<HTMLDivElement | null>(null);
		console.log('props', props);

		useEffect(() => {
			if (ref) {
				if (typeof ref === 'function') {
					ref(experienceRef.current);
				} else {
					ref.current = experienceRef.current;
				}
			}
		}, [ref]);

		return (
			<div ref={experienceRef} className='Experience'>
				<div className='grid-container'>
					<div className='heroTxtItem'>
						<a className='experienceHeroTxt'>Experience</a>
					</div>
					<div className='jobItem'>
						Front-End Developer, Avaya
						<br />
						Jun 2018 -
					</div>
					<div className='jobItem2'>
						Intern, AFK Digital Agency
						<br />
						Oct 2017 - Jan 2018
					</div>

					<div className='jobLine'>
						<span className='circle'></span>
						<span className='dotCircle'></span>
						<span className='verticalLine'></span>
					</div>
					<div className='jobLine2'>
						<span className='circleTwo'></span>
						<span className='dotCircle'></span>
						<span className='verticalLine'></span>
					</div>
					<div className='descriptionItem'>
						<li>
							Developed and maintained a browser-based Contact Centre (SPA),
							along with administrative and data visualisation applications,
							employing Angular 2+, TypeScript, and SCSS. This effort resulted
							in creating applications used by thousands of agents and
							supervisors, offering exceptional user experiences, trusted, and
							utilized by global industry leaders.
						</li>
						<p />
						<li>
							Conducted code reviews to maintain code quality, readability, and
							adherence to coding standards.
						</li>
						<p />

						<li>
							Conducted code reviews to maintain code quality, readability, and
							adherence to coding standards.
						</li>
						<p />

						<li>
							Implemented automated and unit tests across a variety of projects,
							identifying software shortcomings before they could impact the
							customer.
						</li>
						<p />

						<li>
							Documented new features and critical project details to ensure
							that developers, testers, and other stakeholders possessed a clear
							comprehension of the intended functionality of the feature.
						</li>
						<p />
						<li>
							Supervised licenses for open and proprietary source libraries via
							Blackduck. This ensured licence compliance, mitigation of security
							vulnerabilities, and reduction of potential code-quality risks.
						</li>
					</div>

					<div className='descriptionItem2'>
						<li>
							Transformed designs into digital user experiences for renowned
							brands like Mini and BMW. In the process, learned about DOM,
							JavaScript, stylesheet manipulation and version control.
						</li>
						<p />
						<li>
							Conducted cross-browser testing and promptly resolved any issues
							highlighted by the QA team, ensuring the delivery of high-quality
							products.
						</li>
						<p />
						<li>
							Additionally, gained exposure to day-to-day software development
							activities, such as participating in stand-up meetings, code
							reviews, and task management tools like Trello, while also
							building interpersonal skills by collaborating with team members,
							whether locally or remotely, through Slack.
						</li>
					</div>
				</div>
			</div>
		);
	}
);

export default Experience;
