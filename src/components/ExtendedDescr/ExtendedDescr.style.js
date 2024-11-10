import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    margin-top: 4rem;
    color: var(--text-col);
`

export const TextWrapper = styled.div`
    border-radius: 10px;
    padding: .2em .8em;
`

export const TextWrapperBordered = styled(TextWrapper)`
    box-shadow: var(--card-shadow);
    background: var(--card-bg);
`

export const TextWrapperColored = styled(TextWrapper)`
    background: ${props => props.color};
    box-shadow: var(--card-shadow);
`

export const Header = styled.h3`
    font-size: 24px;
    color: var(--header-col);
    & span {
        color: var(--orange);
    }
`

export const Text = styled.p`
    color: var(--text-col);
    font-size: 16px;
`
export const Comment = styled.p`
    color: var(--text-col);
    opacity: .75;
    font-size: 12px;
`
export const ListWrapper = styled.div`

`
export const ListItem = styled.div`

`
export const ListItemTitle = styled.p`
    color: var(--orange);
    font-size: 18px;
`
export const ListItemText = styled.p`
    white-space: pre-wrap;
`

export const ColoredHeaderWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 2em;
    align-items: center;
    justify-content: flex-start;
    background-color: ${props => props.color};
    border-radius: 10px;
    padding-left: 0.5em;
`

export const ColoredHeader = styled.h4`
    font-size: 20px;
    color: rgba(0,0,0, .65);
`
