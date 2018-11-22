import {Component} from 'react'
import styled from 'styled-components'
import SVG from 'react-inlinesvg'
import {FlexRow} from 'utils/styles'
import {capitalize, addTwoDPZero} from 'utils/app-utils'
import FadeInHOC from '../Hoc/FadeInHOC'
import propTypes from 'prop-types'

let { array, string } = propTypes

const Container = styled(FlexRow)`
  flex-direction: column;
`
const Item = styled(FlexRow)`
  flex-direction: column;
  justify-content: space-evenly;
  border: 1px solid #28BDEE;
  border-radius: 20px;
  padding: 1em;
  margin: 1em 0.2em;
  min-width: 300px;
`
const Label = styled.div`
  padding: 0.5em;
  text-align: center;
`

const ExtendedLabel = styled(Label)`
  margin-left: 3em;
`

@FadeInHOC
class PetListItems extends Component {

  static ListItemRenderer = ({item, index}) => {
      let {url, cost, name, tip=null} = item
      if(tip !== null){
        return (
          <FlexRow key={index}>
            <ExtendedLabel>{`Pet tip. ${tip}`}</ExtendedLabel>
          </FlexRow>
        )
      }
      return(
        <Item>
          <FlexRow key={index}>
            <SVG src={url} />
            <Label>{name ? capitalize(name) : ''}</Label>
            <Label>{`£${cost}`}</Label>
          </FlexRow>
        </Item>
      )
    }

  render(){

    let {information:{stuff, treats, tip}} = this.props

    let sum = [...stuff, ...treats].reduce( (acc, {cost}) => {
      return acc += Number(cost)
    },0)

    let total = addTwoDPZero(sum)

    return (
      <Container>
        <div>
        {
          stuff.map((item, index) => (<PetListItems.ListItemRenderer item={item} index={index} />))
        }
        </div>
        <div>
        {
          treats.map((item, index) => (<PetListItems.ListItemRenderer item={item} index={index} />))
        }
        </div>
        <div>
          <ExtendedLabel>{`Total cost = £${total}`}</ExtendedLabel>
        </div>
        <div>
          <PetListItems.ListItemRenderer item={tip} index={0} />
        </div>
      </Container>
    )
  }
}

PetListItems.propTypes ={
  stuff: array,
  treats: array,
  tip: string
}
export default PetListItems
