import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Hhome = () => {
  return (
    <><nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/">All</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item">
            <Link class="nav-link" to="fullstackdevelopment">FullStack Development</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="datascience">Data Science</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="cybersecurity">Cyber Security</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="blockchain">Blockchain</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav><div><Outlet /></div></>
  )
}

export default Hhome