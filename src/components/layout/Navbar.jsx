import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/images/Synthra Labs Logo (7).png';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  background-color: rgba(18, 18, 18, 0.8);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s;

  @media (max-width: 768px) {
    padding: 16px 22px;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  
  img {
    height: 40px;
    margin-right:0;
  }
`;

const LogoText = styled.span`
  color: #FFFFFF;
  font-size: 1.35rem;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    left: ${props => props.isOpen ? '0' : '-100%'};
    background-color: rgba(18, 18, 18, 0.95);
    backdrop-filter: blur(10px);
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
    transition: left 0.3s;
  }
`;

const NavItem = styled.li`
  position: relative;
  margin-left: 30px;
  
  @media (max-width: 768px) {
    margin: 15px 0;
  }
`;

const NavLink = styled(Link)`
  color: #FFFFFF;
  font-weight: 500;
  transition: color 0.3s;
  text-decoration: none;
  
  &:hover, &.active {
    color: #B980FF;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  
  span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #FFFFFF;
    margin: 5px 0;
    transition: all 0.3s;
  }
  
  &.active {
    span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 6px);
    }
    
    span:nth-child(2) {
      opacity: 0;
    }
    
    span:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -6px);
    }
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <Nav>
      <Logo to="/">
        <img src={logo} alt="SynthraLabs Logo" />
        <LogoText>SynthraLabs</LogoText>
      </Logo>
      <NavLinks isOpen={isOpen}>
        <NavItem>
          <NavLink to="/" className={isActive('/') ? 'active' : ''}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about" className={isActive('/about') ? 'active' : ''}>
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/services" className={isActive('/services') ? 'active' : ''}>
            Services
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/careers" className={location.pathname.includes('/careers') ? 'active' : ''}>
            Careers
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact" className={isActive('/contact') ? 'active' : ''}>
            Contact
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/faq" className={isActive('/faq') ? 'active' : ''}>
            FAQ's
          </NavLink>
        </NavItem>
      </NavLinks>
      <Hamburger className={isOpen ? 'active' : ''} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
    </Nav>
  );
};

export default Navbar;
