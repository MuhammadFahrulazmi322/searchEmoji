import { useState, useEffect } from "react";
import axios from 'axios'
import Navbar from "./components/Navbar";
import Container from "./components/Container/index";
import Empty from "./components/Empty";
import Emojis from "./components/Emojis";
import Input from "./components/Input";

function App() {
  const[emojisData,setEmojisdata] = useState([])
  const[loading,setLoading] = useState(false)
  const[error,setError] = useState(false)
  const[searchText,setSearchText] = useState('')

  useEffect(()=>{
    async function fetchEmojis(){
      try {
        setLoading(true)
        const res = await axios.get('https://run.mocky.io/v3/5a982f64-218d-45d7-a380-ebe924d55631')
        setEmojisdata(res.data)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
      
    }
  
    fetchEmojis()
    
  },[])

  const handleSearchEmojis = (event) =>{
    setSearchText(event.target.value)
  }

  return (
    <>
      <Navbar/>
      <Container>
      <Input
        onChange={handleSearchEmojis}
        value={searchText}
      />

      {loading && <Empty text="Loading ..."/>}
      {error && <Empty text="Loading ..."/>}
      {emojisData.length > 0 && <Emojis emojisData={emojisData} searchText={searchText}/>}

      </Container>

    </>
  );
}

export default App;
