const WaveGradient = () => {
  return (
    <div className="relative h-48 w-full overflow-hidden bg-gradient-to-r from-indigo-200 to-teal-300">
      <svg
        className="absolute left-0 top-0 w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          d="
            M0,80 
            C 360,0 1080,160 1440,80 
            L 1440,0 
            L 0,0 
            Z
          "
        />
      </svg>
    </div>
  );
};

export default WaveGradient;
