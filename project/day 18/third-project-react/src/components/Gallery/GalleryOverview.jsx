import { useEffect, useState } from "react";

export default function GalleryOverview() {
  const [counter, setCounter] = useState(0);
  const [userName, setUserName] = useState("jasmine");
  const [log, setLog] = useState([]);

  function addLog(message) {
    setLog((prev) => [...prev, message]);
  }
  useEffect(() => {
    addLog(`useEffect without Dependency Array running - render happened`);
  });
  useEffect(() => {
    addLog(`useEffect with [] running - Component mounted`);
  }, []);
  useEffect(() => {
    addLog(`useEffect with [counter] running - counter = ${counter}`);
  }, [counter]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Interval Fired...");
    }, 3000);

    addLog(`useEffect with Cleanup ran - Interval started`);

    return () => {
      clearInterval(intervalId);
      addLog(`Cleanup ran - Interval cleared (before re-running or on Unmount)`);
    };
  }, []);

  return (
    <div>
      <div className="d-flex gap-2 align-items-center bg- p-3 rounded mb-3">
        <h4 className="m-1">COUNTER: {counter}</h4>
        <h4 className="m-0">NAME: {userName}</h4>
      </div>

      <div className="d-flex gap-2 mb-3">
        <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>
           increase counter
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setUserName(userName === "jasmine" ? "yasmine" : "sara")}
        >
          change name
        </button>
        <button className="btn btn-outline-danger" onClick={() => setLog([])}>
          Clear Log
        </button>
      </div>
    </div>
  );
}