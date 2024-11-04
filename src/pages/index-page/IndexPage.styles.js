import styled from 'styled-components'

import { Col } from 'react-grid-system'

export const SectionHeader = styled.h2`
    width: 100%;
    text-align: center;
    margin-top: 7rem;
    margin-bottom: 3rem;
    text-transform: uppercase;
    color: var(--header-col);
`

export const AboutImage = styled.div`
    background: url(${props => props.image});
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 280px;
    border-radius: 10px;
    box-shadow: var(--card-shadow);
    @media (min-width: 768px) {
        width: 80%
    }
`

export const AboutText = styled.p`
    margin-top: 0;
    text-align: left;
    color: var(--text-col);
    white-space: pre-wrap;
`
