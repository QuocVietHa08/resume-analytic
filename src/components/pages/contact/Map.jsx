import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const containerStyle = {
  width: '1440px',
  height: '704px',
};

const containerStyleMobile = {
  width: '331px',
  height: '162px',
};

const center = {
  lat: 1.4363668116,
  lng: 103.804711412,
};

const position = {
  lat: 1.4363668116,
  lng: 103.804711412,
};

const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15,
};

const GOOGLE_MAP_API_KEY = 'AIzaSyAflBj63ZrMre0SWpU_mfzXQZ6Hx3QeooY';

const GoogleMapComponent = () => {
  const width = useDetectWindowSize();

  const onLoad = (marker) => {
    console.log('marker: ', marker);
  };

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAP_API_KEY}>
      <GoogleMap mapContainerStyle={width > 768 ? containerStyle : containerStyleMobile} center={center} zoom={17} streetView>
        <>
          <Marker
            icon={{
              path: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
              strokeColor: 'red',
              scale: 10,
              scaledSize: 500,
            }}
            onLoad={onLoad}
            position={position}
          />

          <InfoWindow onLoad={onLoad} position={position}>
            <div style={divStyle}>
              <h1>InfoWindow helllo</h1>
            </div>
          </InfoWindow>
        </>
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(GoogleMapComponent);
