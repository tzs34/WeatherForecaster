import { Component } from "react";
import styled from "styled-components";
import WeatherIcon from "react-icons-weather";
import { formatCelsiusTemp } from "../utils/app-utils";
import { FlexRow } from "../utils/styles";
import WeatherCard from "./weather-card";
import propTypes from "prop-types";

let { array, string } = propTypes;

const Title = styled.span`
  display: block;
  font-size: 1.2em;
  text-align: center;
  padding: 20px;
`;

const Container = FlexRow.extend`
  flex-direction: column;
`;

const IconContainer = styled.div`
  & i {
    color: ${props => props.color};
  }
`;

const HList = FlexRow.extend`
  align-items: center;
  justify-content: center;
  width: 800px;
  flex-wrap: wrap;
`;

const Weather = ({ days, city }) => (
  <Container>
    <div>
      <Title>{`Your 5 day forecast for ${city}`}</Title>
    </div>
    <HList>
      {days.map(({ temp, day, icon }, index) => {
        let color = icon < 800 ? "#668B8B" : "#70DBDB";
        let iconComp = (
          <IconContainer color={color}>
            <WeatherIcon
              name="owm"
              iconId={String(icon)}
              flip="horizontal"
              rotate="90"
            />
          </IconContainer>
        );
        return (
          <WeatherCard key={index} temp={temp} day={day} icon={iconComp} />
        );
      })}
    </HList>
  </Container>
);

Weather.propTypes = {
  days: array,
  city: string
};

export default Weather;
