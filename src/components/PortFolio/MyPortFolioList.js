import React,{ useEffect, useState, useRef } from 'react';

import MyPortFoloio from "./MyPortFoloio";
import useRequest from "../../hooks/useRequest";
import {Oval} from "react-loader-spinner";
import styles from "./MyPortFolio.module.css";

import Pagination from 'react-bootstrap/Pagination'


function MyPortFolioList() {
    const [portfolioData, setportfolioData] = useState([]);
    const [isApiError, setisApiError] = useState(false);
    const [pageNumber, setpageNumber] = useState(1);
    const [activeValue, setactiveValue] = useState(1);
    const [sortBy, setSortBy] = useState("createdAt");
    const [orderBy, setOrderBy] = useState("desc");

    const sortEle = useRef(null);
    const orderEle = useRef(null);

    const items = [];
    const PAGE_SIZE = 12;
    const {response, error, isLoading} = useRequest({
        method: "get",
        url: `portfolio?page=${pageNumber}&limit=${PAGE_SIZE}&sortBy=${sortBy}&order=${orderBy}`
        //config: JSON.stringify({ requireAuthentication: true }),
    });
   
    
    const maxPage = Math.ceil(response?.count / PAGE_SIZE);

    
    const changePageHandler = (number) => {
        setactiveValue(number);
        setpageNumber(number)
    };

    const sortByHandler = () => {        
        setSortBy(sortEle.current.value);
        setactiveValue(1);
        setpageNumber(1)
    };

    const orderByHandler = () => {        
        setOrderBy(orderEle.current.value);
        setactiveValue(1);
        setpageNumber(1)
    };
           
    for (let number = 1; number <= maxPage; number++) {
        items.push(
            <Pagination.Item key={number} onClick={() => changePageHandler(number)} active={number === activeValue}>
            {number}
            </Pagination.Item>,
        );
    }
    
    useEffect(()=> {
        if (response !== null) {
            setportfolioData(response.items);
        }
        else if (error !== null && error !== "") {
            //console.log(error);
            setisApiError(true);
        }
    },[response, error, isLoading])

    const paginationBasic = (
        <div style={{paddingTop: "20px"}}>
            <Pagination size="sm">
                <Pagination.First onClick={() => changePageHandler(1)} />
                    <Pagination.Prev />{items}<Pagination.Next />
                <Pagination.Last onClick={() => changePageHandler(maxPage)}/>
            </Pagination>
        </div>
    );
      

  return (
    <React.Fragment>
        {isLoading && <Oval
            ariaLabel="loading-indicator"
            height={100}
            width={100}
            strokeWidth={5}
            color="red"
            secondaryColor="yellow"
            /* className={`${styles.spinner}`} */
            wrapperStyle={{position: "absolute", top: "50%", left: "50%",transform: "translate(50%, 50%)"}}
        />}
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>

                <div style={{margin: "10px 2px",padding: "10px 2px", border: "1px solid #ccc" }}>
                    <div className="row align-items-start">
                        <div className="col-6"></div>
                        <div className="col-4">
                            <select value={sortBy} className="form-select" ref={sortEle} aria-label="Default select example" onChange={sortByHandler}>
                                <option value="createdAt">Date</option>
                                <option value="site_name">Name</option>
                                <option value="category">Category</option>
                            </select>
                        </div>
                        <div className="col-2">
                            <select value={orderBy} className="form-select" ref={orderEle} onChange={orderByHandler}>
                                <option value="asc">Asc</option>
                                <option value="desc"> Desc</option>
                            </select>
                        </div>
                    </div>                    
                </div>

                {!isApiError && <div className="row row-cols-1 row-cols-md-3">
                { portfolioData.map((eachData, index) => (
                    <div className="card-group" key={index}>
                        <MyPortFoloio eachData={eachData} />
                    </div>                    
                )) }                
                </div>}
                {paginationBasic}
                {isApiError && <p>No Data..</p>}
            </div>
        </section>
    </React.Fragment>
  )
}

export default MyPortFolioList;