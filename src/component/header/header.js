import React, {Fragment} from 'react';
import HeaderTop from './headerTop';
import HeaderLogo from './headerLogo';
import HeaderMenu from './headerMenu';

const Header = () => {
  return (
	<React.Fragment>
        <header class="header-section">
			<HeaderTop />
			<HeaderLogo />
			<HeaderMenu />
        </header>
	</React.Fragment>
  )
}

export default Header
