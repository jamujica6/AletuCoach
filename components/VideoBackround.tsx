import React from 'react';

const VideoBackground = () => {
  return (
    <video
      autoPlay
      muted
      loop
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1,
      }}
    >
      <source src="/videos/fondo.mp4" type="video/mp4" />
      Tu navegador no admite la etiqueta de video.
    </video>
  );
};

export default VideoBackground;



