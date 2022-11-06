import React from 'react'
import styled from 'styled-components'
import Section from 'components/Section'
import Wrapper from 'components/Wrapper'
import Title from 'components/Title'
import SubTitle from 'components/SubTitle'
import Tabs from 'components/Tabs'
import { useTokenDataStore } from 'store/tokendata'
import MyLending from 'components/MyLending'
import LendModal from 'components/LendModal'

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
          <Title>MY LENDING</Title>
          <SubTitle>
            The tokens that you are currently lending to others.
          </SubTitle>
        </HeroWrapper>
      </Section>
      {/* <Section height="10" background="white">
        <LendModal></LendModal>
      </Section> */}
      <Section height="50" background="white">
        <HeroWrapper>
          <MyLending></MyLending>
        </HeroWrapper>
      </Section>

    </>
  )
}

export default index
