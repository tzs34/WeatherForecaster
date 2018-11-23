import {Component, createContext} from 'react'
import PropTypes from "prop-types"
import AppView from './AppView'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import Copy from 'utils/copy'
import { FlexRow} from 'utils/styles'
import AppContext from 'context/AppContext'
import {getData} from '../../services/service'

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
    authenticated: false,
    pets: [],
    selectedPet:null,
    user: {}
  }

  componentDidMount(){
    let {htmlCodes:{OK}} = Copy

    getData()
    .then(({status, data}) => {
      if(status === OK){
        let {user, pets} = data
        let authenticated = Boolean(user.name) 
        this.setState({
          user,
          authenticated,
          pets
        })
      }
    })
    .catch((e) => {
        // log error
    })

  }

  choosePet = ({target:{id}}) => {

    if(id !== this.state.pet){
      this.setState({selectedPet: id})
    }

  }

  render(){

    let { authenticated, selectedPet, pets, user} = this.state
    let {choosePet} = this
    let petData = pets.length > 0 ? pets.filter( pet => pet.id === selectedPet)[0] : null

    return(
       <AppContext.Provider value={{authenticated, choosePet, petData, user}}>
         <Container>
           <AppView authenticated={authenticated}/>
         </Container>
      </AppContext.Provider>
    )
  }
}

export default App
