/* Default imports */

// Code...
import Logo from '../../components/Logo/Logo';
import { HeaderStyled } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <div className="Header__container">
        <Logo />
      </div>
    </HeaderStyled>
  );
};
