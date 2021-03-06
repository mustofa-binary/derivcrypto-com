import React from 'react'
import { StyledNav, CryptoIcon, StyledContainer } from './nav-style'
import Login from 'common/login'
import { Button } from 'components/elements'
import { localize } from 'components/localization'
import CryptoLogo from 'images/svg/nav/crypto-logo.svg'

export const Nav = () => {
    const [has_scrolled, setHasScrolled] = React.useState(false)
    const navRef = React.useRef()
    const minimum_scroll_height = 50
    const handleScroll = () => {
        const is_show = window.scrollY > minimum_scroll_height
        if (navRef.current !== is_show) {
            setHasScrolled(is_show)
        }
    }

    React.useEffect(() => {
        document.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleLogin = () => {
        Login.redirectToLogin()
    }

    return (
        <StyledNav has_scrolled={has_scrolled}>
            <StyledContainer>
                <CryptoIcon src={CryptoLogo} alt="Deriv Crypto Logo" />
                <Button onClick={handleLogin} primary aria-label="login button">
                    {localize('Login')}
                </Button>
            </StyledContainer>
        </StyledNav>
    )
}
