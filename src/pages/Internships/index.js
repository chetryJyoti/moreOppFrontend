import React, { useState, useEffect } from 'react'
import Navbar from "../../components/Navbar/Navbar"
import axios from "axios";
import SearchBar from "../../components/Categories/SearchBar";
import Filter from "../../components/Categories/Filter";
import List from "../../components/Categories/List";
import EmptyView from "../../components/common/EmptyView";

const Internship_URL = "http://localhost:8090/internships/";
const Internship = () => {
    //for getting the data and storing it
  const [data, setData] = useState([]);
  //another state for storing searched data
  const [searchedApiData, setSearchedApiData] = useState("");

  const fetchHackathonsData = () => {
    axios
      .get(Internship_URL, {
        headers: {
          Authorization: `Bearer ${
            localStorage.getItem("token")
              ? JSON.parse(localStorage.getItem("token"))
              : null
          }`,
        },
      })
      .then((response) => {
        setData(response.data);
        setSearchedApiData(response.data);
        console.log("internships:", response.data);
      });
  };
    //for filters
    const [inputSearch, setInputSearch] = useState("");
    //for empty component
    const [resultFound, setResultFound] = useState(true);
  
  useEffect(() => {
    fetchHackathonsData();
  }, []);
  const handleFilter = (e) => {
    if (e.target.value === "") {
      setData(searchedApiData);
    } else {
      const searchResult = searchedApiData.filter(
        (item) =>
          item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.eligibility.toLowerCase().includes(e.target.value.toLowerCase())
      );
      if (searchResult.length <= 0) {
        setResultFound(false);
      } else {
        setResultFound(true);
        setData(searchResult);
      }
    }
    setInputSearch(e.target.value);
  };
   return (
    <div className="home">
      <Navbar />
      <SearchBar value={inputSearch} changeInput={(e) => handleFilter(e)} />
      
      <div className="home_panelList-wrap">
        {/* <div className="home_panel-wrap">
          <Filter />
        </div> */}
        <div className="home_list-wrap">
        <h5  style={{textAlign: "center"}}>Internships</h5>
          {data.length > 0 && (
            <div>
              {resultFound ? (
                <List list={data}  />
              ) : (
                <EmptyView />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Internship;
