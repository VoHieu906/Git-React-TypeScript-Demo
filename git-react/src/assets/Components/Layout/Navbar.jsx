import "./Navbar.css";
function Navbar() {
  return (
    // <div className={show ? "sidenav-active" : "sidenav-none"}>
    //   <ul className="list-group">
    //     <li aria-current="true" className="list-group-item active">
    //       An active item
    //     </li>
    //     <li className="list-group-item">A second item</li>
    //     <li className="list-group-item">A third item</li>
    //     <li className="list-group-item">A fourth item</li>
    //     <li className="list-group-item">And a fifth one</li>
    //   </ul>
    // </div>
    <div>
      <div className="btn-group">
        <button
          aria-expanded="false"
          className="btn btn-danger dropdown-toggle"
          data-bs-toggle="dropdown"
          type="button"
        >
          Action
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Separated link
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
