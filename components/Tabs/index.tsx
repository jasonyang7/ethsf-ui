import React, { useState } from 'react'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import Wrapper from 'components/Wrapper/index'
import Button from '@mui/material/Button';

import { shortenAddress } from 'utils'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'

import Modal from '../Modal'

const StyledWrapper = styled(Wrapper)`
  width: 100%;
  justify-content: center;
  display: flex;
`

const Row = styled.header`
  padding: 24px 5em;
  display: flex;
`


const Tabs = () => {
  const [btnDisabled, setBtnDisabled] = useState<boolean>(false)

  return (
    <StyledWrapper>
      <Row>
        <Button disabled={true}>Borrow</Button>
        <Button disabled={false}>Lend</Button>
        <Button disabled={false}>Pool</Button>
      </Row>
    </StyledWrapper>
  )
}

export default Tabs