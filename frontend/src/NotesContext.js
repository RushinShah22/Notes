import { createContext, useState, useContext } from "react";

const NotesContext = createContext({});

export function MyNotesProvider({children}){
    const [notes, setNotes] = useState([]);
    const [user, setUser] = useState({});

    return (
        <NotesContext.Provider value={{ notes, setNotes, user, setUser}}>
          {children}
        </NotesContext.Provider>
      );

}

export const useMyNotesContext = () => useContext(NotesContext);

