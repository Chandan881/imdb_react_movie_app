import React, { useContext, useEffect, useState } from 'react';

const AppContext = React.createContext();

export const url = "https://www.omdbapi.com/?apikey=d558aafa";

const AppProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({ show:"false", msg: "" });
    const [query, setQuery] = useState("avengers");


    const getMovies = async (url) => {
        setIsLoading(true);
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);

        if(data.Response === "True"){
            setIsLoading(false);
            setMovie(data.Search);
            setIsError({
                show:false,
                msg:""
            })
        }else{
           setIsError({
            show: true,
            msg: data.Error
           })
        }

        }catch(error){
            console.log(error);
        }
    }
    
      useEffect(() => {
         let timerOut =setTimeout(()=>{
          getMovies(`${url}&s=${query}`);
         }, 800) 
        
         return () => clearTimeout(timerOut);
      },[query])

      
    return(
        <AppContext.Provider value={{ isLoading, isError, movie, query, setQuery }} >
           {children}
        </AppContext.Provider>
    )
}

// global custom hooks


const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider,useGlobalContext}