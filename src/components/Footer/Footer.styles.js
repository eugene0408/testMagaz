import styled from 'styled-components'

export const Wrapper = styled.footer`
    width: 100%;
    position: absolute;
    bottom: 0;
    background: var(--card-bg);
    margin-top: 4rem;
    padding-top: 1rem;
    padding-bottom: 2rem;
`
export const Header = styled.h2`
    width: 100%;
    text-align: center;
    margin-bottom: 2.5rem;
    color: var(--header-col)
`

export const PhoneWrapper = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: 600;
    cursor: pointer;
    & svg{
        height: 24px;
        margin-right: 1rem;
        border-radius: 50%;
        border: 1px dashed var(--orange);
        padding: 2.5px;
        transition: .2s ease;
    }
    & svg path {
        fill: var(--text-col);
    }
    @media (hover: hover){
        &:hover svg path{
            fill: var(--orange)
        }
    }
`

export const SocialWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;  
    margin-top: 2.2rem; 
`

export const SocialLink = styled.a.attrs({
    /* target: '_blank' */
})`
    cursor: pointer;
    & svg {
        height: 22px;
        width: 22px;
        margin: 0 .5rem;
        transition: .2s ease;
    }
    & svg path {
        fill: var(--header-col)
    }
    @media (hover: hover){
        &:hover svg path{
            fill: var(--orange)
        }
    }

`


