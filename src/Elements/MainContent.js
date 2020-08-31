import React, {useState, useEffect,} from 'react';

const api = 'https://swapi.dev/api/'

function MainContent(props) {
    const [data, setData] = useState(null)
    let {shipNumber} = props


    useEffect(() => {
        
            fetch(`${api}starships/${shipNumber}/`)
            .then(res => res.json())
            .then(res => setData(res))
            .catch(error => console.error('Ошибка:', error))
        
    }, [shipNumber])


  return (
    <>
     Name:  {data?.name || "I was destroyed :("} <br /><br />
     Model: {data?.model || ''} <br /><br />
     Manufacturer:  {data?.manufacturer || ''} <br /><br />
     Starship class:  {data?.starship_class || ''}
    </>
  );
  }

export default MainContent;