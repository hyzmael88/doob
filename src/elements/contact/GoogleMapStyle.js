import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class GoogleMapStyle extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11,

  };

  render() {
   const  mystyle = {width:"100%", height:"100%", style:"border:0;", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}

    return (
      // Important! Always set the container height explicitly
      <div className="google-map-style-1">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.6099799113337!2d-99.18000037074894!3d19.436590863855777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f9d92df03e49%3A0x89d3447dce71ed25!2sHares%20Prestige.%20Vive%20Polanco!5e0!3m2!1ses!2smx!4v1649817781272!5m2!1ses!2smx" style={mystyle}></iframe>
      </div>
    );
  }
}

export default GoogleMapStyle;