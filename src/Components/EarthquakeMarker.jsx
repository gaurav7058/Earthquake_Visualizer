import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

export default function EarthquakeMarker({ quake }) {
  const [lng, lat, depth] = quake.geometry.coordinates;
  const { mag, place, time } = quake.properties;

  const icon = L.divIcon({
    className: "bg-red-500 text-white text-xs flex items-center justify-center rounded-full",
    html: `<div style="width:${10 + mag * 3}px; height:${10 + mag * 3}px; border-radius:50%; background:red; opacity:0.7;"></div>`,
    iconSize: [10 + mag * 3, 10 + mag * 3]
  });

  return (
    <Marker position={[lat, lng]} icon={icon}>
      <Popup>
        <div>
          <h3 className="font-bold">Magnitude: {mag}</h3>
          <p>{place}</p>
          <p>Depth: {depth} km</p>
          <p>{new Date(time).toLocaleString()}</p>
        </div>
      </Popup>
    </Marker>
  );
}
