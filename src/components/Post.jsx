import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
  const API_URL = process.env.REACT_APP_API_URL;

  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={`${API_URL}/` + cover} />
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
          {/* <time>{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time> */}
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
