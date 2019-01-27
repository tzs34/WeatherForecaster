import styled from "styled-components";

const FormContainer = styled.div`
  background-color: white;
  width: 600px;
  height: 20vh;
  padding: 10px 20px;
  margin: 0 auto;
`;
const Form = styled.form`
  overflow: hidden;
`;
const Button = styled.button`
  border: 0;
  padding: 8px 20px;
  margin: 10px 2px;
  border-radius: 2px;
  font-weight: lighter;
  letter-spacing: 1px;
  font-size: 0.65em;
  cursor: pointer;
  background-color: #4658ee;
  color: #fff;
  font-weight: 100;
`;

const FormLabel = styled.label`
  font-size: 0.65em;
  color: #606060;
  padding: 0.25em 1.5em 0.2em 0.2em;
`;

const FormInput = styled.input`
  background-color: transparent;
  border: 0;
  border-bottom: solid 1px #606060;
  width: ${props => props.width}%;
  padding-bottom: 4px;
  color: #606060 !important;
  font-weight: lighter;
  letter-spacing: 2px;
  margin-bottom: 20px;
  margin-right: 20px;
  font-size: 0.8em;
  outline: none;
`;

const UserForm = ({ getWeather }) => (
  <FormContainer>
    <Form onSubmit={getWeather}>
      <div>
        <FormLabel for="city">City Name</FormLabel>
        <FormInput id-="city" type="text" name="city" width={60} />
      </div>
      <div>
        <FormLabel for="country">Country Code (e.g 'US', 'GB')</FormLabel>
        <FormInput id-="country" type="text" name="country" width={30} />
      </div>
      <Button>Get Weather Forecast</Button>
    </Form>
  </FormContainer>
);

export default UserForm;
