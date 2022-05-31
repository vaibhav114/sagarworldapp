const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <svg
        className="h-[100px] w-[100px] "
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          r="35"
          strokeDasharray="164.93361431346415 56.97787143782138"
          transform="rotate(325.819 50 50)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          ></animateTransform>
        </circle>
      </svg>
    </div>
  );
};

export default Loading;
