import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes";
import Entry from "./Entry";

// function createNotes(data) {
//   return (
//     <Note
//       key={data.key}
//       title={data.title}
//       content={data.content}
//     />
//   );
// }

function App() {

  const [notes, setNotes] = useState([]);

  function createNotes(data) {
    // console.log(data);
    setNotes(prevState => {
      return [...prevState, data];
    });
  }

  function deleteNote(id) {
    setNotes(prevNote => {
      return prevNote.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      {/* <Note /> */}
      <Entry
        onAdd={createNotes}
      />
      {notes.map((noteList, index) => {
        return <Note key={index} id={index} title={noteList.title} content={noteList.content} onDelete={deleteNote} />
      })}
      <Footer /> 
    </div>
  );
}

export default App;
