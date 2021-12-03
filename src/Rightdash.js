import React from "react";

export default function Rightdash(props) {
  return (
    <div className="rightdash">
      <div className="rightdash1  icon-central ">
        <div className="left-semi-circle inputfocus"></div>
        <div className="middle-border-input inputfocus">
          <span className="search-icon"> {props.searchicon}</span>
          <input className="border-none" placeholder="Search Twitter"></input>
        </div>
        <div className="right-semi-circle inputfocus"></div>
      </div>
      <div>
        <div className="trends-head">
          <div>
            <h3>Trends for You</h3>
          </div>
          <div className="icon-central">
            <a className="black" href="#">
              <span className="icon-central display-end">
                {props.settingicon}
              </span>
            </a>
          </div>
        </div>
        {props.trends.map((item) => (
          <>
            <div className="trends-content">
              <div>
                <div className="trends-catagory">
                  <span>{item.catagory}</span>
                </div>
                <div className="trends-topic">{item.topic}</div>
                <div className="trends-tweets">{item.tweets}</div>
              </div>
              <div>
                <a href="#" className="t-d-none black">
                  <h1>...</h1>
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="rightdash3">
        <div className="follow-txt">
          <h1>Who to follow</h1>
        </div>
        {/* {user 1} */}
        <div className="low-profile">
          <div className="d-flex">
            <div>
              <img
                className="user-img p-2"
                src={props.data[0].img}
                alt="profile"
              ></img>
            </div>
            <div>
              <h5>
                {props.data[0].name.charAt(0).toUpperCase()}
                {props.data[0].name.slice(1).toLowerCase()}
              </h5>
              <p>@{props.data[0].userName}</p>
            </div>
          </div>
          <div>
            <a href="#" className="t-d-none black">
              <span className="btn btn-success m-4">Follow</span>
            </a>
          </div>
        </div>
        {/* {user2} */}
        <div className="low-profile">
          <div className="d-flex">
            <div>
              <img
                className="user-img p-2"
                src={props.data[2].img}
                alt="profile"
              ></img>
            </div>
            <div>
              <h5>
                {props.data[2].name.charAt(0).toUpperCase()}
                {props.data[2].name.slice(1).toLowerCase()}
              </h5>
              <p>@{props.data[2].userName}</p>
            </div>
          </div>
          <div>
            <a href="#" className="t-d-none black">
              <span className="btn btn-success m-4">Follow</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
