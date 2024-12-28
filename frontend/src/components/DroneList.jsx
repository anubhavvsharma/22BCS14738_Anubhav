import React from "react";
import "../styles/DroneList.css";


const DroneList = ({ drones }) => {
  return (
    <div>
      <h2>All Drones</h2>
      {drones.length === 0 ? (
        <p>No drones available.</p>
      ) : (
        <div>
          {drones.map((drone) => (
            <div key={drone._id} className="drone-card">
              <h3>{drone.name}</h3>
              <p>Model: {drone.model}</p>
              <p>Status: {drone.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DroneList;
