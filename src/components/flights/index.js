import { useState, useEffect } from 'react';

export default function Flights() {
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);
  return (
    <>
      <h1>Hello Tushar!</h1>
    </>
  );
}
