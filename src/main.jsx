import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HamburgerMenu from './HamburgerMenu.jsx'
import Sidebar from './Sidebar.jsx'
import styled from 'styled-components'
import Content from './Content.jsx'
import Header from './Header.jsx'

const StyledWrapper = styled.html`
  *, *::before, *::after {
    box-sizing: border-box;
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<StyledWrapper>
			<Header/>
			<Sidebar/>
			<Content/>
			<HamburgerMenu/>
		</StyledWrapper>
	</React.StrictMode>,
)
