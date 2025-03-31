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

const JobsSection = styled.section`
  padding: 70px 0;
`;

const JobListings = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const JobCard = styled.div`
  border: 2px solid rgba(138, 43, 226, 0.5);
  border-radius: 10px;
  padding: 30px 20px;
  background-color: rgba(75, 0, 130, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(138, 43, 226, 0.2);
  }
`;

const JobTitle = styled.h3`
  margin-bottom: 15px;
  color: #B980FF;
`;

const JobDescription = styled.p`
  font-size: 0.9rem;
  margin-bottom: 20px;
`;

const JobDetails = styled.ul`
  list-style: none;
  margin-bottom: 20px;
  padding-left: 0;
`;

const JobDetail = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 0.9rem;
  
  i {
    margin-right: 10px;
    color: #B980FF;
  }
`;

const JobResponsibilities = styled.div`
  margin-bottom: 20px;
  
  h4 {
    color: #B980FF;
    margin-bottom: 10px;
    font-size: 1rem;
  }
  
  ul {
    padding-left: 20px;
    
    li {
      margin-bottom: 5px;
      font-size: 0.9rem;
    }
  }
`;

const JobBenefits = styled.div`
  margin-bottom: 20px;
  
  h4 {
    color: #B980FF;
    margin-bottom: 10px;
    font-size: 1rem;
  }
  
  ul {
    padding-left: 20px;
    
    li {
      margin-bottom: 5px;
      font-size: 0.9rem;
    }
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

const Jobs = () => {
  const jobListings = [
    {
      title: 'Senior Web Developer',
      description: 'We are looking for a senior web developer to lead our front-end development team.',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: 'Competitive Salary',
      responsibilities: [
        'Lead the development of web applications using modern frameworks',
        'Mentor junior developers and review code',
        'Collaborate with designers to implement user interfaces',
        'Optimize applications for maximum speed and scalability'
      ],
      benefits: [
        'Flexible working hours',
        'Professional development opportunities',
        'Health insurance',
        'Performance bonuses'
      ],
      formLink: formLinks.jobs
    },
    {
      title: 'UI/UX Designer',
      description: 'We are seeking a talented UI/UX designer to create intuitive and engaging user experiences.',
      location: 'Hybrid (Bangalore)',
      type: 'Full-time',
      experience: '2+ years',
      salary: 'Competitive Salary',
      responsibilities: [
        'Create user-centered designs by understanding business requirements',
        'Develop UI mockups and prototypes that clearly illustrate how sites function',
        'Identify and troubleshoot UX problems',
        'Conduct usability testing and gather feedback'
      ],
      benefits: [
        'Flexible working hours',
        'Professional development opportunities',
        'Health insurance',
        'Performance bonuses'
      ],
      formLink: formLinks.jobs
    },
    {
      title: 'HR Manager',
      description: 'We are seeking an experienced HR Manager to oversee recruitment, employee relations, and HR operations.',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: 'Competitive Salary',
      responsibilities: [
        'Manage full-cycle recruitment process',
        'Develop and implement HR policies and procedures',
        'Handle employee relations and conflict resolution',
        'Oversee performance management and professional development',
        'Ensure compliance with employment laws and regulations'
      ],
      benefits: [
        'Flexible working hours',
        'Professional development opportunities',
        'Health insurance',
        'Performance bonuses'
      ],
      formLink: formLinks.jobs
    },
    {
      title: 'Digital Marketing Specialist',
      description: 'We are looking for a Digital Marketing Specialist to develop and implement marketing strategies.',
      location: 'Remote',
      type: 'Full-time',
      experience: '2+ years',
      salary: 'Competitive Salary',
      responsibilities: [
        'Develop and manage digital marketing campaigns',
        'Optimize content for SEO and lead generation',
        'Analyze web traffic and user engagement metrics',
        'Manage social media presence and create engaging content'
      ],
      benefits: [
        'Flexible working hours',
        'Professional development opportunities',
        'Health insurance',
        'Performance bonuses'
      ],
      formLink: formLinks.jobs
    }
  ];
  
  return (
    <PageContainer>
      <PageHeader>
        <Container>
          <Title>Job Opportunities</Title>
          <Subtitle>Join our innovative team at SynthraLabs</Subtitle>
        </Container>
      </PageHeader>
      
      <JobsSection>
        <Container>
          <JobListings>
            {jobListings.map((job, index) => (
              <JobCard key={index}>
                <JobTitle>{job.title}</JobTitle>
                <JobDescription>{job.description}</JobDescription>
                <JobDetails>
                  <JobDetail>
                    <i className="fas fa-map-marker-alt"></i> {job.location}
                  </JobDetail>
                  <JobDetail>
                    <i className="fas fa-clock"></i> {job.type}
                  </JobDetail>
                  <JobDetail>
                    <i className="fas fa-briefcase"></i> {job.experience}
                  </JobDetail>
                  <JobDetail>
                    <i className="fas fa-dollar-sign"></i> {job.salary}
                  </JobDetail>
                </JobDetails>
                <JobResponsibilities>
                  <h4>Responsibilities</h4>
                  <ul>
                    {job.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </JobResponsibilities>
                <JobBenefits>
                  <h4>Benefits</h4>
                  <ul>
                    {job.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </JobBenefits>
                <ApplyButton href={job.formLink} target="_blank" rel="noopener noreferrer">
                  Apply Now
                </ApplyButton>
              </JobCard>
            ))}
          </JobListings>
        </Container>
      </JobsSection>
    </PageContainer>
  );
};

export default Jobs;
