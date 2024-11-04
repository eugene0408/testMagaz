import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 95vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Content = styled.span`
    font-size: 75px;
    transform: rotate(90deg);
    color: var(--text-col);
`

export const Orange = styled.span`
    color: var(--orange);
    letter-spacing: -0.1em;
`

export const Text = styled.h2`
    color: var(--text-col);
    text-transform: uppercase;
    margin-bottom: 7rem;
`