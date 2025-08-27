import React from "react";
import EarthquakeMap from "../Components/EarthquakeMap";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
        🌍 Earthquake Visualizer
      </h1>
      <p className="text-center text-gray-600 mb-4">
        Explore seismic activity worldwide. Click markers for details.
      </p>
      <EarthquakeMap />
    </div>
  );
}
