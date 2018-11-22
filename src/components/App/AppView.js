import {Component} from 'react'
import styled from 'styled-components'
import { FlexRow } from 'utils/styles'
import Header from '../Display/Header'
import ButtonBar from '../Display/ButtonBar'
import BalanceAndLabel from '../Display/HeaderLabel'
import PetView from '../Display/PetView'
import LoadingHOC from '../Hoc/LoadingIndicatorHOC'

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  `

const ButtonBarContainer = styled.div`
  margin-top: 80px;
`
@LoadingHOC
class AppView extends Component{

  render(){
    return (
      <Container>
        <BalanceAndLabel />
        <ButtonBarContainer>
          <PetView />
        </ButtonBarContainer>
      </Container>
    )
  }
}

export default AppView
