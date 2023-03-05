// * ======= Third Party Components ======= */
import Logo from '../UI/Logo';
import MenuIcons from '../UI/MenuIcons';

//? ======== Local Components ========== */
import Themer from './../Header/Themer';

const Header = () => {
  return (
    <header className='search-header'>
      <Logo />
      <MenuIcons />
      <Themer />
    </header>
  );
};

export default Header;
