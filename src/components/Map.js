import React from 'react';
import styled from 'styled-components';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapComponent = (props) => {
  const {
    google,
    width,
    height,
    lat,
    long,
    zoom,
  } = props;

  const mapStyles = {
    width,
    height,
  };

  return (
    <GoogleMap
      width={width}
      google={google}
      zoom={zoom}
      style={mapStyles}
      initialCenter={{
        lat,
        lng: long
      }}>
      <Marker
        lat
        long/>
    </GoogleMap>
  );
};

const GoogleMap = styled(Map)`
  width: ${props => props.width}px;
`;


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCwDkdljpC5FZGpZd80Xstr411l_vjBYEo'
})(MapComponent);