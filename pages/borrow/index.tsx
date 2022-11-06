import React from 'react'
import styled from 'styled-components'
import Section from 'components/Section'
import Wrapper from 'components/Wrapper'
import Title from 'components/Title'
import SubTitle from 'components/SubTitle'
import Tabs from 'components/Tabs'
import { useTokenDataStore } from 'store/tokendata'
import BorrowingPage from 'components/MyBorrowing'

const TabWrapper = styled(Tabs)`
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeroWrapper = styled(Wrapper)`
  padding-top: 1rem;
  text-align: center
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
      <Section height="7" background="white">
        <HeroWrapper>
          <Title>MY BORROWING</Title>
          <SubTitle>
            The tokens that you are currently borrowing from others.
          </SubTitle>
        </HeroWrapper>
      </Section>
      <Section height="50" background="white">
        <HeroWrapper>
          <BorrowingPage></BorrowingPage>
        </HeroWrapper>
      </Section>
    </>
  )
}

export default index
