import styled from 'styled-components';

export const CardWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    height: 5rem;
    width: 100%;
    border-radius: 10px;
    background-color: var(--card-bg);
    margin-bottom: .5rem;
    overflow: hidden;
    box-shadow: var(--card-shadow);
    color: var(--text-col);
`
export const CardImage = styled.div`
    height: 100%;
    width: 5rem;
    background: url(${props => props.image});
    background-size: cover;
    background-position: center;
    border-radius: 10px;
`

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 75%;
    padding: 0 .3rem;
`

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;   
    width: 50%;
`

export const Title = styled.p`
    text-align: left;
    width: 100%;
    margin: 0;
`
export const Price = styled.p`
    font-size: 18px;
    font-weight: 700;
     & span {
        font-size: var(--text-fz);
        font-weight: 700;
    }
`

export const AmountWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 10%;
    & svg path{
        fill: var(--header-col);
    }
`

export const AmountButton = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
`

export const TotalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    width: 40%;
    height: 100%;
`

export const TotalLabel = styled.p`
    margin: 0;
    font-size: 16px;
`

export const TotalPrice = styled(Price)`
    margin-top: .5rem;
    margin-bottom: 0;
`

export const DeleteButton = styled(AmountButton)`
    position: absolute;
    top: .1rem;
    right: .1rem;
    & svg {
        height: 1rem;
    }
    & svg path {
        fill: red;
    }
`
export const LinkArea = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
`