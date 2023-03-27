import React,{useState,useEffect} from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({info,setPageNumber,pageNumber}) => {

    let[width,setWidth]=useState(window.innerWidth);
    let updateDimension=()=>{
      setWidth(window.innerWidth)
      console.log("hi")
    }
    useEffect(()=>{
      window.addEventListener("resize",updateDimension);
      return ()=>window.removeEventListener("resize",updateDimension);
    },[]);

    // let next=()=>{
        // setPageNumber((x)=>x+1);    // };
    // let prev=()=>{
    //     setPageNumber((x)=>{
    //         // console.log(x-1)
    //         return x-1});
    // };
  return (
    <>
    <style jsx>
      {`
      @media (max-width:768px){
        .next, .prev{
          display:none;
        }
        .pagination{
          font-size:14px;
        }
      }
      `}
    </style>
    <ReactPaginate 
    className='pagination justify-content-center gap-4 my-4'
    forcePage={pageNumber===1? 0:pageNumber-1}
    nextLabel="Next"
    previousLabel='Prev'
    nextClassName='btn btn-outline-primary next'
    previousClassName='btn btn-outline-primary prev'
    pageClassName='page-item'
    pageLinkClassName='page-link'
    activeClassName='active'
    marginPagesDisplayed={width < 576 ? 1 : 2} //no of pages to be display in the we page
    pageRangeDisplayed={width < 576 ? 1 : 2} //no of pages to be display in between dots  
    onPageChange={(data)=>{
      setPageNumber(data.selected +1)
    }}
    pageCount={info?.pages}    
    />
  {/* //   <div className='container d-flex justify-content-center gap-4  my-3'>
  //       <button onClick={prev} disabled={pageNumber==1}  className="btn btn-primary">Prev </button>

  //       <button onClick={next} className="btn btn-primary">Next </button>
  //   </div> */}
  </>
  );
};

export default Pagination