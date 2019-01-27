const GeoLocationHOC = options => WrappedComponent => {
  const defaultOptions = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 500
  };

  return class extends WrappedComponent {
    state = { location: null };

    componentDidMount() {
      if (navigator && navigator.geolocation) {
        this.getLocation().then(location =>
          this.setState({ location, error: false })
        );
      } else {
        this.setState({ error: true });
      }
    }

    getLocation = () => {
      let options = options || defaultOptions;
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          position => {
            resolve({
              longtitude: position.coords.longitude,
              latitude: position.coords.latitude,
              error: false
            });
          },
          e => {
            reject({
              longtitude: null,
              latitude: null,
              error: true
            });
          },
          options
        );
      });
    };

    render() {
      let { location } = this.state;
      return <WrappedComponent geoLocation={location} {...this.props} />;
    }
  };
};

export default GeoLocationHOC;
