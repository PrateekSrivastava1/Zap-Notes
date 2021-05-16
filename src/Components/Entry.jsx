import React, {useState} from "react";
import PlusOneIcon from '@material-ui/icons/PlusOne';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function Entry(props) {

    const [list, setList] = useState({
        title: "",
        content: ""
      });
      
      const [expand, setExpand] = useState(false);

      function Expanding()
      {
        setExpand(true);
      }

      function handleChange(event) {
        const {name, value} = event.target;
        setList(prevList => {
            return {
                ...prevList,
                [name]: value
            }
        })

      }
      function submitNotes(event){
        props.onAdd(list);
        setList({
          title: "",
          content: ""
        });
        event.preventDefault();
      }
  return (
    <div>
    <Zoom in={true}>
      <form className="create-note" >
        {expand ? <input name="title" onChange={handleChange} value={list.title} placeholder="Title" /> : null}
        <textarea name="content" onChange={handleChange} onClick={Expanding} value={list.content} placeholder="Take a note..." rows={expand ? 3 : 1} />
        <Fab onClick={submitNotes}><PlusOneIcon /></Fab>
      </form>
      </Zoom>
    </div>
  );
}

export default Entry;
