export const getAllDrones = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/drones");
    if (!response.ok) {
      throw new Error("Failed to fetch drones");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching drones:", error);
    return [];
  }
};
