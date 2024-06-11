'use client'
import { MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

//4. Main component definition.
const Map = () => {
  
  //17. Return the JSX for rendering.
  return (
    <>
      {/* 20. Add the map container. */}
      <MapContainer center={[43.6426, -79.3871]} zoom={11} style={{ height: "100vh", width: "100vw" }}>
        {/* 21. Set the tile layer for the map. */}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />        
      </MapContainer>
    </>
  );
};
//25. Export the MapComponent.
export default Map;