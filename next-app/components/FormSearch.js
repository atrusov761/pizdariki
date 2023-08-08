import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField } from '@shadcn/ui';

const FormSearch = () => {
  const [query, setQuery] = useState('');
  const [size, setSize] = useState(10);
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://api.yait.io/v1/kb/search', {
        query,
        size,
      });

      setResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSearch}>
        <TextField
          label="Search Query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <TextField
          label="Number of Results"
          type="number"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </form>
      {results.map((result, index) => (
        <div key={index}>
          <h2>{result.title}</h2>
          <p>{result.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FormSearch;