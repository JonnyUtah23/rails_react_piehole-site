import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"




const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 40.7616189, lng: -111.8885341 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 40.7616189, lng: -111.8885341}} />}
  </GoogleMap>
))
export default MyMapComponent;