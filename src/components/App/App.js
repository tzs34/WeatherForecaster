import { Component } from "react";
import AppView from "./AppView";
import styled, { injectGlobal } from "styled-components";
import Copy from "utils/copy";
import AppContext from "context/AppContext";
import { getData } from "../../services/service";

injectGlobal`

  @import url('https://fonts.googleapis.com/css?family=Fredoka+One');

  body {
      margin: 0;
      font-family: 'Fredoka One', cursive;
      font-size: 2em;
      color: white;
    }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
`;

class App extends Component {
  state = {
    authenticated: false,
    pets: [],
    selectedPet: null,
    user: {}
  };

  componentDidMount() {
    let {
      htmlCodes: { OK }
    } = Copy;

    getData()
      .then(({ status, data }) => {
        if (status === OK) {
          let { user, pets } = data;
          let authenticated = Boolean(user.name);
          this.setState({
            user,
            authenticated,
            pets
          });
        } else {
          //log error
          //send warning to user to contact support
        }
      })
      .catch(e => {
        // log error
        // send waring to user to contact support
      });
  }

  choosePet = ({ target: { id } }) => {
    if (id !== this.state.pet) {
      this.setState({ selectedPet: id });
    }
  };

  render() {
    let { authenticated, selectedPet, pets, user } = this.state;
    let { choosePet } = this;
    let petData =
      pets.length > 0 ? pets.filter(pet => pet.id === selectedPet)[0] : null;

    return (
      <AppContext.Provider value={{ authenticated, choosePet, petData, user }}>
        <Container>
          <AppView authenticated={authenticated} />
        </Container>
      </AppContext.Provider>
    );
  }
}

export default App;
