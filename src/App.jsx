import { useEffect, useState } from "react";

const App = () => {
  const [centiseconds, setCentiseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const intervalId = setInterval(() => {
      setCentiseconds((prevTime) => prevTime + 1);
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };
  const handlePause = () => {
    setIsRunning(false);
  };
  const handleReset = () => {
    setIsRunning(false);
    setCentiseconds(0);
  };

  const minutes = Math.floor(centiseconds / 6000);
  const seconds = Math.floor((centiseconds % 6000) / 100);
  const cs = centiseconds % 100;

  const formatTime = (mins, seconds, centisecs) => {
    const formattedMins = String(mins).padStart(2, "0");
    const formattedSecs = String(seconds).padStart(2, "0");
    const formattedCs = String(centisecs).padStart(2, "0");
    return `${formattedMins}:${formattedSecs}:${formattedCs}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-800 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-2xl">
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-8">
          Stopwatch
        </h1>

        {/* Timer display */}
        <div className="bg-gray-100 rounded-xl p-8 mb-8">
          <div className="text-7xl font-mono font-bold text-center text-indigo-600">
            {formatTime(minutes, seconds, cs)}
          </div>
        </div>

        {/* Control buttons */}
        <div className="flex gap-3 mb-4">
          <button
            onClick={handleStart}
            disabled={isRunning}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-200 cursor-pointer disabled:cursor-not-allowed"
          >
            Start
          </button>
          <button
            onClick={handlePause}
            disabled={!isRunning}
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition duration-200 cursor-pointer disabled:cursor-not-allowed"
          >
            Pause
          </button>
          <button
            onClick={handleReset}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition duration-200 cursor-pointer"
          >
            Reset
          </button>
        </div>

        {/* Status indicator */}
        <div className="text-center">
          <span
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
              isRunning
                ? "bg-green-100 text-gray-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                isRunning ? "bg-green-500 animate-pulse" : "bg-gray-500"
              }`}
            ></span>
            {isRunning ? "Running" : "Stopped"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
