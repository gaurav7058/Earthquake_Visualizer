import React, { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import EarthquakeMarker from "./EarthquakeMarker";
import { fetchEarthquakes } from "../Api/earthquakeApi";
import useFetch from "../Hooks/useFetch";

export default function EarthquakeMap() {
  const { data: earthquakes, loading, fetchData } = useFetch(fetchEarthquakes);

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div className="h-[80vh] w-full">
      {loading && <p className="text-center text-gray-600">Loading earthquake data...</p>}

      <MapContainer center={[20, 0]} zoom={2} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        {earthquakes.map((quake) => (
          <EarthquakeMarker key={quake.id} quake={quake} />
        ))}
      </MapContainer>
    </div>
  );
}
