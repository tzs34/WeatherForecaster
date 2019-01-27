import styled from "styled-components";
import { FlexRow } from "../utils/styles";

const Title = styled(FlexRow)`
  justify-content: center;
  background: white;
  background-size: cover;
  color: #838b8b;
  font-size: 30px;
  letter-spacing: 2px;
  line-height: 1.3;
  margin: 40px;
  height: 30px;
`;

const SubTitle = Title.extend`
  font-size: 20px;
  font-style: italic;
  font-weight: 100;
  letter-spacing: 1px;
  line-height: 1.5;
`;

const Titles = () => (
  <div>
    <Title>
      <h1>Weather Forecaster</h1>
    </Title>
    <SubTitle>
      <h3>Find your local weather forecast</h3>
    </SubTitle>
  </div>
);

export default Titles;
