import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div `
  @media (min-width: 720px) {
    display: flex;
  }
  display: none;
  padding: 0 32px;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    gap: 32px;
    margin: 0;
    padding: 24px 32px;
    align-items: center;

    li {
      a {
        text-decoration: none;
        color: black;
        padding: 8px;
        font-size: 18px;
      }
    }
  }
`

const Header = () => {
	return (
		<StyledWrapper>
			<h1>LOGO</h1>
			<ul>
				<li><a href="">Lorem</a></li>
				<li><a href="">Ipsum</a></li>
				<li><a href="">Dolor</a></li>
				<li><a href="">Sit</a></li>
				<li><a href="">Amet</a></li>
			</ul>
		</StyledWrapper>
	)
}

export default Header