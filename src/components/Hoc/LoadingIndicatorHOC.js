import styled from "styled-components";
import Loader from "../Display/Loader";

const OuterLoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
  align-items: center;
  justify-content: center;
`;
const LoaderContainer = styled.div`
  position: absolute;
  top: 25%;

  & svg {
    width: 100%;
    height: 100%;
  }
`;
export default function LoadingIndicatorHOC(WrappedComponent) {
  return class extends WrappedComponent {
    render() {
      let { authenticated } = this.props;

      return (
        <div>
          {authenticated ? (
            super.render()
          ) : (
            <OuterLoaderContainer>
              <LoaderContainer>
                <Loader />
              </LoaderContainer>
            </OuterLoaderContainer>
          )}
        </div>
      );
    }
  };
}
