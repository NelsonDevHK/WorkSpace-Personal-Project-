import Video1 from "./castle.mp4";
import Video2 from "./room.mp4";
import Video3 from "./room2.mp4";
import  Workspace  from './Workspace';

function WorkingBackground(props) {
  return <Workspace />;
}

function DefaultBackground(props) {
  return (
    <div className="Background">
    <video class="video" autoPlay muted loop src={Video1} type ="video/mp4"/>
    </div>
  )
}
const Background = (props) => {
  const isWorking = props.GetWorking;
  if (isWorking) {
    return <WorkingBackground />;
  }
  else
  return <DefaultBackground />;
}
export default Background