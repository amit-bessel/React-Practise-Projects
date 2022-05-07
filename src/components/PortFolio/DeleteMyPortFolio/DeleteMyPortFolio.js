import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import styles from "../MyPortFolio/MyPortFolio.module.css";


function DeleteMyPortFolio(props) {

        const deletePortFolio = (id) => {
        alert(id);
        axios.delete(`${process.env.REACT_APP_BASE_URL}portfolio/${id}`)
            .then((response) => {  
                // props.onLoadPorFolio();              
            })
            .catch(error => {
                console.log(error);
                props.setisApiError(true);
            })
    }

    return (
        <React.Fragment>
            <FontAwesomeIcon icon={faTrashCan} onClick={() => deletePortFolio(props.id)} className={styles["cursor-pt"]}  />
        </React.Fragment>
    )
}

export default DeleteMyPortFolio