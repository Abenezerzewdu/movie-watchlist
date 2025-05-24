import React from 'react'
import { useState } from "react";

function Movies() {
    const [movies,setMovies]=useState([
        {id:1,title:"interstellar"},
        {id:2,title:"Wolf Of Wall Street"},
        {id:3,title:"Tom And Jerry"}])
    
          const [newMovies,setNewMovies]=useState('');
    
           function handleAddMovie(){
    
            if(newMovies.trim() === "") return;
    
           const movieObj={
              id:Date.now,
              title:newMovies,
            }
            setMovies([...movies,movieObj]);
            setNewMovies("");
           }
           function handleDelete(id){
            setMovies(movies.filter((movie)=>movie.id !== id))
           }
           
  return (

    <div>
         <ul>
        {movies.map((movies)=>(
          <li key={movies.id}>{movies.title}
          <button onClick={()=>handleDelete(movies.id)}>❌</button>
          </li>
         
        ))}
      </ul>

      <input type="text" value={newMovies} onChange={(e)=>setNewMovies(e.target.value)} placeholder="Add Movie"></input>
    <button onClick={handleAddMovie}>Add</button>
    </div>
  )
}

export default Movies