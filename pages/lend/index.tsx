import React from 'react'
import styled from 'styled-components'
import Section from 'components/Section'
import Wrapper from 'components/Wrapper'
import Title from 'components/Title'
import SubTitle from 'components/SubTitle'
import { useTokenDataStore } from 'store/tokendata'
import MyLending from 'components/MyLending'
// import { ethers } from 'ethers'
// import { POOL_ABI } from 'constants/poolAbi'
// import Web3 from 'web3';

// const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
// web3.eth.getAccounts().then(console.log);

const HeroWrapper = styled(Wrapper)`
  padding-top: 1rem;
  text-align: center
`

const index = () => {

  const useTokenInfos = useTokenDataStore((state) => state.tokenInfos)
  console.log(useTokenInfos)
  // try {
  //   const { ethereum } = window;

  //   if (ethereum) {
  //     let provider = ethers.getDefaultProvider();
  //     // Use web3 to get the user's accounts.
  //     const accounts = await web3.eth.getAccounts();

  //     console.log("Network: ", await web3.eth.net.getId());
  //     const contractAddress = '0xd7D1BB032C96bD2B071C6712fbb1d97b6dD4c557';
  //     const abi = POOL_ABI;

  //     // Create a contract instance
  //     const daiContract = new ethers.Contract(contractAddress, abi, provider);

  //     const onwers = await daiContract.tokensOfOwner(accounts[0])
  //     console.log(onwers);
  //     console.log("Mining...please wait");

  //   } else {
  //     console.log("Ethereum object does not exist");
  //   }

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
