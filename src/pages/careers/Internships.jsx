import React from 'react';
import styled from 'styled-components';
import formLinks from '../../utils/formLinks';

const PageContainer = styled.div`
  width: 100%;
  color: #FFFFFF;
  position: relative;
  z-index: 1;
`;


const PageHeader = styled.section`
  padding: 60px 0 10px;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0 0 15px 0; /* Top Right Bottom Left */
  font-weight: 700;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 10px;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
`;

const InternshipCategories = styled.section`
  padding: 70px 0;
`;

const Category = styled.div`
  margin-bottom: 70px;
`;

const CategoryTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2rem;
  position: relative;
  color: #B980FF;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: #8A2BE2;
  }
`;

const InternshipGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const InternshipCard = styled.div`
  border: 2px solid rgba(138, 43, 226, 0.5);
  border-radius: 10px;
  padding: 30px 20px;
  background-color: rgba(75, 0, 130, 0.3);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(138, 43, 226, 0.2);
  }
  
  ${props => props.$comingSoon && `
    opacity: 0.8;
  `}
`;

const Icon = styled.div`
  font-size: 2.5rem;
  color: #B980FF;
  margin-bottom: 20px;
`;

const InternshipTitle = styled.h3`
  margin-bottom: 15px;
  color: #B980FF;
`;

const InternshipDescription = styled.p`
  font-size: 0.9rem;
  margin-bottom: 20px;
  min-height: 60px;
`;

const InternshipDetails = styled.div`
  font-size: 0.8rem;
  margin-bottom: 20px;
  
  p {
    margin-bottom: 5px;
  }
  
  span {
    color: #B980FF;
    font-weight: bold;
  }
