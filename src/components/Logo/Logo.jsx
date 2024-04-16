/* Default imports */
import { LogoStyled } from './Logo.styled';
import logo from '../../img/logo512.png';



const Logo = () => {
  return (
    <LogoStyled href="">
      <img src={logo}
           alt=""
           width={15} /><p>React</p>
    </LogoStyled>
  );
};

export default Logo;
