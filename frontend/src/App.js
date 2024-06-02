import 'bulma/css/bulma.css'
import { useState, useEffect} from 'react';
import axios from 'axios';
import NavBarView  from './Components/NavBarView'
import NoteCardView from './Components/NoteCardView'
import NewNoteView from './Components/NewNoteView'
import { CookiesProvider, useCookies } from 'react-cookie';


const App = () => {
  const [notes, setNotes] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [cookies, setCookies] = useCookies(["myCookie"]);


  function makeUserLoggedIn(data){
    setIsLoggedIn(true);
    setUserDetails(data);
    setCookies("firstName", data.firstName);
    setCookies("lastName", data.lastName);
  }

  function makeUserLogout(){
    setIsLoggedIn(false);
    setUserDetails({})
    setNotes([])
  }

  const getNotes = async () => {
    try{
      const notes = await axios.get("http://localhost:4000/notes",{
        withCredentials: true
      });
    
      setNotes(notes.data.notes.map(note => <NoteCardView key={note._id} data={note}/>));
      if(!isLoggedIn){
        makeUserLoggedIn({firstName: cookies.firstName, lastName: cookies.lastName});
      }

      
    }catch(err){
      console.log(err.message);
    }
    

  }
  async function handleNewNote(data){
    try{
      let note = {...data, createdAt: Date.now(), _id: setNotes.length + 1};
      if(isLoggedIn){
          const newNote = (await axios.post("http://localhost:4000/notes", data, {
          headers:{
            "Content-Type" : "application/json"
          },
          withCredentials:true
        }))
        note = newNote.data.note
        
      }
      setNotes([<NoteCardView key={note._id} data={note}/>, ...notes]);
    }catch(err){
      console.log(err.message);
    }
    
  }


  async function editNote(id){
    try{

    }catch(err){

    }
  }

  useEffect(() => {
    getNotes()
    return () => {}
  }, [isLoggedIn]);
  // getNotes();

  return (
    <CookiesProvider>
    <div>
       <div><NavBarView userLogIn={makeUserLoggedIn} userLogout={makeUserLogout} isSignedIn={isLoggedIn} userName={`${userDetails.firstName} ${userDetails.lastName}`}/></div>
       <section className='section'><NewNoteView onSubmit={handleNewNote}/></section>
       <section className='section'>
        <div className='grid is-gap-4.5 is-col-min-12'>
          {notes}
        </div>
       </section>
    </div>
    </CookiesProvider>
  )
}

export default App