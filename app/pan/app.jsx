import React, { useState } from "react";
import Header from "../header/header";
import Body from "../pan/body";

const App = () => {
  const [notes, setNotes] = useState([]);

  const handleAddNote = () => {
    const newNote = {
      id: Date.now(),
      text: `Note ${notes.length + 1}`,
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-start p-8 bg-gray-900 text-white">
      <Header onAddNote={handleAddNote} />
      <Body notes={notes} />
    </div>
  );
};

export default App;
