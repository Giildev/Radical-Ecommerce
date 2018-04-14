// Dependencies
import React from "react";
import GoogleMapReact from "google-map-react";

// Components & Containers
import "./style.css";

const Marker = () => <div className="marker" />;

const GoogleMap = () => (
  <div className="map">
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyCm95A_ndccyHk_1F7R1kis23wTl093xno" }}
      defaultCenter={{ lat: 10.4806, lng: -66.9036 }}
      defaultZoom={11}
    >
      <Marker lat={10.4806} lng={-66.9036} />
      <Marker lat={10.4806} lng={-66.8036} />
    </GoogleMapReact>
  </div>
);

export default GoogleMap;
