import { Component } from "react";

class Myfooter extends Component {
  render() {
    return (
      <footer>
        <div
          className="row text-center mt-5 justify-content-center"
          style={{ width: "100%" }}
        >
          <div className="col-6">
            <div className="row">
              <div className="col col-12 d-flex justify-content-start align-items-center mb-2">
                <i className="fab fa-facebook-square footer-icon"></i>
                <i className="fab fa-instagram footer-icon"></i>
                <i className="fab fa-twitter footer-icon"></i>
                <i className="fab fa-youtube footer-icon"></i>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
              <div className="col">
                <div className="row">
                  <div className="col col-12 footer-links">
                    <p>
                      <a href="#audio" alt="footer link">
                        Audio and Subtitles
                      </a>
                    </p>
                    <p>
                      <a href="#media" alt="footer link">
                        Media Center
                      </a>
                    </p>
                    <p>
                      <a href="#privacy" alt="footer link">
                        Privacy
                      </a>
                    </p>
                    <p>
                      <a href="#contact-us" alt="footer link">
                        Contact us
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col col-12 footer-links">
                    <p>
                      <a href="#audio" alt="footer link">
                        Audio Description
                      </a>
                    </p>
                    <p>
                      <a href="#investor" alt="footer link">
                        Investor Relations
                      </a>
                    </p>
                    <p>
                      <a href="#legal" alt="footer link">
                        Legal Notices
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col col-12 footer-links">
                    <p>
                      <a href="#help" alt="footer link">
                        Help Center
                      </a>
                    </p>
                    <p>
                      <a href="#jobs" alt="footer link">
                        Jobs
                      </a>
                    </p>
                    <p>
                      <a href="#cookie" alt="footer link">
                        Cookie Preferences
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col col-12 footer-links">
                    <p>
                      <a href="#gift" alt="footer link">
                        Gift Cards
                      </a>
                    </p>
                    <p>
                      <a href="#terms" alt="footer link">
                        Terms of Use
                      </a>
                    </p>
                    <p>
                      <a href="#corporate" alt="footer link">
                        Corporate Information
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col col-12 d-flex justify-content-start mb-2">
                <button
                  type="button"
                  className="btn btn-sm footer-button rounded-0 mt-3"
                >
                  Service Code
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col col-12 d-flex justify-content-start my-2 copyright">
                © 1997-2022 Netflix, Inc.
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Myfooter;
