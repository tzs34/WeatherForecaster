import styled from "styled-components";
import PetListItems from "./PetListItems";
import propTypes from "prop-types";

let { object } = propTypes;

const List = styled.div`
  background: white;
  color: #28BDEE;
  width: 100%
  margin: 30px 10px;
  padding: 50px;
`;

const SimpleList = props => {
  let {
    item: { information }
  } = props;

  return (
    <List>
      <PetListItems information={information} />
    </List>
  );
};

SimpleList.propTypes = {
  information: object,
  item: object
};

export default SimpleList;
