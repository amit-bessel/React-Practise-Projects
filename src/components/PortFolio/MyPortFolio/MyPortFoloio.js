import React from 'react';
import DeleteMyPortFolio from "../DeleteMyPortFolio/DeleteMyPortFolio";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import axios from 'axios';
import styles from "./MyPortFolio.module.css";

function MyPortFoloio(props) {
    //console.log(props);
  return (
    <React.Fragment>
        <div className={`card ${styles.cardBottomSpace}`}>
            <img src={`img/portfolio/${props.eachData.site_image}`} onError={(e) => {e.target.src = 'https://fakeimg.pl/250x180/'; e.target.onError = null;}} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.eachData.site_name}</h5>
                <p className="card-text">{props.eachData.category}</p>
            </div>
            <div className="card-footer">
                {/* <FontAwesomeIcon icon="fa-solid fa-circle-trash" /> */}
                <div className={styles["icon-action"]}>
                    <DeleteMyPortFolio id={props.eachData.id} />
                    <FontAwesomeIcon icon={faEdit} className={styles["cursor-pt"]} />
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default MyPortFoloio