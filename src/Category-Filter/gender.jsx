import React from 'react'
import FilterBTN from './filter-btn'

const gender = ({setGender,setPageNumber}) => { 
    let genders=["male","female","unknown","genderless"];
  return (
    <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
              Gender
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body d-flex flex-wrap gap-3">
                {genders.map((items,index)=>(
                    <FilterBTN key={index} name="gender" index={index} items={items} setPageNumber={setPageNumber} task={setGender} />
                ))}
              {/* <FilterBTN /> */}
            </div>
          </div>
        </div>
  )
}

export default gender