import React, {useState} from "react";
import styled from "styled-components";

const StyledWrapper = styled.nav`
  position: absolute;
  left: 0;
  top: 100px;
  
  background: #eee;
  transition: 0.3s ease;
  transform: translateX(${({isOpen}) => isOpen ? '0%' : '-100%'});
  div {
    position: relative;
    ul {
      margin: 0;
      padding: 32px 54px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      list-style: none;
      li {
        font-size: 18px;
        a {
          text-decoration: none;
          color: black;
          &:focus-visible {
            outline: 3px solid darkorange;
          }
          &:hover {
            border-bottom: 2px solid black;
          }
        }
        &:first-child {
          font-weight: bold;
        }
      }
    }
  }
`

const StyledButton = styled.button`
  position: absolute;
  width: 52px;
  height: 52px;
  right: -52px;
  top: 0;
  
  background: #eee;
  border: none;
  font-size: 28px;
  
  &:focus-visible {
    outline: 3px solid darkorange;
  }
`

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <StyledWrapper isOpen={isOpen}>
            <div>
                <StyledButton onClick={() => setIsOpen(!isOpen)}>🍔</StyledButton>
                <ul>
                    <li><a href="">Lorem</a></li>
                    <li><a href="">Ipsum</a></li>
                    <li><a href="">Dolor</a></li>
                    <li><a href="">Sit</a></li>
                    <li><a href="">Amet</a></li>
                </ul>
            </div>
        </StyledWrapper>
    )
}

export default HamburgerMenu