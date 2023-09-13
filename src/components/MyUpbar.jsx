import { Component } from "react";

class MyUpbar extends Component {
  render() {
    return (
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ marginTop: "10px", marginBottom: "30px" }}
      >
        <div id="upbar-div-flex" className="d-flex align-items-center">
          <h2>TV Shows</h2>
          <div className="dropdown ms-4 mt-1">
            <button
              className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ backgroundColor: "#221f1f" }}
            >
              Genres &nbsp;
            </button>
            <div
              className="dropdown-menu bg-dark"
              aria-labelledby="dropdownMenuButton"
            >
              <a className="dropdown-item text-white bg-dark" href="#comedy">
                Comedy
              </a>
              <a className="dropdown-item text-white bg-dark" href="#drama">
                Drama
              </a>
              <a className="dropdown-item text-white bg-dark" href="#thriller">
                Thriller
              </a>
            </div>
          </div>
        </div>
        <div id="upbar-div-hide">
          <i className="fa fa-th-large icons"></i>
          <i className="fa fa-th icons"></i>
        </div>
      </div>
    );
  }
}
export default MyUpbar;
