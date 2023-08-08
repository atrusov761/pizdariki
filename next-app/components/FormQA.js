import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField } from '@shadcn/ui';

const FormQA = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post('https://api.yait.io/v1/kb/qa', { query });
      setResponse(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="formQA">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Question"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">Ask</Button>
      </form>
      {response && (
        <div className="response">
          <h2>Answer:</h2>
          <p>{response}</p>
        </div>
      )}
      <style jsx>{`
        .formQA {
          margin-bottom: 2rem;
        }
        .response {
          margin-top: 1rem;
          background-color: #f0f0f0;
          padding: 1rem;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default FormQA;