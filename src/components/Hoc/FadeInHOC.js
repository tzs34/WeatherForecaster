import React, { Component } from 'react'
import { FadeIn} from 'utils/styles'
function FadeInHOC (WrappedComponent) {

  return class extends Component {

    render () {
      return (
          <FadeIn>
            <WrappedComponent {...this.props}/>
          </FadeIn>
        )
      }
    }
}

export default FadeInHOC
