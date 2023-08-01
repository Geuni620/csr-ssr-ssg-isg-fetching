import {useState, useEffect} from "react";

import "./App.css";

function App() {
  const [time, setTime] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/time")
      .then((response) => response.json())
      .then((data) => {
        setTime(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("An error occurred while fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="card">
        {loading ? (
          <p>Loading time...</p>
        ) : (
          <p>Current time from server: {time}</p>
        )}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
