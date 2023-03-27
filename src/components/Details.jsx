import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom' // for dyanmic pages 

const Details = () => {
    let {id}=useParams();
    let api=`https://rickandmortyapi.com/api/character/${id}`

    let [fetchedData, updateFetchedData] = useState([]);
    let { name,image,location,origin,gender,species,status,type }=fetchedData; ///destructuring data from api

    useEffect(() => {
        (async function () {                                              // await is used to tell javascript to wait until data fetching from api
          let data = await fetch(api).then(res => res.json())
          // console.log(data);                                                           //to convert raw data into json format we use then keyword   respone json
          updateFetchedData(data);
        })();                                                            // iife=Immediately Invoked function expression (function(){})();
      }, [api])
  return (
    <div className='container d-flex justify-content-center'>
        <div className='d-flex flex-column gap-3'>
            <h1 className='text-center'>{name}</h1>
            <img src={image} alt="img" className='image-fluid'/>
            {(()=>{
            if(status==="Dead"){
              return(
                <div className="badge bg-danger fs-5">{status}</div>
              )
            }
            else if(status==="Alive"){
              return(
                <div className="badge bg-success fs-5">{status}</div>
              )
            }
            else{
              return(
                <div className="badge bg-secondary fs-5">{status}</div>
              )
            }
          })()}  
          <div className="content">
            <div>
                <span className="fw-bold">Gender : </span>{gender}
            </div>
            <div>
                <span className="fw-bold">Location : </span>{location?.name}
            </div>
            <div>
                <span className="fw-bold">Type : </span>{type===""? "Unknwon":type}
            </div>
            <div>
                <span className="fw-bold">Origin : </span>{origin?.name}
            </div>
            <div>
                <span className="fw-bold">Species : </span>{species}
            </div>
          </div>

        </div>
    </div>
  )
}

export default Details