`;

const ApplyButton = styled.a`
  display: inline-block;
  background-color: #8A2BE2;
  color: #FFFFFF;
  padding: 10px 25px;
  border-radius: 25px;
  font-weight: 500;
  transition: all 0.3s;
  text-decoration: none;
  
  &:hover {
    background-color: #B980FF;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const SoonTag = styled.div`
  position: absolute;
  top: 20px;
  right: -35px;
  background-color: #888;
  color: white;
  padding: 5px 40px;
  transform: rotate(45deg);
  font-size: 0.8rem;
  font-weight: 600;
`;

const ProcessSection = styled.section`
  padding: 70px 0;
  background-color: rgba(75, 0, 130, 0.3);
  text-align: center;
`;

const ProcessSteps = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  position: relative;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  
  &::before {
    content: '';
    position: absolute;
    top: 40px;
    left: 10%;
    right: 10%;
    height: 3px;
    background-color: #8A2BE2;
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding-left:40px;
    
    &::before {
      top: 0;
      bottom: 0;
      left: 40px;
      right: auto;
      width: 3px;
      height: auto;
    }
  }
`;

const Step = styled.div`
  position: relative;
  z-index: 2;
  width: 22%;
  
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin-bottom: 40px;
    text-align: left;
  }
`;

const StepContent = styled.div`
  @media (max-width: 768px) {
    padding-top: 10px;
  }
`;

const StepNumber = styled.div`
  width: 80px;
  height: 80px;
  background-color: #8A2BE2;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0 auto 20px;
  
  @media (max-width: 768px) {
    margin: 0 20px 0 0;
    width: 60px;
    height: 60px;
    flex-shrink: 0;
  }
`;

const StepTitle = styled.h3`
  margin-bottom: 10px;
  color: #B980FF;
`;

const Internships = () => {
  const technicalDomains = [
    {
      icon: 'fas fa-globe',
      title: 'Web Development',
      description: 'Build responsive and dynamic websites using modern frameworks.',
      duration: '1-2 months',
      type: 'Remote',
      formLink: formLinks.webDevelopment
    },
    {
      icon: 'fab fa-java',
      title: 'Java Programming',
      description: 'Develop robust applications using Java and related technologies.',
      duration: '1-2 months',
      type: 'Remote',
      formLink: formLinks.javaProgramming
    },
    {
      icon: 'fab fa-python',
      title: 'Python Programming',
      description: 'Create efficient solutions using Python for various applications.',
      duration: '1-2 months',
      type: 'Remote',
      formLink: formLinks.pythonProgramming
    },
    {
      icon: 'fas fa-brain',
      title: 'AI/ML',
      description: 'Explore artificial intelligence and machine learning algorithms.',
      duration: '1-2 months',
      type: 'Remote',
      formLink: formLinks.aiMl
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Data Analytics',
      description: 'Extract insights from data using analytical tools and techniques.',
      duration: '1-2 months',
      type: 'Remote',
      formLink: formLinks.dataAnalytics
    },
    {
      icon: 'fas fa-database',
      title: 'Data Science',
      description: 'Apply scientific methods to extract knowledge from structured and unstructured data.',
      duration: '1-2 months',
      type: 'Remote',
      formLink: formLinks.dataScience
    },
    {
      icon: 'fab fa-android',
      title: 'Android Development',
      description: 'Build mobile applications for the Android platform.',
      duration: '1-2 months',
      type: 'Remote',
      formLink: formLinks.androidDevelopment
    },
    {
      icon: 'fas fa-cloud',
      title: 'Cloud Computing',
      description: 'Learn cloud infrastructure and services deployment.',
      duration: '1-2 months',
      type: 'Remote',
      comingSoon: true
    },
    {
      icon: 'fas fa-gamepad',
      title: 'Game Development',
      description: 'Create interactive gaming experiences using modern engines.',
      duration: '1-2 months',
      type: 'Remote',
      comingSoon: true
    },
    {
      icon: 'fas fa-link',
      title: 'Blockchain',
      description: 'Explore decentralized applications and blockchain technology.',
      duration: '1-2 months',
      type: 'Remote',
      comingSoon: true
    }
  ];
  
  const nonTechnicalDomains = [
    {
      icon: 'fas fa-paint-brush',
      title: 'UI/UX Designing',
      description: 'Create user-centered designs for digital products.',
      duration: '1-2 months',
      type: 'Remote',
      formLink: formLinks.uiUxDesign
    },
    {
      icon: 'fas fa-video',
      title: 'Video Editing',
      description: 'Produce engaging video content for various platforms.',
      duration: '1-2 months',
      type: 'Remote',
      formLink: formLinks.videoEditing
    },
    {
      icon: 'fas fa-pen-fancy',
      title: 'Content Writing',
      description: 'Craft compelling content for websites, blogs, and social media.',
      duration: '1-2 months',
      type: 'Remote',
      formLink: formLinks.contentWriting
    },
    {
      icon: 'fas fa-bullhorn',
      title: 'Digital Marketing',
      description: 'Develop and implement digital marketing strategies.',
      duration: '1-2 months',
      type: 'Remote',
      formLink: formLinks.digitalMarketing
    }
  ];
  
  const processSteps = [
    {
      number: 1,
      title: 'Apply',
      description: 'Submit your application with relevant details'
    },
    {
      number: 2,
      title: 'Selection',
      description: 'Get selected based on your skills and profile'
    },
    {
      number: 3,
      title: 'Tasks',
      description: 'Complete real-world projects and assignments'
    },
    {
      number: 4,
      title: 'Certificate',
      description: 'Receive certification upon successful completion'
    }
  ];
  
  return (
    <PageContainer>
      <PageHeader>
        <Container>
          <Title>Internship Opportunities</Title>
          <Subtitle>Build your portfolio with real-world projects</Subtitle>
        </Container>
      </PageHeader>
      
      <InternshipCategories>
        <Container>
          <Category>
            <CategoryTitle>Technical Domains</CategoryTitle>
            <InternshipGrid>
              {technicalDomains.map((domain, index) => (
                <InternshipCard key={index} $comingSoon={domain.comingSoon}>
                  <Icon>
                    <i className={domain.icon}></i>
                  </Icon>
                  <InternshipTitle>{domain.title}</InternshipTitle>
                  <InternshipDescription>{domain.description}</InternshipDescription>
                  <InternshipDetails>
                    <p><span>Duration:</span> {domain.duration}</p>
                    <p><span>Type:</span> {domain.type}</p>
                  </InternshipDetails>
                  {domain.comingSoon ? (
                    <SoonTag>Coming Soon</SoonTag>
                  ) : (
                    <ApplyButton href={domain.formLink} target="_blank" rel="noopener noreferrer">
                      Apply Now
                    </ApplyButton>
                  )}
                </InternshipCard>
              ))}
            </InternshipGrid>
          </Category>
          
          <Category>
            <CategoryTitle>Non-Technical Domains</CategoryTitle>
            <InternshipGrid>
              {nonTechnicalDomains.map((domain, index) => (
                <InternshipCard key={index}>
                  <Icon>
                    <i className={domain.icon}></i>
                  </Icon>
                  <InternshipTitle>{domain.title}</InternshipTitle>
                  <InternshipDescription>{domain.description}</InternshipDescription>
                  <InternshipDetails>
                    <p><span>Duration:</span> {domain.duration}</p>
                    <p><span>Type:</span> {domain.type}</p>
                  </InternshipDetails>
                  <ApplyButton href={domain.formLink} target="_blank" rel="noopener noreferrer">
                    Apply Now
                  </ApplyButton>
                </InternshipCard>
              ))}
            </InternshipGrid>
          </Category>
        </Container>
      </InternshipCategories>
      
      <ProcessSection>
        <Container>
          <Title>Our Internship Process</Title>
          <ProcessSteps>
            {processSteps.map((step, index) => (
              <Step key={index}>
                <StepNumber>{step.number}</StepNumber>
                <StepContent>
                <StepTitle>{step.title}</StepTitle>
                <p>{step.description}</p>
                </StepContent>
              </Step>
            ))}
          </ProcessSteps>
        </Container>
      </ProcessSection>
    </PageContainer>
  );
};

export default Internships;
