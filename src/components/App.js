import React, {useState} from "react";
import Header from './Header';
import Footer from './Footer';
import Note from './Note'
// import notes from "../notes";
import Create from "./Create";

function App() {
  const [notes, setNotes] = useState([])

  function addNote(newNote){
    setNotes((prevNote) => {
      return [...prevNote, newNote]
    })
  }

  function deleteNote(id){
    setNotes((prevNote) => {
      return prevNote.filter((item, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="App">
      <Header />
      <Create 
        addNote={addNote}
      />
      {notes.map((thisNote, index) => (
        <Note
        key={index}
        id={index}
        title={thisNote.title}
        content={thisNote.content}
        deleteNote={deleteNote}
         />
      ))}
        
      <Footer />
    </div>
  );
}

export default App;
