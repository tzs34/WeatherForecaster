import App from "../components/App/App";

test("App should render correctly", () => {
  expect(<App />).toMatchSnapshot();
});
