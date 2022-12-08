import Container from '../components/container'
import ExperienceList from '../components/experience-list'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllExperiencessForHome, getProfileForHome } from '../lib/api'
import Head from 'next/head'
import { YOUR_NAME } from '../lib/constants'

export default function Index({ allExperience, profile }) {
  return (
    <>
      <Layout>
        <Head>
          <title>{profile.personal.name}'s Portfolio</title>
        </Head>
        <Container>
          <Intro />
          <ExperienceList experiences={allExperience} />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const profile = await getProfileForHome()
  const allExperience = await getAllExperiencessForHome()
  return {
    props: { allExperience, profile },
  }
}
