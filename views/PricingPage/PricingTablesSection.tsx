import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle>A Subscription to Suit Every Need</SectionTitle>
      <AutofitGrid>
        <PricingCard
          title="Academia"
          description="Ideal for educators and their students."
          benefits={['For business instructors', 'Language teachers', 'Classroom students']}
        >
          $0<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Personal Free"
          description="Perfect for independent language learners."
          benefits={['Self-guided learners without instructors']}
          isOutlined
        >
          $0<span>/month</span>
        </PricingCard>
        <PricingCard
          title="Personal Premium"
          description="Unlock your full learning potential."
          benefits={['Committed solo learners', 'Classroom students aiming for excellence']}
        >
          $12<span>/month</span>
        </PricingCard>
      </AutofitGrid>
    </Wrapper>

  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;
