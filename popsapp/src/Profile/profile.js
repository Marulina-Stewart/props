import React from "react";
import PropTypes from "prop-types";

function Profile(props) {
  console.log(props);
  const styleObject = {
    display: "flex",
    alignItems: "center",
    margin: "50px",
    justifyContent: "space-around",
  };

  return (
    <div>
      <div style={styleObject}>
        <div className="text">
          <h1> Full Name : {props.fullName} </h1>
          <h1> Formation : {props.formation} </h1>
          <h1> Profession : {props.profession} </h1>
        </div>
        {props.children}
      </div>
      <button onClick={() => props.handleName(props.fullName)}>
        {" "}
        Click here{" "}
      </button>
    </div>
  );
}

Profile.defaultProps = {
  fullName: "Marulina Stewart",
  formation: "IT engineer",
  profession: "Developer",
};

Profile.propTypes = {
  fullName: PropTypes.string,
  formation: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func,
};
export default Profile;
