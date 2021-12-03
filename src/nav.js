import React, { useState } from "react";

export default function Nav(props) {
  return (
    <>
      <div className="fixed-position">
        <div>
          <div className="nav">
            {props.navIcons.map((item) => (
              <a href="#" className="nav-icons black">
                {item.icon} <span className="navIconTxt"> {item.name}</span>
              </a>
            ))}
          </div>
          <span className="btn btn-success m-4" onClick={props.displaymodel}>
            Tweet
          </span>

          <div className="low-profile">
            <div className="d-flex">
              <div>
                <img
                  className="user-img"
                  src={props.data[1].img}
                  alt="profile"
                ></img>
              </div>

              <div>
                <h4>
                  {props.data[1].name.charAt(0).toUpperCase()}
                  {props.data[1].name.slice(1).toLowerCase()}
                </h4>
                <p>@{props.data[1].userName}</p>
              </div>
            </div>
            <div>
              <a href="#" className="t-d-none black">
                <h1>...</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
