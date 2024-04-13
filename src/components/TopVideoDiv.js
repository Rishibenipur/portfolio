import { useEffect, useRef } from 'react';

const YourComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <div className="bg-black w-full h-1/4">
      <video
        className="w-full h-full object-cover"
        ref={videoRef}
        autoPlay
        loop
      >
        <source
          src="https://videos.pexels.com/video-files/7989680/7989680-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default YourComponent;
