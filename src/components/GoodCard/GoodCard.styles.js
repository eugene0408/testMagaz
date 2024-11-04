import styled from 'styled-components'

export const CardWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    height: 17rem;
    width: 100%;
    box-shadow: var(--card-shadow);
    color: var(--text-col);
    @media (min-width: 576px) {
        height: 20rem;
    }
`
export const CardImage = styled.div`
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    height: 60%;
    width: 100%;
    transition: all .5s ease;
    @media (hover: hover){
        ${CardWrapper}:hover & {
            transform: scale(1.2) ;
        }
    }

`
export const CardContent = styled.div`
    border-radius: 0 15px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:0 .3rem .3rem .3rem;
    background: var(--card-bg);
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    @media (min-width: 576px) {
        padding: .5rem .5rem .7rem .5rem;
    }
`
export const Title = styled.h3`
    width: 100%;
    height: 2.2rem;
    margin: .3em;
    text-align: left;
    color: var(--header-col);
    display: inline-block;
    position: relative;
    text-transform: capitalize;
    font-size: 16px;
`

export const PriceWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5rem 0;
    @media (min-width: 576px) {
        padding: .3rem 0 1.1rem 0;
    }
`

export const Size = styled.p`
    margin: 0;
    font-size: 16px;
    & span {
        font-size: 12px;
        color: var(--header-col);
    }
`
export const Price = styled.p`
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    & span{
        font-size: var(--text-fz);
        color: var(--header-col);
        font-weight: 700;
    }
`

export const LinkArea = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 85%;
`
