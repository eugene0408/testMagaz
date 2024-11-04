import styled from 'styled-components'
import { Container } from 'react-grid-system'

export const AppContainer = styled.div`
    min-height: 100vh;
`

export const ToplineWrapper = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    z-index: 2;
    @media (min-width: 768px) {
        background: transparent;
        backdrop-filter: none;
    }
`

export const ToplineContainer = styled(Container)`
    display: flex;
    justify-content: center;
`

export const ToplineNav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 3rem;
    width: 100%;  
    padding: 0 .8rem;
    @media (min-width: 768px) {
        background: var(--glass-bg);
        border-radius: 0 0 10px 10px;
        backdrop-filter: blur(10px);
        padding: .4rem .8rem;
    }
`
export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: center;
    width: 3.6rem;
    height: 28px;
`

export const SelectWrapper = styled.div`
    position: fixed;
    top: 3.5rem;
    width: 100%;
    z-index: 2;
`
export const SelectContainer = styled(Container)`
`
export const CartButtonWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
`
export const CartAmount = styled.span`
    position: absolute;
    left: 38%;
    top: 15%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 1.1em;
    width: 1.1em;
    font-size: 10px;
    border-radius: 50%;
    color: black;
    background: var(--yellow);
`

export const ThemeSwitch = styled.button`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border: none;
    background: transparent;
    cursor: pointer;
    & svg {
        width: 100%;
    }
    & svg * {
        fill: black;
    }
`