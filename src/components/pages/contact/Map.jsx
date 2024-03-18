import React, { useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import useDetectWindowSize from '@/hooks/useDetectWindowSize';

const containerStyle = {
  width: '1440px',
  height: '704px',
};

const containerStyleTablet = {
  width: '730px',
  height: '500px'
}

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

const KEY = process.env.GOOGLE_MAP_API_KEY;

const GoogleMapComponent = () => {
  const width = useDetectWindowSize();

  const onLoad = (marker) => {
    console.log('marker: ', marker);
  };

  const handleRenderGoogleMapStyle = useCallback(() => {
    if (width > 1600) return containerStyle;
    if (width < 780) return containerStyleMobile;
    return containerStyleTablet
  }, [width])

  return (
    <LoadScript googleMapsApiKey={KEY}>
      <GoogleMap mapContainerStyle={handleRenderGoogleMapStyle()} center={center} zoom={18} streetView>
        <>
          <Marker
            // icon={{
            //   path: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            //   strokeColor: 'red',
            //   scale: 10,
            //   scaledSize: 500,
            //   borderColor: 'red',
            // }}
            onLoad={onLoad}
            position={position}
          />
        </>
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(GoogleMapComponent);
