import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import Input from '../Category-Filter/Input';

const Location = () => {
  let [id, setId] = useState(1);
  let [info,setInfo] = useState([]); //bracket is something that is related to api calling
  let [results,setResults]=useState([]) 
  // console.log(results)
  let{name,type,dimension}=info; //destructuring data from info object where info is api objecct

  let api = `https://rickandmortyapi.com/api/location/${id}`

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json())
      setInfo(data);

      let a=await Promise.all(
        data.residents.map((x)=>{
          // console.log(x)
          return fetch(x).then(res=>res.json())
        })
      );
      setResults(a);
    })();
  },[api])
  return (
    <div className='container'>
      <div className="row mb-4">
          <h1 className='text-center mb-3'>Location :
          <span className="text-primary">: {name==="" ? "Unknown":name}</span>
          </h1>
          <h1 className='text-center fs-3 mb-3'> Dimension {dimension==="" ? "Unknown":dimension}</h1>
          <h5 className='text-center mb-3 '> Type {type==="" ? "Unknown":type}</h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center mb-4">
          Pick Location
          </h4>
          <Input total={126} setId={setId} name="Location" />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location