import React, { Component } from 'react';
import axios from 'axios';

export default class Portfolio extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        portfolioData: [],
        IsApiError: false
      }
    }

    componentDidMount() {
        const tt = true;
        axios.get(`${process.env.REACT_APP_BASE_URL}portfolio?feature=${tt}`)
        .then((response) => {
            this.setState({
                portfolioData: response.data.items
            })
        })
        .catch(error => {
            this.setState({IsApiError: true})
        })
    }

    render() {
        if(!this.state.IsApiError) {
            return (
                <React.Fragment>
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
    
                            <div className="row justify-content-center">
                                { this.state.portfolioData.map((eachData, index) => (
                                    
                                    <div className="col-md-6 col-lg-4 mb-5" key={index}>
                                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target={`#portfolioModal${index}`}>
                                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                                <div className="portfolio-item-caption-content text-center text-white">
                                                    <i className="fas fa-plus fa-3x"></i>
                                                </div>
                                            </div>
                                            <img className="img-fluid" src={`img/portfolio/${eachData.site_image}`} alt="..."/>
                                        </div>
                                        <div className="portfolio-modal modal fade" id={`portfolioModal${index}`} tabIndex="-1" aria-labelledby={`portfolioModal${index}`} aria-hidden="true" >
                                            <div className="modal-dialog modal-xl">
                                                <div className="modal-content">
                                                    <div className="modal-header border-0">
                                                        <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" ></button>
                                                    </div>
                                                    <div className="modal-body text-center pb-5">
                                                        <div className="container">
                                                        <div className="row justify-content-center">
                                                            <div className="col-lg-8">
                                                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0"> <a className='text-secondary' href={`${eachData.url}`} target="_blank" rel="noreferrer">{eachData.site_name}</a> </h2>
            
                                                            <div className="divider-custom">
                                                                <div className="divider-custom-line"></div>
                                                                <div className="divider-custom-icon">
                                                                    <i className="fas fa-star"></i>
                                                                </div>
                                                                <div className="divider-custom-line"></div>
                                                            </div>
                                                            <img className="img-fluid rounded mb-5" src={`img/portfolio/${eachData.site_image}`} alt="..."  />
            
                                                            <p className="mb-4">{eachData.category}</p>
                                                            <button className="btn btn-primary" data-bs-dismiss="modal">
                                                                <i className="fas fa-times fa-fw"></i>
                                                                Close Window
                                                            </button>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )) }
                                
                            </div>
                        </div>
                    </section>
                </React.Fragment>
            )
        }
        else {
            return (<div>No Portfolio Found</div>)
        }
        
    }
}
