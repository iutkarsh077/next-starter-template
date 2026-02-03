const BackgroundVideo = () => {
  return (
    <video
      autoPlay
      muted
      loop
      id="bg-video"
      className="object-cover -z-50 top-0 left-0 fixed h-screen w-screen xl:hidden"
    >
      <source src="/myvideos.mp4" type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
