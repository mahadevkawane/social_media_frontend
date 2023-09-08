import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "This is react project ",
      name: "User",
      userId: 1,
      profilePicture:
        "https://openseauserdata.com/files/9f297b73e313275a3d811edd8d305381.jpg",
    },
    {
      id: 2,
      desc: "This is react project",
      name: "User",
      userId: 2,
      profilePicture:
        "https://openseauserdata.com/files/9f297b73e313275a3d811edd8d305381.jpg",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
