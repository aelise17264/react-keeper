import React, {useState} from "react";

export default function Create({addNote}) {
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

  return (
    <div>
      <form className="create-note">
        <input 
        onChange={handleChange} 
        name="title" 
        placeholder="Title"
        value={input.title} />
        <textarea
        onChange={handleChange}
        value={input.content}
        name="content" 
        placeholder="Take a note..." 
        rows="3" />
        <button onClick={updateNoteList}>Add</button>
      </form>
    </div>
  );
}

