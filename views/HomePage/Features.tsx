import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Elevate your business',
    description:
      'Increase your customer retention and satisfaction with a more modern, enjoyable, and effective teaching method. Differentiate yourself from the competition and unlock new potential with our innovative solutions.',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Zero cost for teachers and their students',
    description:
      'Our business model allows educators and education businesses to use our platform for free. Teachers and students can access all essential features at no cost. Only premium users need to pay.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Boost your students\' learning',
    description:
      'Enhance your students\' learning experience with interactive tools that improve engagement, track progress, and personalize lessons, leading to better outcomes and higher satisfaction.',
  },
  
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Personalized teaching tools',
    description:
      'Tailor your teaching methods with customizable tools designed to meet the needs of every student. Help them excel with individualized lesson plans and learning paths.',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Real-time analytics',
    description:
      'Gain insights into your students\' progress with real-time analytics. Monitor performance, identify areas for improvement, and adapt your teaching strategy for maximum effectiveness.',
  },
  {
    imageUrl: '/grid-icons/asset-7.svg',
    title: 'Collaborative environment',
    description:
      'Encourage collaboration among students and teachers with built-in tools for group projects, discussions, and peer learning, fostering a strong sense of community.',
  }
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
