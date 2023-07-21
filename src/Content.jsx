import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div `
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		gap: 32px;
		span {
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
		<span></span>
		<span></span>
		<span></span>
		<span></span>
	</StyledWrapper>
)

export default Content