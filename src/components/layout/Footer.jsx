import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/images/Synthra Labs Logo (500 x 250 px) (1).png';
import { FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: var(--dark-bg);
  color: var(--light-text);
  padding: 50px 0 20px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterLogo = styled.div`
  img {
    margin-top: 50px;
    width: 140px;
    margin-bottom: 5px;
  }
  
  p {
    font-size: 0.9rem;
    color: #CCC;
  }
`;

const FooterLinks = styled.div`
  h3 {
    margin-bottom: 20px;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 40px;
      height: 3px;
      background-color: var(--primary-color);
      
      @media (max-width: 768px) {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  a {
    color: var(--light-text);
    transition: color 0.3s;
    
    &:hover {
      color: var(--primary-color);
    }
  }
`;

const FooterContact = styled(FooterLinks)`
  p {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    
    @media (max-width: 768px) {
      justify-content: center;
    }
    
    i {
      margin-right: 10px;
      color: var(--primary-color);
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  background-color: var(--primary-color);
  color: var(--light-text);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-light);
    transform: translateY(-5px);
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #333;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterLogo>
            <img src={logo} alt="SynthraLabs Logo" />
            <p>Delivering innovative technology solutions with excellence</p>
          </FooterLogo>
          <FooterLinks>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </FooterLinks>
          <FooterContact>
            <h3>Contact Us</h3>
            <p><i className="fas fa-envelope"></i> synthralabs.official@gmail.com </p>
            <p><i className="fas fa-phone"></i> +91 8243XXXXXX</p>
            <SocialIcons>
              <SocialIcon 
                href="https://www.linkedin.com/company/synthra-labs/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </SocialIcon>
            </SocialIcons>
          </FooterContact>
        </FooterContent>
        <FooterBottom>
          <p>&copy; 2025 SynthraLabs. All rights reserved.</p>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
