import Footer from 'components/Footer'
import GET_LANDING_PAGE from 'graphql/queries/getLandingPage'
import { GetStaticProps } from 'next'
import JsonSchema from 'components/JsonSchema'
import { LandingPageProps } from 'types/api'
import PricingBox from 'components/PricingBox'
import React from 'react'
import SectionAboutProject from 'components/SectionAboutProject'
import SectionAboutUs from 'components/SectionAboutUs'
import SectionAgenda from 'components/SectionAgenda'
import SectionConcepts from 'components/SectionConcepts'
import SectionFaq from 'components/SectionFaq'
import SectionHero from 'components/SectionHero'
import SectionModules from 'components/SectionModules'
import SectionReviews from 'components/SectionReviews'
import SectionTech from 'components/SectionTech'
import client from 'graphql/client'

const Index = ({ logo }: LandingPageProps) => (
  <>
    <SectionHero logo={logo} />
    <SectionAboutProject />
    <SectionTech />
    <SectionConcepts />
    <SectionModules />
    <SectionAgenda />
    <PricingBox />
    <SectionAboutUs />
    <SectionReviews />
    <SectionFaq />
    <Footer />
    <JsonSchema />
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE)

  return {
    props: {
      ...landingPage
    }
  }
}

export default Index
