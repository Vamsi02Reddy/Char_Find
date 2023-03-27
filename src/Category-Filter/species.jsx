import React from 'react'
import FilterBTN from './filter-btn';

const species = ({setSpecies,setPageNumber}) => {
    let speciess=["Human","Alien","Humanoid","Unknown","Robot","Planet","Animal"];
  return (
    <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              Species
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body d-flex flex-wrap gap-3">
              {speciess.map((items,index)=>(
                <FilterBTN key={index} name="species" items={items} index={index} task={setSpecies} setPageNumber={setPageNumber}/>
              ))}
            </div>
          </div>
        </div>
  )
}

export default species