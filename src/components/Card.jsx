import React from 'react'
import style from "../styles/cards.scss"
import {Link} from 'react-router-dom'

const Card = ({results,page}) => {
    // console.log(results.length); 
    
    let display;
    if(results){
      display=results.map(x=>{
        let{id,name,image,location,status}=x;
           //destructuring data here
           console.log(x)
        return( 
        <Link 
          style={{textDecoration:"None"}}
          to={`${page}${id}`} 
          key={id} 
          className="col-lg-4 col-md-6 col-12 mb-3 position-relative text-dark">
          <div className={"card"}>
            <img src={image} alt="" className= {`${style.img} img img-fluid`}/>
            <div style={{padding:"10px"}} className="content">
              <div className="fs-4 fw-bold mb-2">{name}</div>
              <div className="">
                <div className="fs-6">Last  Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>
          {(()=>{
            if(status==="Dead"){
              return(
                <div className={`${style.badge} position-absolute badge bg-danger `}>{status}</div>
              )
            }
            else if(status==="Alive"){
              return(
                <div className={`${style.badge} position-absolute badge bg-success `}>{status}</div>
              )
            }
            else{
              return(
                <div className={`${style.badge} position-absolute badge bg-secondary `}>{status}</div>
              )
            }
          })( )}  
        </Link> );
        
      })
    }
    else{
        display="No Character Found 😓 Search Again!!";
    }
  return (
    <div className='row row-cols-3'>{display}</div>
  )
}

export default Card;