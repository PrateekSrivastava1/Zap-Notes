import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Entry from "./Entry";

function Home() {

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

export default Home;
