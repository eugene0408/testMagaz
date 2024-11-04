import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    cursor: pointer;
    @media (min-width: 768px){
        padding-bottom: 1rem;
    }

`
export const Image = styled.div`
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    height: 120px;
    width: 120px;
    transition: all .3s ease;
    @media (hover: hover){
        ${Wrapper}:hover & {
            box-shadow: var(--card-shadow);
            transform: scale(1.1)
        }
    }
`

export const Title = styled.h3`
    color: var(--header-col);
    text-align: center;
    transition: .3s ease;
    text-transform: capitalize;
    @media (hover: hover){
        ${Wrapper}:hover & {
            color: var(--text-col);
        }
    }
`