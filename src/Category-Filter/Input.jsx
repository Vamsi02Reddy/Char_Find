import React from 'react'

const Input = ({total,setId,name}) => {
    // console.log([...Array(total).keys()]);   //used divide total 51 array elementts  into each element from 0 to 50
    return (
        <div class="input-group mb-3">
            <select onChange={e=>setId(e.target.value)} class="form-select" id="inputGroupSelect02">
                <option selected value="1">Choose...</option>
                {[...Array(total).keys()].map((x)=>{
                    return <option value={x + 1}>{name}-{x+1}</option>
                })}
                
            </select>
        </div>
    )
}

export default Input