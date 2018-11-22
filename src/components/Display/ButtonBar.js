import {Component} from 'react'
import styled from 'styled-components'
import { FlexRow } from 'utils/styles'
import SVG from 'react-inlinesvg'
import propTypes from 'prop-types'

let {func} = propTypes

const ButtonContainer = styled(FlexRow)`
  justify-content: space-around;
  position: relative;

& svg{
  width: 150px;
  height: 150px;
  fill:  #28BDEE;
  padding: 28px;
  margin-left: 2px;
  }

  & svg:hover {
		stroke: #d59acb;
  }
  & div{
    font-size: 1.5rem;
		color: white;
    background: transparent;
		position: relative;
		border-radius: 50%;
		padding: 2px;
		margin: 2px;
    transition: color 0.2s ease, background-color 0.2s ease, transform 0.3s ease;
  }

& div:hover:after {
		transform: scale(1);
		box-shadow: 10px 0 20px rgba(0, 0, 0, 0.19), 6px 0 6px rgba(0, 0, 0, 0.23);
  }

& div:after {
		content: "";
		width: 100%;
		height: 100%;
		border: #28BDEE solid 2px;
		transform: scale(0.6);
		position: absolute;
		top: -2px;
		left: -2px;
    padding: 2px;
		border-radius: 50%;
		transition: all 0.3s ease;
  }

& div:hover {
		background-color: transparent;
    cursor: pointer;
		box-shadow: none;
  }
`
const ButtonBar  = (props) => {
  let {choosePetFunc} = props
  return (
    <ButtonContainer>
      <div  id='fish' onClick={choosePetFunc}>
        <SVG src="/src/assets/svgs/fishface.svg" />
      </div>
      <div id='rabbit' onClick={choosePetFunc}>
        <SVG src="/src/assets/svgs/rabbitface.svg" />
      </div>
      <div id='cat' onClick={choosePetFunc}>
        <SVG src="/src/assets/svgs/catface.svg" />
      </div>
      <div id='dog' onClick={choosePetFunc}>
        <SVG src="/src/assets/svgs/dogface.svg" />
      </div>
    </ButtonContainer>
  )
}

ButtonBar.propTypes = {
  choosePetFunc: func.isRequired
}

export default ButtonBar
