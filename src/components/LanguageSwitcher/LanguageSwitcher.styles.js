import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: -100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 55px;
    border-radius: 10px;
    background-color: var(--glass-bg);
`

export const Button = styled.button`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 28px;
    border: 1px solid transparent;
    background: transparent;
    cursor: pointer;
    box-sizing: border-box;
    /* &:hover::after {
        content: '';
        height: 2px;
        width: 60%;
        position: absolute;
        bottom: 0;
        left: 20%;
        background: #ff5b38;
    } */
`

export const IconWrapper = styled.div`
    height: 28px;
    width: 100%;
    position: relative;
    text-transform: lowercase;
    font-size: 12px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    /* ${Button}:hover & {
        color: #ff5b38;
    } */
    & svg {
        height: 60%;
    }
`