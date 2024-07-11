import './CommentDetail.css';

const CommentDetail = ({ user, time, text, avatar }) => {
  return (
    <div className="comment">
      <img src={avatar} alt={`${user}'s avatar`} className="comment-avatar" />
      <div className="comment-content">
        <div className="comment-user-time">
          <span className="comment-user">{user}</span>
          <span className="comment-time">{time}</span>
        </div>
        <div className="comment-text">{text}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
