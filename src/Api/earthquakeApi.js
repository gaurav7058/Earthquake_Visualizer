const API_URL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

export async function fetchEarthquakes() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data.features || [];
  } catch (error) {
    console.error("Error fetching earthquakes:", error);
    return [];
  }
}
