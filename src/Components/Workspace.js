import ToDoList from "./ToDoList"
import Timer from './Timer';

const Workspace = (props) => {
    return(      
    <div className="photoBackGround">
        <ToDoList />
        <div className="Timmer">
            <Timer />
        </div>
    </div>
    )
  }
  export default Workspace