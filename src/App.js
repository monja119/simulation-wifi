import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [response, setResponse] = useState(null);
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [data , setData] = useState({});

  const send = async () => {
    await axios({
      method,
      url,
      data,
    })
    .then(res => setResponse(res.data))
    .catch(err => setResponse(err.message));

  }

  return (
    <>
      <input
        type='text' 
        name='url'
        value={url}
        style={{ marginTop: '20px' }}
        onChange={e => setUrl(e.target.value)}
      />
      
      <select
        name='method'
        value={method}
        onChange={e => setMethod(e.target.value)}
      >
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
      </select>
      <button onClick={send}>Send</button>
      <br />
      
      {
        (method === 'POST' || method === 'PUT') && (
          <>
            <textarea
              name='data'
              value={data}
              onChange={e => setData(e.target.value)}
            />
          </>
        )
      }

      {
        response && (
          <div>
            <h2>Response :</h2>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )
      }
    </>
  );
}

export default App;
