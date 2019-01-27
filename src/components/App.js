import Loader from "react-loader";
import styled, { injectGlobal } from "styled-components";
import Titles from "./Titles";
import Form from "./Form";
import Weather from "./Weather";
import { GeoLocationHOC } from "./hoc";
import { getGeoLocatedWeather, getCityWeather } from "../services/services";
import { getWeatherData, formatWeatherData } from "../utils/app-utils";
import Copy from "../utils/copy";

let {
  messages: { loadingMsg }
} = Copy;

injectGlobal`
  @import url("https://fonts.googleapis.com/css?family=Oswald");
  body {
      margin: 0;
      font-family: 'Oswald', sans-serif;
      font-size: 2em;
      color: #606060;
    }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  direction: column;
  justify-content: center;
`;

const InnerContainer = Container.extend`
  max-width: 500px;
`;

@GeoLocationHOC()
class App extends React.Component {
  state = {
    days: [],
    city: ""
  };

  componentDidUpdate(prevProps) {
    let { geoLocation } = this.props;

    if (geoLocation && !prevProps.geoLocation) {
      this.getGeoData(geoLocation);
    }
  }

  getGeoData = async ({ longtitude, latitude, error }) => {
    if (!error) {
      let {
        data: {
          list,
          city: { name }
        },
        error
      } = await getGeoLocatedWeather(latitude, longtitude);

      let days = getWeatherData(list);

      if (!error) {
        this.setState({
          city: name,
          days
        });
      }
    } else {
      return { error: true, data: null };
    }
  };

  getWeather = async e => {
    // to be completed
  };

  render() {
    let { geoLocation = false, test } = this.props;
    let { days, city } = this.state;
    return (
      <Container>
        <Loader loaded={Boolean(geoLocation)}>
          <InnerContainer>
            <div>
              <Titles />
              <Form getWeather={this.getWeather} />
              <div>
                {days.length > 0 && <Weather days={days} city={city} />}
              </div>
            </div>
          </InnerContainer>
        </Loader>
        <div>{geoLocation === null && <span>{loadingMsg}</span>}</div>
      </Container>
    );
  }
}

export default App;
