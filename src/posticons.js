import React from "react";

export default function posticons(props) {
  return (
    <div className="flex post-icons justify-content-space-around">
      <span>{props.posticons.comment}</span>
      <span>{props.posticons.love}</span>
      <span>{props.posticons.share}</span>
    </div>
  );
}
