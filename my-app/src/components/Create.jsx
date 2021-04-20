import React, {useState} from "react";
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

export default function Create({addNote}) {
  const[expanded, setExpanded] = useState(false)
    const [input, setInput] = useState({
      title: "",
      content: ""
    });

    function handleChange(evt){
        const {name, value} = evt.target;
        setInput(prevNote => {
          return{
            ...prevNote,
            [name]: value
          }
        })
    }

    function updateNoteList(evt){
      addNote(input)
      setInput({
        title: "",
        content: ""
      })
      evt.preventDefault()
    }

  function expand(){
    setExpanded(true);
  }


  return (
    <div>
      <form className="create-note">
      {expanded ?
        <input 
        onChange={handleChange} 
        name="title" 
        placeholder="Title"
        value={input.title}           
        /> : null
        }
        <textarea
        onClick={expand}
        onChange={handleChange}
        value={input.content}
        name="content" 
        placeholder="Take a note..." 
        rows={expanded? 3 : 1} />

        <Zoom in={expanded}>
        <Fab onClick={updateNoteList}><AddCircleOutlineIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

