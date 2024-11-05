import { useEffect } from "react"
import { useListDataStore } from "../../stores/useListDataStore"
import { NewsCard } from "../NewsCard"

export const NewsList = () => {
 const {loading,loadNewsData,newsData,error} = useListDataStore((store) => store) 
 useEffect(() => {
   loadNewsData();
 },[])

 return(
    <>
   {loading ? <p>Carregando...</p> : (
    <ul>
        {newsData.map(list => (
       <NewsCard key={list.id} list={list}/>  
        ))}
    </ul>
   )}    
   {error ? <p>{error}</p> : null}
    </>
 )
}