import React, { Component } from "react";
import { FadeIn } from "utils/styles";
function FadeInHOC(WrappedComponent) {
  return class extends Component {
    displayName = "fadeInHOC";
    render() {
      return (
        <FadeIn>
          <WrappedComponent {...this.props} />
        </FadeIn>
      );
    }
  };
}

export default FadeInHOC;
