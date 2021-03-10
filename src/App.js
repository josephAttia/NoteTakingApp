import "./styles.css";

import NoteTextArea from './components/NoteTextArea'
import NotesArea from './components/NotesArea'
export default function App() {
  return (
    <>
    <NoteTextArea />
    <NotesArea notesText ="Note!"/>
    </>
  );
}
