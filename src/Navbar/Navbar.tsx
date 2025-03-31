import * as S from './styles';
import Autocomplete from './Autocomplete/Autocomplete';

const Navbar = () => {
    return (
        <S.NavbarWrapper>
            <S.NavbarContentWrapper>
                <S.NavbarTitle >Shiori</S.NavbarTitle>
                <Autocomplete />
            </S.NavbarContentWrapper>
        </S.NavbarWrapper>
    );
}

export default Navbar;