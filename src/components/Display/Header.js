import {Component} from 'react'
import styled from 'styled-components'
import AppContext from 'context/AppContext'
import BalanceDisplay from './Balance'
import { FlexRow } from 'utils/styles'
import propTypes from 'prop-types'

let {bool} = propTypes

const Header = styled(FlexRow)`
  justify-content: flex-end;
  backround: white;
  position: relative;
  background: #white;
  text-align: center;
  color: #fff;
  padding: 30px;

  & svg{
    height: 380px;
    width: 380px;
  }
`

class HeaderComp extends Component {

  render(){
    return (
           <AppContext.Consumer>
           {({ authenticated}) => {

             return(
               <Header>
                 <BalanceDisplay name='Jonny' amount='50.80' currencySign='£' />
               </Header>
            )
           }}
           </AppContext.Consumer>
        )
  }
}

HeaderComp.propTypes = {
  authenticated: bool
}

export default HeaderComp
