import React from 'react';
import React, {useState} from 'react';
import axios from 'axios';

function App(){
    const [author, setAuthor] = useState('')
    const [quote, setQuote] = useState('')
    const getQuote = () =>{
        axios.get('https://api.quotable.io/random').then (res =>{
            console.log(res.data.content)
            setAuthor(res.data.author)
            setQuote(res.data.content)
        }).catch (err =>{
            console.log(err)
        })
    }
    
    return(
    <div className="App">
    <button onClick={getQuote}> Get Quote </button>
    <label>Quotes</label> <p>{quote}</p>
    <label>Author</label> <h4>{author}</h4>
    </div>
    )
}

export default App;
