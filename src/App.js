import React from 'react';
import React, {useState} from 'react';
import axios from 'axios';

function App(){
    const [quote, setQuote] = useState('')
    const getQuote = () =>{
        axios.get('https://api.thecatapi.com/v1/images/search').then (res =>{
            console.log(res)
            setQuote(res)
        }).catch (err =>{
            console.log(err)
        })
    }
    
    return(
    <div className="App">
    <button onClick={getQuote}> Get Quote </button>
    (quote && <p>{quote}</p> )
    </div>
    )
}

export default App;
