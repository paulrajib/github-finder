import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStumbleuponCircle } from "@fortawesome/free-brands-svg-icons";

export const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        {/* <FontAwesomeIcon icon={faStumbleuponCircle} />
        <i className='fa fa-spinner fa-spin'>no spinner but why</i> */}
        <i className='fa fa-info-circle' />
        <span> </span>
        {alert.msg}
      </div>
    )
  );
};
export default Alert;
