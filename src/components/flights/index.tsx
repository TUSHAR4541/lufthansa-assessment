import * as Ract, { useState, useEffect } from 'react';

export default function Flights() {
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <h1>Hello Tushar!</h1>
    </>
  );
}
