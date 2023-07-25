import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 32px;

    div {
        width: 100%;
        height: 50vh;
        background: pink;

        &:hover {
            background: gray;
        }
    }
`

const Content = () => (
    <StyledWrapper>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </StyledWrapper>
)

export default Content
