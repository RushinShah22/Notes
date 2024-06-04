import 'bulma/css/bulma.css'
import { useEffect} from 'react';

import axios from 'axios';



import HomePage from './Components/HomePage';
import { useMyNotesContext } from './NotesContext';




const App = () => {
  
  const {setNotes,user, setUser} = useMyNotesContext();


  const getNotes = async () => {
    
    try{
  
      const notes = await axios.get("http://localhost:4000/notes",{
        withCredentials: true
      });
      

      setNotes(notes.data.notes.map(note => {
        return {...note, loggedIn: user.loggedIn}
      }));
      
    }catch(err){
      console.log(err.message);

    }
    

  }
  async function initUserLogin(){
    try{
      
      const user = await axios.get("http://localhost:4000/user", {withCredentials: true});

      if(user){
        setUser({loggedIn: true, ...user.data.user});
        getNotes();
        
      }
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    initUserLogin();
  }, [])


  

  return (

    <HomePage/>
   
  )
}

export default App