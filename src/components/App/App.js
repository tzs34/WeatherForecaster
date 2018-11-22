import {Component, createContext} from 'react'
import PropTypes from "prop-types"
import AppView from './AppView'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import Copy from 'utils/copy'
import { FlexRow} from 'utils/styles'
import AppContext from 'context/AppContext'
import {getPets} from '../../services/service'

injectGlobal`

  @import url('https://fonts.googleapis.com/css?family=Fredoka+One');

  body {
      margin: 0;
      font-family: 'Fredoka One', cursive;
      font-size: 2em;
      color: white;
    }
`
const Container = styled.div`
  width: 100%;
  height: 100%;
`

class App extends Component{

  state = {
    authenticated: true,
    data: [],
    pet: null
  }

  componentDidMount(){

    let pets = getPets()
    .then(({data}) => {
      this.setState({data})
    })
    .catch((e) => {
        // log error
    })

  }

  choosePet = ({target:{id}}) => {

    if(id !== this.state.pet){
      this.setState({pet: id})
    }

  }

  render(){

    let { authenticated, pet, data} = this.state
    let {choosePet} = this
    let petData = pet ? data.filter( animal => animal.id === pet)[0]: null

    return(
       <AppContext.Provider value={{authenticated, choosePet, petData}}>
         <Container>
           <AppView authenticated={authenticated}/>
         </Container>
      </AppContext.Provider>
    )
  }
}

export default App
