# PetCalculator

## A basic React application which acts as a calculator to find out how much a pet would cost to own. It is aimed at younger children age range 6 - 8 years.
### I chose a suitable font, with simple, generous letter shapes and clear typeface for easier reading. The styling is also aimed to appeal to the target age range.
#### The application uses React v16, styled components and the React context API. I use json-server to allow me to fake API calls for some of the data.

##To run the application.

1. Clone the repository.
2. Then cd nto the root of the cloned repository.
3. Run yarn install to add the required dependencies.
4. I had issues getting my webpack to use a .env file which is how I normally handle API keys etc. I normally use the DefinePlugin plugin in the normal way.  Because this option seemed unavailable I used a file creds.js ( not pushed to the repository as it is listed in the .gitignore file). So please make a new file in the root of your directory and add   LOCAL_URL:"http://localhost:3001/" .
5. Run yarn dev 
6. The application should open in a browser window http://localhost:8080/
