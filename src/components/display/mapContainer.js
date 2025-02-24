import React from "react";
import { useState, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Polyline,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const customIcon = {
  path: "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
  //  fillColor: '#64be67', // Change this to your desired color
  //  fillOpacity: 1,
  //  scale: 0.05, // Adjust this to change the size of the icon
};

function MapContainer(props) {
  /*LOADING COMPONENT SUCH AS API KEY*/
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "enter google maps api key here",
  });
  /**********************************/

  /*************useStates and helper methods*********************/
  const [points, setPoints] = useState([]);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    let pointsArray = [];
    for (var i = 0; i < props.sidewalkData.length - 1; i++) {
      const coordinate = {
        lat: parseFloat(props.sidewalkData[i][1]),
        lng: parseFloat(props.sidewalkData[i][2]),
      };
      pointsArray.push(coordinate);
    }
    setPoints(pointsArray);
    setCenter(pointsArray[0]);
    console.log(pointsArray);
  }, []);
  /**********************************/

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center} // You might want to dynamically set this based on your data
      zoom={21}
      options={{
        mapTypeId: "satellite", // Set the map type to satellite
      }}
    >
      {points &&
        points.length > 0 &&
        points.map((coordinate, index) =>
          index === props.currentIndex ? (
            <div>
              <Marker
                position={{ lat: coordinate.lat, lng: coordinate.lng }}
              />
            </div>
          ) : (
            <Marker
                position={{ lat: coordinate.lat, lng: coordinate.lng }}
                icon="https://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
                onClick={() =>(props.selectPoint(index))}
              />
          )
        )}
      <Polyline
        path={points.map((point) => ({ lat: point.lat, lng: point.lng }))}
        options={{
          strokeColor: "#0000FF",
          strokeOpacity: 1.0,
          strokeWeight: 2,
        }}
      />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MapContainer);
