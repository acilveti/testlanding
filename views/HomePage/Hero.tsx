import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import NextImage from 'next/image';
import OverTitle from 'components/OverTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';

export default function Hero() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle>Boost Your teaching with LingoLounge</CustomOverTitle>
        <Heading>Elevate Your Teaching Business with Our Language Platform</Heading>
        <Description>
          Enhance your students learning experience with tools that improve lesson quality and student engagement. Our platform works alongside your methods to boost student outcomes, helping you deliver more effective lessons. Set yourself apart from other educators and academies by providing an enriched learning environment that leads to higher profitability - all at zero cost.
        </Description>
        <CustomButtonGroup>
          <Button onClick={() => setIsModalOpened(true)}>
            start now <span>&rarr;</span>
          </Button>
        </CustomButtonGroup>
      </Contents>
      <ImageContainer>
        <NextImage src={"/demo-illustration-2.svg" } alt={"elevate"} layout="fill" objectFit="fill" />
      </ImageContainer>
      {/* <ImageContainer>
        <HeroIllustration />
      </ImageContainer> */}
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  flex: 1;

  position: relative;
  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${media('<=desktop')} {
    width: 100%;
  }
`;

// const ImageContainer = styled.div`
//   display: flex;
//   flex: 1;
//   justify-content: flex-end;
//   align-items: flex-start;

//   svg {
//     max-width: 45rem;
//   }

//   ${media('<=desktop')} {
//     margin-top: 2rem;
//     justify-content: center;
//     svg {
//       max-width: 80%;
//     }
//   }
// `;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
