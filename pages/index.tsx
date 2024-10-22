import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env.production';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';
import PricingTablesSection from 'views/PricingPage/PricingTablesSection';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          {/* <Partners /> */}
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Designed with student and teacher experience in mind" overTitle="All in one solution">
            <p>
              The LangoMango platform is thoughtfully designed to enhance both student and teacher experiences. It offers a range of tools aimed at making learning more engaging, effective, and enjoyable. From easy-to-use features to a variety of interactive elements, the platform is built to ensure a seamless learning journey, all guided by the expertise of teachers.
            </p>
            <ul>
              <li>Easy-to-Use Tools</li>
              <li>Simple and Clear Design</li>
              <li>Fun and Interactive Learning</li>
            </ul>
          </BasicSection>
          <BasicSection imageUrl="/image-6.png" title="A completely free platform." overTitle="zero cost solution" reversed>
            <p>
              A fully free platform for classrooms. Thanks to our business and subscription model, we offer our platform at no cost to teachers and students. Only users with premium subscriptions are required to pay, allowing schools and students to enjoy all features without any fees.
            </p>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          {/* <FeaturesGallery /> */}
          <PricingTablesSection />
          <Features />
          {/* <Testimonials /> */}

        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
