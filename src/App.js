import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/** media from medialist.txt */
const MEDIA = [
  {
    id: "netflix",
    label: "Netflix",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
    className: "nf"
  },
  {
    id: "hbo",
    label: "HBO Max",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg",
    className: "hb"
  },
  {
    id: "hulu",
    label: "Hulu",
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg",
    className: "hu"
  },
  {
    id: "prime",
    label: "Prime Video",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",
    className: "pr"
  }
];

export default function App() {
  return (
    <Router>
      <div className="container py-4">
        <h2 className="mb-4">Choose a streaming app</h2>

        {/* icon links */}
        <div className="mb-5 clearfix">
          {MEDIA.map(m => (
            <Link key={m.id} to={`/${m.id}`} title={m.label} style={{ display: "inline-block" }}>
              <img className={m.className} src={m.src} alt={m.label} />
            </Link>
          ))}
        </div>

        {/* routes */}
        <Switch>
          <Route path="/:id">
            <Selected />
          </Route>
          <Route path="/">
            <div>
              <h3 style={{ textAlign: "center", marginTop: 40 }}>
                Click an icon to select an app
              </h3>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Selected() {
  // read the dynamic segment from the URL
  const { id } = useParams();
  return (
    <div>
      <h3>You Selected:<span>{id}</span></h3>
    </div>
  );
}
