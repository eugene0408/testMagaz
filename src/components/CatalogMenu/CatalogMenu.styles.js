import styled from 'styled-components'

export const MenuWrapper = styled.div`
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    border-radius: 10px;  
    width: ${props => props.expanded ? "220px": "150px"};
    transition: all .2s ease;
    @media (min-width: 768px){
        width: ${props => props.expanded ? "250px": "150px"};
    }
`

export const MenuButton = styled.div`
    width: 100%;
    height: 40px;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 .9rem;
    cursor: pointer;
    & svg {
        height: 1.2rem;
        width: 1.2rem;
    }
`
export const MenuList = styled.ul` 
    border-radius: 10px;
    list-style: none;
    padding: .9rem;
    margin-top: 1rem;
    padding-bottom: 2rem;
    @media (min-width: 768px){
        margin-top: 2rem;
    }
`

export const MenuListItem = styled.li`
    cursor: pointer;
    position: relative;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: .8rem;
    @media (min-width: 768px){
        margin-bottom: 1.2rem;
        &::after{
            content: '';
            position: absolute;
            bottom: 0;
            left: 20%;
            width: 80%;
            height: 1px;
            border-bottom: 1px dashed #ff5b38;
            transition: all .2s ease;
        }
        &:hover::after{
            border-bottom: 1px dashed black;
        }
        &:hover svg{
            border: 1px dashed black;
            padding: 5px;
        }
    }
    & a {
        display: flex;
        align-items: center;
        justify-content: start;
        color: black;
    }
    & svg {
        height: 32px;
        margin-right: .5rem;
        padding: .2rem;
        border: 1px dashed #ff5b38;
        border-radius: 50%;
        transition: all .2s ease;
    }
    & svg path {
        fill: rgba(0,0,0, .8);
    }
    `
