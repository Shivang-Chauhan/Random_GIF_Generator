import React, { useEffect, useState } from 'react'
// import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
    // const [gif,setGif] = useState("");
    // const [loading,setLoading] = useState(false);
    
    // async function fetchData(){
    //     setLoading(true);   // jab tak gif fetch nahi hoti tab tak it will be true.
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const {data} = await axios.get(url);    // jo bhi api mein se fetch hoke aayega, usko using destructuring, data le lena hai.
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);  // as when the gif has been fetched, the loader will be set to false.
    // }

    // useEffect(() => {
    //     fetchData(); 
    // }, [])
    
    const {gif,loading,fetchData} = useGif();

    // function clickHandler(){
    //     fetchData();
    // }

  return (
    <div className='w-1/2 bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='text-2xl underline uppercase font-bold mt-[15px]'>A Random GIF</h1>

        {
            loading ? (<Spinner />) : (<img src={gif} width="450" />)
        }
        
        <button onClick={() => fetchData()}
        className='w-10/12 bg-white text-lg py-2 rounded-lg mb-[20px]'>Generate</button>
    </div>
  )
}

export default Random;