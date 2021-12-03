import React, { useState } from "react";
import {
  data,
  posticons,
  postformicons,
  earth,
  navIcons,
  settingicon,
  searchicon,
  trends,
  closeicon,
} from "./data";
import Posts from "./posts";
import Postform from "./postform";
import Nav from "./nav";
import Rightdash from "./Rightdash";

export default function App() {
  const [post, setPost] = useState("hello");
  const [count, setCount] = useState(3);
  const [name, setName] = useState();
  const [userName, setUsername] = useState();
  const [img, setImg] = useState();
  const [display, setdisplay] = useState("none");
  function displaymodel() {
    setdisplay("popuppost-container");
  }
  function hidemodel() {
    setdisplay("none");
  }
  function postHandler(event) {
    setPost(event.target.value);
  }
  function nameHandler(event) {
    setName(event.target.value);
  }
  function usernameHandler(event) {
    setUsername(event.target.value);
  }
  function imgHandler(event) {
    setImg(event.target.value);
  }

  function postinput() {
    data.push({
      id: count,
      name: name,
      userName: userName,
      post: post,
      img: img,
      date: "07/07/2021",
    });
    setCount(count + 1);
    setdisplay("none");
  }
  return (
    <>
      <div className="main">
        <div>
          <Nav navIcons={navIcons} data={data} displaymodel={displaymodel} />
        </div>
        <div className="border">
          <Postform
            img={data}
            postformicons={postformicons}
            earth={earth}
            post={post}
            name={name}
            img={img}
            userName={userName}
            postHandler={postHandler}
            nameHandler={nameHandler}
            usernameHandler={usernameHandler}
            imgHandler={imgHandler}
            postinput={postinput}
            data={data}
          />
          <Posts data={data} posticons={posticons} />
        </div>
        <div>
          <Rightdash
            settingicon={settingicon}
            searchicon={searchicon}
            trends={trends}
            data={data}
          />
        </div>
        <div className={display}>
          <div className="popuppost-inner-container">
            <div className="close-button" onClick={hidemodel}>
              {closeicon}
            </div>
            <Postform
              img={data}
              postformicons={postformicons}
              earth={earth}
              post={post}
              name={name}
              img={img}
              userName={userName}
              postHandler={postHandler}
              nameHandler={nameHandler}
              usernameHandler={usernameHandler}
              imgHandler={imgHandler}
              postinput={postinput}
              data={data}
            />
          </div>
        </div>
      </div>
    </>
  );
}
