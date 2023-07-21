import React, {useState} from 'react'
import styled from 'styled-components'

const StyledList = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
	background: white;
  list-style: none;
  width: 100%;
  height: 100vh;
  transition: 0.2s ease;
  transform: translateX(${({isOpen}) => isOpen ? 0 : '-100%'});

  @media (min-width: 720px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: 82px;
    width: 300px;
    border-right: 3px solid black;
    animation: none;
    transition: transform 0.3s ease-in-out;
    transform: translateX(${({isOpen}) => isOpen ? 0 : '-100%'});
  }

  ul {
    padding: 82px 0;
    margin: 0;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    list-style: none;

    @media (min-width: 720px) {
      padding: 0 20px 20px 20px;

    }

    li {
      a {
        text-decoration: none;
        color: black;
        font-size: 24px;

        &:hover {
          border-bottom: 2px solid black;
        }
      }
    }
  }
`

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  z-index: 1;
  position: absolute;
  top: 20px;
  left: 20px;
  overflow-x: hidden;
  background-color: white;
  border: 2px solid black;

  span {
    &:first-child {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(${({isOpen}) => isOpen ? 'calc(-100% - 2px)' : 0});
      transition: transform ease-in-out 0.3s;

      &::before, &::after {
        position: absolute;
        content: '';
        width: 17px;
        height: 3px;
        background-color: black;
        left: 50%;
      }

      &::before {
        top: 13px;
        transform: translate(-50%, -50%) rotate(45deg);
      }

      &::after {
        bottom: 13px;
        transform: translate(-50%, 50%) rotate(-45deg);
      }
    }

    &:last-child {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: calc(100% + 2px);
      transform: translateX(${({isOpen}) => isOpen ? 'calc(-100% - 2px)' : 0});
      transition: transform ease-in-out 0.3s;

      &::before, &::after {
        position: absolute;
        content: '';
        width: 25px;
        height: 3px;
        background-color: black;
        top: 50%;
        left: 50%;
      }

      &::before {
        transform: translate(-50%, -50%) rotate(45deg);
      }

      &::after {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
`

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<nav>
			<StyledButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
				<span />
				<span />
				<span />
			</StyledButton>
			<StyledList isOpen={isOpen}>
				<ul>
					<li><a href="">Lorem</a></li>
					<li><a href="">Ipsum</a></li>
					<li><a href="">Dolor</a></li>
					<li><a href="">Sit</a></li>
					<li><a href="">Amet</a></li>
				</ul>
				<ul>
					<li><a href="">Log In</a></li>
					<li><a href="">Sign Up</a></li>
				</ul>
			</StyledList>
		</nav>
	)
}

export default Sidebar