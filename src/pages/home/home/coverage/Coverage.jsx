import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

/* ===============================
   LEAFLET ICON FIX
================================ */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});


const Coverage = () => {

  const ServiceCenters =useLoaderData()
  console.log(ServiceCenters);


  const regions = ["All", ...new Set(ServiceCenters.map((l) => l.region))];
  const [selectedRegion, setSelectedRegion] = useState("All");

  const filteredLocations =
    selectedRegion === "All"
      ? ServiceCenters
      : ServiceCenters.filter((l) => l.region === selectedRegion);

  return (
    <section className="my-20 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          Service in 64 Districts in Bangladesh
        </h2>
        <p className="text-gray-500 mt-2">
          Click a pin to see service coverage
        </p>
      </div>

      {/* Filter */}
      <div className="flex justify-center mb-6">
        <select
          className="select select-bordered w-full max-w-xs"
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
        >
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      {/* Map */}
      <div className="card bg-base-100 shadow-xl">
        <MapContainer
          center={[23.685, 90.3563]}
          zoom={7}
          scrollWheelZoom={false}
          className="h-[520px] w-full rounded-xl"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {filteredLocations.map((place, index) => (
            <Marker
              key={index}
              position={[place.latitude, place.longitude]}
            >
              <Popup>
                <div className="space-y-1">
                  <h3 className="font-bold text-lg">
                    {place.city}, {place.district}
                  </h3>

                  <p className="text-sm">
                    <span className="font-semibold">Region:</span>{" "}
                    {place.region}
                  </p>

                  <p className="text-sm">
                    <span className="font-semibold">Covered Areas:</span>
                    <br />
                    {place.covered_area.join(", ")}
                  </p>

                  <a
                    href={place.flowchart}
                    target="_blank"
                    rel="noreferrer"
                    className="link link-primary text-sm"
                  >
                    View Flowchart
                  </a>

                  <div className="badge badge-success mt-2">
                    {place.status}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default Coverage;
