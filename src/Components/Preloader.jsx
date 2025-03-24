import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setProgress(count);
      if (count >= 100) {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 500);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    loading && (
      <div className="preloader-container">
        <div className="preloader-overlay"></div>
        <div className="preloader-content">
          <div className="progress-circle">
            <span>{progress}%</span>
          </div>
        </div>
      </div>
    )
  );
};

export default Preloader;