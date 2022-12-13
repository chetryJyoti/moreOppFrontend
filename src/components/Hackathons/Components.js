import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import ClassIcon from '@material-ui/icons/Class';
import FavoriteIcon from '@material-ui/icons/Favorite';

import './comp.css';

const Components = ({ placeholder, data }) => {
    const [filData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData([]);
        }
        else {
            setFilteredData(newFilter);
        }
    };

    // clear
    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    return (
        <div className="hack">
            <div className='search'>
                <div className='searchInputs'>
                    <input type='text' placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
                    <div className='searchIcon'>
                        {filData.length === 0 ? (
                            <SearchIcon />
                        ) : (
                            <CloseIcon id="clearBtn" onClick={clearInput} />
                        )}
                    </div>
                </div>
                {filData.length != 0 && (
                    <div className="dataResult">
                        {filData.slice(0, 15).map((value, key) => {
                            return (
                                <a className='dataItem' href={value.link} target="_blank">
                                    <p>{value.title}</p>
                                </a>
                            );
                        })}
                    </div>
                )}
            </div >
            <div className="demo">
                <div className="demo1">
                    <div class="card demo3">
                        <img class="card-img-top cimg" src="https://picsum.photos/200/303" alt="Card image cap" />
                        <div class="card-body cb">
                            <h5 class="card-title logo">LunarHacks<p className="fav"><FavoriteIcon /></p></h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <pre><p className="duration"><AvTimerIcon /> 2 days left to register</p>
                                <p className="standard"><ClassIcon /> Btech students</p>
                            </pre>
                        </div>
                    </div>
                </div>
                <div className="demo2">
                    <div class="card">
                        <img class="card-img-top cimg" src="https://picsum.photos/210/303" alt="Card image cap" />
                        <div class="card-body cb">
                            <h5 class="card-title logo">LunarHacks<p className="fav"><FavoriteIcon /></p></h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <pre><p className="duration"><AvTimerIcon /> 2 days left to register</p>
                                <p className="standard"><ClassIcon /> Btech students</p>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Components;