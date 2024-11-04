import styled from 'styled-components'

const smallButton = {
    height: '2.2rem',
    width: '8rem', 
    padding: '0 .5em',
    iconRightMargin: '.8rem',
    iconHeight: '100%'
}

const lagrgeButton = {
    height: '3rem',
    width: '12rem',
    padding: '0 2em',
    iconRightMargin: '1.6rem',
    iconHeight: '70%'
}

export const Button = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: var(--orange);
    color: var(--btn-text);
    border: none;
    border-radius: 10px;
    width: ${props => props.btnSize === 'large'? lagrgeButton.width : smallButton.width};
    height: ${props => props.btnSize === 'large'? lagrgeButton.height  : smallButton.height};
    padding: ${props => props.btnSize === 'large'? lagrgeButton.padding  : smallButton.padding};
    font-size: 12px;  
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
`

export const IconWrapper = styled.div`
    position: relative;
    height: ${props => props.btnSize === 'large' ? lagrgeButton.iconHeight : smallButton.iconHeight};
    margin-right: ${props => props.btnSize === 'large' ? lagrgeButton.iconRightMargin : smallButton.iconRightMargin};
    display: flex;
    align-items: center;
    & svg {
        width: 1.5rem;    
    }
    & svg path {
        fill: var(--btn-icon-fill);
    }
    @media (hover: hover){
        ${Button}:hover & svg path{
            fill: var(--btn-text);
        }
    }
`

export const IconAmount = styled.span`
    position: absolute;
    top: 12%;
    left: 32%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.6em;
    width: 1.6em;
    color: var(--btn-text);
    border: 1px solid rgba(256,256,256, .6);
    border-radius: 50%;
    text-align: center;
    font-size: 8px;
`

