import React, { Component } from 'react';
import axios from 'axios';


class Banner extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        banner_heading: '',
        banner_skills: [],
        IsApiError: false
      }
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_BASE_URL}home_banner_info`)
        .then((response) => {
            this.setState({
                banner_heading: response.data[0].banner_heading,
                banner_skills: response.data[0].banner_skills
            })
        })
        .catch(error => {
            this.setState({IsApiError: true})
        })
    }

    render() {
        return (
            <header className="masthead bg-primary text-white text-center">
                <div className="container d-flex align-items-center flex-column">
                    <img
                    className="masthead-avatar mb-5"
                    src="/img/avataaars.svg"
                    alt="..."
                    />
                    <h1 className="masthead-heading text-uppercase mb-0">
                       {this.state.banner_heading}
                    </h1>

                    <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                    </div>
                    <p className="masthead-subheading font-weight-light mb-0">
                    {/* if (banner_skills && banner_skills.length > 0) {
                    } */}
                        { this.state.banner_skills.map((skill, index) => (
                            <React.Fragment key={index}> {skill} { (index !== this.state.banner_skills.length -1 ) ? '-' : '' }   </React.Fragment>
                        ))}
                    </p>
                </div>
            </header>
        )
    }
}

export default Banner
