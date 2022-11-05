import React from 'react'
import styled from 'styled-components'
import Section from 'components/Section'
import Wrapper from 'components/Wrapper'
import Title from 'components/Title'
import SubTitle from 'components/SubTitle'
import AllLoans from 'components/AllLoans'
import Overview from 'components/Overview'
import { useTokenDataStore } from 'store/tokendata'

const HeroWrapper = styled(Wrapper)`
  padding-top: 1rem;
  text-align: center
`

const StickyHeadTableWrapper = styled(Wrapper)`
  padding-top: 3rem;
  text-align: center
`

const LendingPage = () => {

  return (
    <>
      <Section height="10" background="white">
        <HeroWrapper>
          <Overview></Overview>
        </HeroWrapper>
      </Section>
      <Section height="40" background="white">
        <StickyHeadTableWrapper>
          <AllLoans></AllLoans>
        </StickyHeadTableWrapper>
      </Section>
    </>
  )
}

export default LendingPage
