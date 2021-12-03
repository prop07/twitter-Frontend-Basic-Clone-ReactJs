import React from "react";
import PostIcons from "./posticons";

export default function posts(props) {
  return (
    // to use javascript inside return of javascript world
    // use another set of {}.
    <div>
      {props.data.map((item, index) => (
        <div key={index} className="border relative">
          <div className="flex p-2">
            <img src={item.img} alt={item.name} className="user-img p-2" />
            <div>
              <div className="flex">
                <span className="m-1 user-name">
                  {item.name.charAt(0).toUpperCase()}
                  {item.name.slice(1).toLowerCase()}
                </span>
                <span className="m-1 user-id-name">@{item.userName} ·</span>
                <span className="m-1 post-date">
                  {Math.abs(Date().slice(8, 10) - item.date.slice(0, 2))} hrs
                </span>
              </div>
              <div className="m-1 post">
                <p>{item.post}</p>
              </div>
            </div>
          </div>
          <div>
            <PostIcons posticons={props.posticons} />
          </div>
          <div className="tripledots p-3">{props.posticons.tripledots}</div>
        </div>
      ))}
    </div>
  );
}
