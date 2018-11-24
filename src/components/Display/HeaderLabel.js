import styled from 'styled-components'
import { FlexRow } from 'utils/styles'
import Header from './Header'

const Container = styled(FlexRow)`
  flex-direction: column;
  justify-content: center;
  width: 100%
  height: 200px;
`

const Question = styled.div`
  position: relative;
  background: #56B2AC;
  color: white;
  width: 90%;
  height: 160px;
  text-align: center;
  border-radius: 40px;
  padding: 2.5em 1em 1em 1em;
  font-size: 1.4em;
`

const Action = styled.div`
  position: absolute;
  color: white;
  top: 240px;
  left: 25%;
  background: #28BDEE;
  border-radius: 50px;
  width: 40%;
  height: 40px;
  text-align: center;
  line-height: 1em;
  padding: 1em;
`

const Label = styled.span`
  display: block;
`

const InformationLabel = () =>(
  <Container>
    <Header />
    <div>
      <Question>
        <Label>{'How much does it cost to keep a pet ?'}</Label>
        <Action>
          <Label>{'Choose one !'}</Label>
        </Action>
      </Question>
    </div>
  </Container>
)

export default InformationLabel
