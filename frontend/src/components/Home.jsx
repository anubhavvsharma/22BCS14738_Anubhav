import React, { useEffect, useState } from "react";
import { getAllDrones } from "../services/droneService";
import DroneList from "../components/DroneList";
import "../styles/Home.css";


const Home = () => {
  const [drones, setDrones] = useState([]);

  useEffect(() => {
    const fetchDrones = async () => {
      const data = await getAllDrones();
      setDrones(data);
    };

    fetchDrones();
  }, []);

  return (
    <div>
      <h1>Drone Management System</h1>
      <DroneList drones={drones} />
    </div>
  );
};

export default Home;
