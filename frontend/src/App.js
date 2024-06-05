import 'bulma/css/bulma.css'
import { useEffect} from 'react';
import axios from 'axios';
import HomePage from './Components/HomePage';
import { useMyNotesContext } from './NotesContext';




const App = () => {
  
  const {setNotes,user, setUser} = useMyNotesContext();


  

  useEffect(() => {
    const getNotes = async () => {
    
      try{
    
        const notes = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/notes`,{
          withCredentials: true,
          credentials: 'include'
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
        
        const user = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user`, {withCredentials: true, credentials: 'include'});
  
        if(user){
          setUser({loggedIn: true, ...user.data.user});
          getNotes();
          
        }
      }catch(err){
        console.log(err);
      }
    }
    initUserLogin();
  }, [])


  
  return (

    <HomePage/>
   
  )
}

export default App