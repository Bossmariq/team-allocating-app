import { Link } from "react-router-dom";
import "./Notfound.css";

export default function Notfound() {
  return (
    <div className="mainbox">
      <div className="err">4</div>
      <div className="far">0</div>
      <div className="err2">4</div>
      <div className="msg">
        Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
        existed in the first place?
        <p>
          Let's go <Link to="/">home</Link> and try from there.
        </p>
      </div>
    </div>
  );
}
