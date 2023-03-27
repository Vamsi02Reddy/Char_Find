import React from 'react'
import styles from "../styles/search.scss"

const Search = ({setSearch,setPageNumber}) => {
  return (
    <form className='d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5'>
        <input 
            onChange={(e)=>{
                setPageNumber(1);
                setSearch(e.target.value);
            }}
            type="text" 
            className={`${styles.input}`} 
            placeholder='Search for yor character' 
        />
        <button 
            onClick={(e)=>{
                e.preventDefault();          //to prevent the reload when we click on a button  
            }}
            className={`${styles.btn} btn btn-primary fs-5`}>
                Search
        </button>
    </form>
  )
}

export default Search