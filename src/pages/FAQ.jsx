import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  width: 100%;
  color: #FFFFFF;
  position: relative;
  z-index: 1;
`;

const PageHeader = styled.section`
  padding: 60px 0 20px;
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

const FAQSection = styled.section`
  padding: 70px 0;
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const FAQItem = styled.div`
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(138, 43, 226, 0.3);
`;

const Question = styled.div`
  padding: 15px 20px;
  background-color: rgba(138, 43, 226, 0.2);
  color: #B980FF;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Answer = styled.div`
  padding: 0 20px;
  max-height: ${props => props.isOpen ? '300px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  
  p {
    padding: 20px 0;
  }
`;

const Icon = styled.span`
  transition: transform 0.3s;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0)'};
`;

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const faqItems = [
    {
      question: 'What is SynthraLabs?',
      answer: 'SynthraLabs is an innovative internship platform that connects students with real-world projects to help them build their portfolios and gain practical experience in various technical and non-technical domains.'
    },
    {
      question: 'How does the internship program work?',
      answer: 'Our internship program follows a 4-step process: Apply, Selection, Task Completion, and Certification. Students apply for their preferred domain, get selected based on merit, complete real-world projects, and receive certification upon successful completion.'
    },
    {
      question: 'How To fill the interest form?',
      answer: 'You will get the interest form of all the internships domain in above mentioned internship column. Please click on apply now button, your response will help us to understand your current skills and need for training during the internship if any.'
    },
    {
      question: 'What kind of projects will I work on?',
      answer: 'You will work on real client projects that align with your chosen domain. These projects are designed to enhance your portfolio and provide practical experience that you can showcase to future employers.'
    },
    {
      question: 'How long does the internship last?',
      answer: 'Most of our internship programs last for 4-8 weeks, depending on the domain and project requirements. The duration is designed to provide sufficient time for skill development while fitting into academic schedules.'
    }
  ];
  
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <PageContainer>
      <PageHeader>
        <Container>
          <Title>Frequently Asked Questions</Title>
          <Subtitle>Find answers to common questions about our internship program</Subtitle>
        </Container>
      </PageHeader>
      
      <FAQSection>
        <Container>
          <FAQContainer>
            {faqItems.map((item, index) => (
              <FAQItem key={index}>
                <Question 
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{item.question}</span>
                  <Icon isOpen={activeIndex === index}>
                    <i className="fas fa-chevron-down"></i>
                  </Icon>
                </Question>
                <Answer isOpen={activeIndex === index}>
                  <p>{item.answer}</p>
                </Answer>
              </FAQItem>
            ))}
          </FAQContainer>
        </Container>
      </FAQSection>
    </PageContainer>
  );
};

export default FAQ;
