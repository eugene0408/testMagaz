import styled from 'styled-components'

export const GoodImage = styled.div`
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    height: 250px;
    width: auto;
    border-radius: 10px;
    box-shadow: var(--card-shadow);
    margin-top: 4rem;
    @media (min-width: 768px){
        margin-top: 5rem;
    }
    @media (min-width: 1600px) {
        height: 400px;
    }
`

export const GoodTitle = styled.h3`
    font-size: 22px;
    font-weight: 700;
    color: var(--header-col);
    text-transform: uppercase;
`
export const GoodDescription = styled.p`
    font-size: var(--text-fz);
    color: var(--text-col);
    white-space: pre-wrap;
`

export const GoodPriceWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const GoodPrice = styled.p`
    font-size: 28px;
    font-weight: 700;
    text-align: right;
    color: var(--text-col);
     & span{
        font-size: 18px;
        font-weight: 700;
        color: var(--header-col);
    }
`
export const GoodSize = styled.p`
    font-size: 28px;
    color: var(--text-col);
    & span{
        font-size: 22px;
        color: var(--header-col);
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    @media (min-width: 768px){
        margin-top: 3rem;
    }
`

export const Header = styled.h3`
    font-size: 22px;
    font-weight: 700;
    color: var(--header-col);
    text-transform: uppercase;
    width: 100%;
    text-align: center;
`


