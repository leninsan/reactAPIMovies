import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './search.module.css';
import {AiOutlineSearch} from 'react-icons/ai';
import { useQuery } from '../Hooks/useQuery';

export function Search() {
  const query = useQuery();
  const search = query.get("search");
  const navigate = useNavigate();
   
  const handleSubmit = (e)=>{
    e.preventDefault();
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
        <div className={styles.searchBox}>
            {/* <button className={styles.searchButton} type="submit"><AiOutlineSearch size={15}/></button> */}
            <input className={styles.searchInput} placeholder="Search" type={'search'} value={search || ""} onChange={(e)=>{
              const value = e.target.value.toUpperCase();
              navigate("/?search=" + value);
            }}></input>
            
        </div>
    </form>
  )
}
