import App from "../components/App";
import { render } from "react-testing-library";

test("App should render correctly", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
