import 'bulma/css/bulma.css'
import { useEffect} from 'react';
import axios from 'axios';
import HomePage from './Components/HomePage';
import { useMyNotesContext } from './NotesContext';
import { useNavigate } from 'react-router-dom';




const App = () => {
  
  const {setNotes,user, setUser} = useMyNotesContext();
  const navigate = useNavigate();

  

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
        navigate("/loader");
        const user = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user`, {withCredentials: true, credentials: 'include'});
  
        if(user){
          setUser({loggedIn: true, ...user.data.user});
          getNotes();
          
        }
        navigate("/");
      }catch(err){
        navigate("/");
        console.log(err);
      }
    }
    
    initUserLogin();
    
  }, [user])


  
  return (

    <HomePage/>
   
  )
}

export default App