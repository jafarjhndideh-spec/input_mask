import { useEffect, useState } from "react";
import { cities } from "./cities.js"
import Input from "./main.jsx"

function App() {
  const [hint,setHint]=useState("")
  const [search,setSearch]=useState("")

  const findCity=cities.find(item=>item.includes(search))
      

  useEffect(()=>{
    if(!search){
      setHint("")
    }else{
      setHint(findCity)
    }

    if(search){
      const newSearch=search.split("")
      newSearch.splice(0,1,search[0].toUpperCase())
      setSearch(newSearch.join(""))
    }

    if(search.includes(" ")){
      const newSearch=search.split(" ").map(item=>{
        if(item){
         const newItem=item.split("")
         newItem.splice(0,1,item[0].toUpperCase())
         return newItem.join("")
        }
      })
     setSearch(newSearch.join(" "))
    }

  },[search])

 


  return (
    <div>
      <Input search={search} setSearch={setSearch} hint={hint}/>
    </div>
  )
}

export default App
