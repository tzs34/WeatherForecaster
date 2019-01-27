import styled from "styled-components";
import { FlexRow, FadeIn } from "../utils/styles";
import propTypes from "prop-types";

let { element, string, number } = propTypes;

const Container = FlexRow.extend`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  direction: column;
  height: 195px;
  width: 200px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  padding: 10px 5px 0px 5px;
  text-align: center;
  margin: 3px;
  background-color: white;
  display: inline-block;
`;

const Temperature = styled.div`
  margin: 10px;
  font-size: 2.5em;
  background: white;
  color: #4658ee;
`;

const Day = styled.div`
  margin: 10px;
  background: #4658ee;
  color: white;
  font-size: 0.8em;
`;
const WeatherCard = ({ city, temp, day, icon }) => (
  <FadeIn>
    <Container>
      {icon}
      <Temperature>{`${temp}℃`}</Temperature>
      <Day>{day}</Day>
    </Container>
  </FadeIn>
);

WeatherCard.propTypes = {
  city: string,
  temp: number,
  day: string,
  icon: element
};

export default WeatherCard;
