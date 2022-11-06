import React from 'react'
import styled from 'styled-components'
import Section from 'components/Section'
import Wrapper from 'components/Wrapper'
import Title from 'components/Title'
import SubTitle from 'components/SubTitle'
import { useTokenDataStore } from 'store/tokendata'
import MyLending from 'components/MyLending'

const HeroWrapper = styled(Wrapper)`
  padding-top: 1rem;
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
