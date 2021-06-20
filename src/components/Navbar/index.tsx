import './style.scss';
import { ReactComponent as GlobeIcon } from '../../assets/svg/globe.svg';
import { ReactComponent as BarsIcon } from '../../assets/svg/bars.svg';
import { useState } from 'react';


function Navbar() {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<header>
			<nav className="navbar">
				<div className="logo">
					<a href="/"><GlobeIcon /></a>
					<BarsIcon className="menu" onClick={() => setOpen(!open)}/>
				</div>

				<ul className={`navbar-nav ${open ? 'active' : ''}`}>
					<li><a href="/">Home</a></li>
					<li><a href="/">About</a></li>
					<li><a href="/">Fireplace</a></li>
					<li><a href="/">Another Link</a></li>
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;