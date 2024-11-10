import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from '../styles/globalStyles';

const contactIcons = [
  {
    url: './icons/gmail.svg',
    linkTo: 'mailto:cssvasanth@gmail.com',
    altText: 'gmail',
  },
  {
    url: './icons/linkedin.svg',
    linkTo: 'https://www.linkedin.com/in/vasanth-selvakumar/',
    altText: 'linkedin',
  },
  {
    url: './icons/whatsapp.svg',
    linkTo: 'https://wa.me/<917094988549>?text=Hi',
    altText: 'whatsapp',
  },
];

const Freelance = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container>
    {showButton && (
        <ScrollButton onClick={scrollToTop}>
        <span style={styles.arrow}>▲</span>
        </ScrollButton>
      )}
      <Wrapper>
        <TextWrapper>
          <Heading>Looking for a Freelance Front-End Developer ?</Heading>
          <Text>
            I'm a Front-End Developer eager to tackle freelance projects. Let's
            collaborate on something awesome! 🚀
          </Text>
          <IconsWrapper>
            {contactIcons.map((icon, i) => (
              <IconLink href={icon.linkTo} key={i}>
                <img src={icon.url} alt={icon.altText} />
              </IconLink>
            ))}
          </IconsWrapper>
        </TextWrapper>
        <Image src="./imgs/freelance.svg" alt="" />
      </Wrapper>
      <Footer>
        <div>&copy; Vasanth S {new Date().getFullYear()} All rights reserved.</div>
      </Footer>
    </Container>
  );
};

const Wrapper = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: space-between;
  padding: 2em 0;

  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`;

const TextWrapper = styled.div`
  padding: 2em 0;

  img {
    display: block;
    width: 48px;
    height: 48px;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  gap: 1em;
  margin: 1em 0;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
  }
`;

const IconLink = styled.a`
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.3);
  }
`;

const Heading = styled.h1`
  font-size: 2em;
  line-height: 1.4;
  margin-bottom: 0.6em;
`;

const Text = styled.p`
  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 240px;
  margin: 0 auto;
`;

const Footer = styled.div`
  text-align: center;
  padding: 1em 0;
  font-size: 0.9em;
  color: #333;
`;
const styles = {
  arrow: {
    color: '#fff',
    fontSize: '18px'
  }
}

const ScrollButton = styled.button`
  
  position: relative; 
  bottom: 2em;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #444;
  border: none;
  border-radius: 50%;
  padding: 0.5em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;


  &:hover {
    transform: translateX(-50%) scale(1.1);
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export default Freelance;
