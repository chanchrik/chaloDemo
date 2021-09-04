import { Polyline, Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { useState } from "react";

const RouteMap = (props) => {
  const [bounds, setBounds] = useState(null);
  const onMapLoad = () => {
    var mapbounds = new props.google.maps.LatLngBounds();
    props.routeList.forEach((route) => {
      route.stopsList.forEach((loc) => {
        mapbounds.extend(new props.google.maps.LatLng(loc.lat, loc.lng));
      });
    });
    setBounds(mapbounds);
  };
  return (
    <div>
      <Map
        google={props.google}
        zoom={8}
        style={{ width: "400px", height: "300px", position: "relative" }}
        initialCenter={props.routeList[0].stopsList[0]}
        onReady={onMapLoad}
        bounds={bounds}
      >
        {props.routeList.map((route, index) => (
          <Polyline
            key={route.id}
            path={route.stopsList}
            strokeColor="#00FF00"
            strokeOpacity={1}
            strokeWeight={6}
          />
        ))}
        {props.routeList.map((route, index) =>
          route.stopsList.map((loc, position) => (
            <Marker
              key={`marker-${index}-${position}`}
              position={loc}
              title={route.name}
            ></Marker>
          ))
        )}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyALUiHW1mdHAUD_MeAAwDNRMSXwZgAx5YE"
})(RouteMap);
