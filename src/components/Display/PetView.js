import {Component} from 'react'
import styled from 'styled-components'
import AppContext from 'context/AppContext'
import ButtonBar from './ButtonBar'
import SimpleList from '../List/SimpleList'
import { FlexRow } from 'utils/styles'
import propTypes from 'prop-types'

let {array, bool, func} = propTypes

const Container = styled(FlexRow)`
  flex-direction: column;
  justify-content: center;
  width: 100%
`

class PetView extends Component {

  render(){
    return (
           <AppContext.Consumer>
           {({ authenticated, choosePet, petData=null}) => {

             return(
               <Container>
                <ButtonBar choosePetFunc={choosePet}/>
                {
                  petData !== null &&
                  <SimpleList item={petData}/>
                }
                </Container>
            )
           }
         }
        </AppContext.Consumer>
      )
  }
}

PetView.propTypes = {
  petData: array,
  authenticated: bool,
  choosePet: func
}

export default PetView
