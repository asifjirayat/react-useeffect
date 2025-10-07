const StopWatch = () => {
  const seconds = 0;
  const isRunning = false;

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-800 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-96">
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-8">
          Stopwatch
        </h1>

        {/* Timer display */}
        <div className="bg-gray-100 rounded-xl p-8 mb-8">
          <div className="text-7xl font-mono font-bold text-center text-indigo-600">
            {formatTime(seconds)}
          </div>
        </div>

        {/* Control buttons */}
        <div className="flex gap-3 mb-4">
          <button className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-200 cursor-pointer">
            Start
          </button>
          <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition duration-200 cursor-pointer">
            Pause
          </button>
          <button className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition duration-200 cursor-pointer">
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

export default StopWatch;
