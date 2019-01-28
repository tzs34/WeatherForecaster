# WeatherForecaster

## A basic React application which uses the OpenWeather API to obtain a local weather forcaset for the user.

#### The application uses React v16 and styled components.

##### On starting the application , the application attempts to get the Geolocation API to ascertain the latitude / longtitude coordinates of the user. If these coordnates are available then a call to the OpenWeather API is made to provide the local weather forcase for the next 5 days. The application displays the day, temperature and an icon indicating the weather conditions to the user. If the location of the user cannot be obtained using the Geolocation API the application renders a form to get the local weather forecast using the city name and country code - please note, due to time constraints,  this functionality is unfinished.

##To run the application.

1. Clone the repository.
2. Then cd into the root of the cloned repository.
3. Run yarn install to add the required dependencies.
4. Run 'yarn start'
5. You may be prompted to allow access to your location, if you can please allow this.
6. The application should open in a browser window http://localhost:8080/
 
### Testing
1. cd into the root of the project and run 'yarn jest'

#### Notes on testing:
For testing jest and react-testing-library are used. Only minimum testing is provided because of time contstraints. My preferred approach is to abstract as much logic from the views as possible to make the code cleaner and more maintainable. My prefered approach is to  take a functional programming approach to compose functionality from small functions to make testing straightforward and write unit tests for those. I then use eact-testing-library to test the React components. Going forward the tests would be expanded and incrporate other testing tools e.g. (Cypress (https://www.cypress.io/) ) for more comprehensive testing.

## Unfortunately I used react-icons-weather and my tests broke . I didn't have time to resolve this.
