import {Link, Outlet} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { selectCart } from '../store/selectors';
import { selectTheme } from '../store/selectors';
import { setTheme } from '../store/themeSlice';

import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher';
import CatalogMenu from '../components/CatalogMenu/CatalogMenu'
import Footer from '../components/Footer/Footer'

import {ReactComponent as Logo} from '../assets/svg/logo.svg'
import {ReactComponent as CartIcon} from '../assets/svg/cart.svg'
import {ReactComponent as SunIcon} from '../assets/svg/sun.svg'
import {ReactComponent as MoonIcon} from '../assets/svg/moon.svg'

import { 
    AppContainer,
    ToplineContainer,
    ToplineNav,
    ToplineWrapper,
    ButtonsWrapper,
    CartAmount,
    SelectContainer,
    SelectWrapper,
    CartButtonWrapper,
    ThemeSwitch
 } from './Layout.styles'


const Layout = ()=> {

    const dispatch = useDispatch();
    const cart = useSelector(selectCart);
    const theme = useSelector(selectTheme);



    const cartAmount = () => {
        let amount = 0;
        for(let num in cart){
            amount += cart[num]
        }
        return amount;
    }
 
    return(
        <AppContainer>
            <ToplineWrapper>
                <ToplineContainer>
                    <ToplineNav>

                        <Link to={'/'}>
                            <Logo style={{height: '32px'}}/>
                        </Link>

                        <ButtonsWrapper>
                            <LanguageSwitcher />
                            <ThemeSwitch
                                onClick={() => theme === 'light' ? dispatch(setTheme('dark')) : dispatch(setTheme('light'))}
                            >
                                {theme === 'light' ? <SunIcon /> : <MoonIcon/> }
                            </ThemeSwitch>

                            <Link to={"cart"}>
                                <CartButtonWrapper>
                                    {Object.keys(cart).length >= 1 && 
                                        <CartAmount>
                                            {cartAmount() >= 99 ? "99" : cartAmount()}
                                        </CartAmount>
                                    }
                                    <CartIcon style={{height: "25px"}}/>
                                </CartButtonWrapper>
                            </Link>
                        </ButtonsWrapper>

                    </ToplineNav>
                </ToplineContainer>
            </ToplineWrapper>

            <SelectWrapper>
                <SelectContainer>
                    <CatalogMenu />
                </SelectContainer>
            </SelectWrapper>


            <Outlet />

        
            <Footer />
        </AppContainer>

    )
}

export default Layout