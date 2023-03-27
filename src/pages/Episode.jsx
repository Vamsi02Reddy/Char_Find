import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import Input from '../Category-Filter/Input';

const Episode = () => {
  let [id, setId] = useState(1);
  let [info,setInfo] = useState([]); //bracket is something that is related to api calling
  let [results,setResults]=useState([]) 
  console.log(results)
  let{air_date,name}=info; //destructuring data from info object where info is api objecct

  let api = `https://rickandmortyapi.com/api/episode/${id}`

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json())
      setInfo(data);

      let a=await Promise.all(
        data.characters.map((x)=>{
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
          <h1 className='text-center'>Episode :
          <span className="text-primary">: {name==="" ? "Unknown":name}</span>
          </h1>
          <h1 className='text-center fs-3'>Air Date {air_date==="" ? "Unknown":air_date}</h1>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center mb-4">
          Pick Episodes
          </h4>
          <Input total={51} setId={setId} name='Episode' />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page="/episode/" results={results} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Episode