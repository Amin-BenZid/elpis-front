import ReactPlayer from "react-player";
const VideoPLayer = () => {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=0lJm8ENELrI"
      loop
      muted
      playing
      width="100%"
      height="36vh"
      controls={false}
    />
  );
};

export default VideoPLayer;
