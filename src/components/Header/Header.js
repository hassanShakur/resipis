// * ======= Third Party Components ======= */
import MenuIcons from '../UI/MenuIcons';

//? ======== Local Components ========== */
import Themer from './../Header/Themer';

const Header = () => {
  return (
    <header className='search-header'>
      <MenuIcons />
      <Themer />
    </header>
  );
};

export default Header;
