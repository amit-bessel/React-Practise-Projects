import React, { useEffect, useState } from 'react'
import axios from 'axios'

function HomeAbout() {
  const [AboutData, setAboutData] = useState({home_left_para_about: "", home_right_para_about: ""});
  useEffect(()=> {
    axios.get(`${process.env.REACT_APP_BASE_URL}aboutus`)
        .then((response) => {
          setAboutData({
                home_left_para_about: response.data[0].home_left_para_about,
                home_right_para_about: response.data[0].home_right_para_about
            })
        })
        .catch(error => {
            console.log(error)
        })
  },[])

  return (
    <div>
      <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-white">
            About
            </h2>

            <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
                <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
            </div>
            <div className="row">
            <div className="col-lg-4 ms-auto">
                <p className="lead"> 
                  {AboutData.home_left_para_about}
                </p>
            </div>
            <div className="col-lg-4 me-auto">
                <p className="lead">
                 {AboutData.home_right_para_about}
                </p>
            </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default HomeAbout