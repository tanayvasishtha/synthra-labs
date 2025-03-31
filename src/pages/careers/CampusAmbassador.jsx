import React from 'react';
import styled from 'styled-components';
import formLinks from '../../utils/formLinks';

const PageContainer = styled.div`
  width: 100%;
  background: linear-gradient(135deg, #4B0082 0%, #1A0029 100%);
  color: #FFFFFF;
`;

const PageHeader = styled.section`
  padding: 60px 0 30px;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 15px;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
`;

const CampusSection = styled.section`
  padding: 70px 0;
`;

const ProgramDetails = styled.div`
  max-width: 800px;
  margin: 0 auto;
  
  h2 {
    margin-bottom: 20px;
    color: #B980FF;
    font-size: 1.8rem;
  }
  
  p {
    margin-bottom: 30px;
    line-height: 1.6;
  }
  
  ul {
    margin-bottom: 30px;
    padding-left: 20px;
    
    li {
      margin-bottom: 10px;
      line-height: 1.6;
    }
  }
`;

const EligibilityBox = styled.div`
  border: 2px solid rgba(138, 43, 226, 0.5);
  border-radius: 10px;
  padding: 25px;
  background-color: rgba(75, 0, 130, 0.3);
  margin-bottom: 30px;
  
  h3 {
    color: #B980FF;
    margin-bottom: 15px;
    font-size: 1.5rem;
    text-align: center;
  }
  
  ul {
    margin-bottom: 0;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const BenefitCard = styled.div`
  border: 2px solid rgba(138, 43, 226, 0.5);
  border-radius: 10px;
  padding: 20px;
  background-color: rgba(75, 0, 130, 0.3);
  text-align: center;
  
  i {
    font-size: 2rem;
    color: #B980FF;
    margin-bottom: 15px;
  }
  
  h4 {
    margin-bottom: 10px;
    color: #B980FF;
  }
  
  p {
    font-size: 0.9rem;
    margin-bottom: 0;
  }
`;

const ApplyButton = styled.a`
  display: inline-block;
  background-color: #8A2BE2;
  color: #FFFFFF;
  padding: 15px 40px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s;
  text-decoration: none;
  margin-top: 20px;
  
  &:hover {
    background-color: #B980FF;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ApplySection = styled.div`
  text-align: center;
`;

const CampusAmbassador = () => {
  const benefits = [
    {
      icon: 'fas fa-certificate',
      title: 'Certification',
      description: 'Receive official certification recognizing your contribution'
    },
    {
      icon: 'fas fa-file-alt',
      title: 'LOR',
      description: 'Earn a letter of recommendation for future opportunities'
    },
    {
      icon: 'fas fa-money-bill-wave',
      title: 'Stipend',
      description: 'Potential to earn stipends based on performance'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Networking',
      description: 'Connect with industry professionals and like-minded peers'
    }
  ];
  
  return (
    <PageContainer>
      <PageHeader>
        <Container>
          <Title>Campus Ambassador Program</Title>
          <Subtitle>Represent SynthraLabs on your campus and spread the word</Subtitle>
        </Container>
      </PageHeader>
      
      <CampusSection>
        <Container>
          <ProgramDetails>
            <h2>About the Program</h2>
            <p>The SynthraLabs Campus Ambassador Program is designed for students who are passionate about technology and want to promote our platform within their campus community. As an ambassador, you will gain valuable leadership and marketing skills while helping your peers discover exciting internship opportunities.</p>
            
            <EligibilityBox>
              <h3>Eligibility</h3>
              <ul>
                <li>Currently enrolled undergraduate or postgraduate student</li>
                <li>Strong communication and interpersonal skills</li>
                <li>Active on social media platforms</li>
                <li>Passionate about technology and education</li>
                <li>Leadership qualities and ability to organize events</li>
              </ul>
            </EligibilityBox>
            
            <h2>Responsibilities</h2>
            <ul>
              <li>Promote SynthraLabs through campus events and social media</li>
              <li>Organize workshops and seminars to introduce students to our platform</li>
              <li>Serve as a point of contact between SynthraLabs and your campus community</li>
              <li>Collect feedback from students and provide insights to improve our services</li>
              <li>Build and nurture a community of tech enthusiasts on your campus</li>
            </ul>
            
            <h2>Benefits</h2>
            <BenefitsGrid>
              {benefits.map((benefit, index) => (
                <BenefitCard key={index}>
                  <i className={benefit.icon}></i>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </BenefitCard>
              ))}
            </BenefitsGrid>
            
            <h2>Duration</h2>
            <p>The Campus Ambassador Program runs for a duration of 3-6 months, with the possibility of extension based on performance.</p>
            
            <ApplySection>
              <ApplyButton href={formLinks.campusAmbassador} target="_blank" rel="noopener noreferrer">
                Apply Now
              </ApplyButton>
            </ApplySection>
          </ProgramDetails>
        </Container>
      </CampusSection>
    </PageContainer>
  );
};

export default CampusAmbassador;
