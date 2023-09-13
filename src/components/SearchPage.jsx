// import { InputGroup } from "react-bootstrap";
import { useState } from "react";
import MyCards from "./MyCards";
import { Form, InputGroup } from "react-bootstrap";

const SearchPage = () => {
  const [searchFilm, setSearchFilm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    return (
      <div
        className="row mb-4 no-gutters text-center flex-nowrap"
        style={{ overflow: "hidden" }}
      >
        <MyCards film={searchFilm} />
      </div>
    );
  };

  return (
    <>
      <div
        className="d-flex justify-content-between align-items-center"
        style={{
          marginTop: "10px",
          marginBottom: "30px",
          paddingInline: "24px",
        }}
      >
        <div id="upbar-div-flex" className="d-flex align-items-center">
          <h2>Cerca</h2>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Cerca film</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Scrivi il nome del film che vuoi cercare"
                required
                value={searchFilm}
                onChange={(event) => setSearchFilm(event.target.value)}
              />
            </InputGroup>
          </Form>
        </div>

        <div id="upbar-div-hide">
          <i className="fa fa-th-large icons"></i>
          <i className="fa fa-th icons"></i>
        </div>
      </div>
    </>
  );
};
export default SearchPage;
