import { useState } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'shadcn-ui';

const FormPodcasts = () => {
  const [podcasts, setPodcasts] = useState([]);

  const getPodcasts = async () => {
    try {
      const response = await axios.get('https://api.yait.io/v1/kb/podcasts');
      setPodcasts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form onSubmit={getPodcasts}>
      <FormGroup>
        <Label for="podcastsForm">Get Recent Podcasts</Label>
        <Button type="submit">Submit</Button>
      </FormGroup>
      {podcasts.map((podcast, index) => (
        <div key={index}>
          <h3>{podcast.title}</h3>
          <p>{podcast.description}</p>
        </div>
      ))}
    </Form>
  );
};

export default FormPodcasts;