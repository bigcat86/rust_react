import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import init, { serialize_person, deserialize_person } from './wasm_rust/pkg/wasm_rust';

export default function App() {
  const [json, setJson] = useState('');
  const [person, setPerson] = useState(null);

  useEffect(() => {
    init().then(() => {
      const jsonString = serialize_person('Alice', 30);
      setJson(jsonString);
      const personObject = deserialize_person(jsonString);
      setPerson(personObject);
    });
  }, []);

  return (
    <div>
      <p>JSON: {json}</p>
      <p>Person: {person ? `${person.name}, ${person.age} years old` : ''}</p>
    </div>
  );
}


