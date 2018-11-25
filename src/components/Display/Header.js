import { Component } from "react";
import styled from "styled-components";
import AppContext from "context/AppContext";
import BalanceDisplay from "./Balance";
import { FlexRow } from "utils/styles";
import { getCountryCurrency } from "utils/app-utils";
import propTypes from "prop-types";

let { bool } = propTypes;

const Header = styled(FlexRow)`
  justify-content: flex-end;
  backround: white;
  position: relative;
  background: #white;
  text-align: center;
  color: #fff;
  padding: 30px;

  & svg {
    height: 380px;
    width: 380px;
  }
`;

class HeaderComp extends Component {
  amount = 0;

  shouldComponentUpdate(nextProps, nextState) {
    let { balance } = nextProps;
    return balance !== this.amount;
  }

  render() {
    return (
      <AppContext.Consumer>
        {({ user }) => {
          let { name, balance, isoCountryCode } = user;

          this.amount;
          if (balance !== this.amount) {
            this.amount = getCountryCurrency(balance, isoCountryCode);
          }

          return (
            <Header>
              <BalanceDisplay name={name} amount={this.amount} sign />
            </Header>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

HeaderComp.propTypes = {
  authenticated: bool
};

export default HeaderComp;
