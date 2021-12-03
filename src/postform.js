import React from "react";

export default function Postform(props) {
  return (
    <div className=" p-2">
      <div className="flex">
        {/* first div */}
        <div className="m-2">
          <img
            src={props.data[1].img}
            alt="profile"
            className="user-img p-1  inline-block"
          />
        </div>
        {/* second div */}
        <div className="flex-grow m-2">
          <input
            className="form-control border-0 m-1"
            placeholder="Name"
            rows="2"
            onChange={props.nameHandler}
            required
          ></input>
          <input
            className="form-control border-0 m-1"
            placeholder="UserName"
            rows="2"
            onChange={props.usernameHandler}
            required
          ></input>

          <input
            className="form-control border-0 m-1"
            placeholder="img_link"
            rows="2"
            onChange={props.imgHandler}
            required
          ></input>
          <textarea
            className="form-control border-0"
            placeholder="what's happening?"
            rows="2"
            onChange={props.postHandler}
            required
          ></textarea>
          <div className="p-2 postform-color">
            {props.earth} Everyone can reply
          </div>
          <div className="flex justify-content-space-between p-3">
            <div>
              {props.postformicons.map((item, index) => (
                <span className="p-2" key={index}>
                  {item}
                </span>
              ))}
            </div>
            <div>
              <span className="btn btn-success" onClick={props.postinput}>
                Post
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
