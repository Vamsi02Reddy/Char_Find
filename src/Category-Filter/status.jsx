import React from 'react'
import FilterBTN from './filter-btn';

const status = ({setStatus,setPageNumber}) => {
    let status=["Alive","Dead","Unknown"];
  return (
    <div className="accordion-item ">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Status
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body d-flex flex-wrap gap-3" >
              {status.map((items,index)=>(
                <FilterBTN key={index} name="status" index={index} items={items} setPageNumber={setPageNumber} task={setStatus}/>)
                )
            }
            </div>
          </div>
        </div>
  )
}

export default status