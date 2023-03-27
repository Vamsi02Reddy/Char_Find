import React from 'react'
import Gender from "../Category-Filter/gender"
import Species from "../Category-Filter/species"
import Status from "../Category-Filter/status"


const Filter = ({setStatus,setGender,setSpecies,setPageNumber}) => {
  let clear=()=>{
    setStatus("");
    setGender("");
    setSpecies("");
    setPageNumber("");
    window.location.reload(false);
  };
  return (
    <div className='col-lg-3 col-12 mb-5'>
      <div className="text-center fs-4 mb-3">Filter</div>
      <div onClick={clear} style={{cursor:"pointer"}} className="text-center text-decoration-underline text-primary mb-4">Clear Filters</div>
      <div className="accordion" id="accordionExample">
        <Gender setPageNumber={setPageNumber} setGender={setGender}/>
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber}/>
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
      </div>
    </div>
    
  )
}

export default Filter;