// * ======= Third Party Components ======= */
import Logo from '../UI/Logo';
import MenuIcons from '../UI/MenuIcons';

//? ======== Local Components ========== */
import Themer from './../Header/Themer';
// import ProfilePreview from './ProfilePreview';

const Header = ({ showTheme }) => {
  return (
    <header className='search-header'>
      <Logo />
      <MenuIcons />
      <Themer />
      {/* <ProfilePreview /> */}
    </header>
  );
};

export default Header;
