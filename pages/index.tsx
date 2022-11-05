import React from 'react'
import styled from 'styled-components'
import Section from 'components/Section'
import Wrapper from 'components/Wrapper'
import Title from 'components/Title'
import SubTitle from 'components/SubTitle'
import Tabs from 'components/Tabs'
import StickyHeadTable from 'components/Table'
import { Card, Head } from 'components/Card'
import { useTokenDataStore } from 'store/tokendata'

const TabWrapper = styled(Tabs)`
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeroWrapper = styled(Wrapper)`
  padding-top: 6rem;
  @media only screen and (min-width: 1024px) {
    max-width: 576px;
  }
  text-align: center
`


const CardWrapper = styled(Wrapper)`
  width: 100%;

  @media only screen and (min-width: 1024px) {
    max-width: 576px;
  }
`
const StyledCard = styled(Card)`
  margin-top: -8em;
`

const StickyHeadTableWrapper = styled(Wrapper)`
  padding-top: 3rem;
  text-align: center
`

const index = () => {
  const useTokenInfos = useTokenDataStore((state) => state.tokenInfos)
  console.log(useTokenInfos)

  return (
    <>
      <TabWrapper></TabWrapper>
      <Section height="28" background="white">
        <HeroWrapper>
          <Title>Web3 Starter Kit</Title>
          <SubTitle>
            A simple and decentralized way to borrow and lend different tokens.
          </SubTitle>
        </HeroWrapper>
      </Section>
      <Section height="40" background="white">
        <StickyHeadTableWrapper>
          <StickyHeadTable></StickyHeadTable>
        </StickyHeadTableWrapper>
      </Section>
    </>
  )
}

export default index
