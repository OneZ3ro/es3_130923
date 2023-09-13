// import { Component } from "react";
import { Button, ListGroup, Spinner } from "react-bootstrap";

const CommentsList = (props) => {
  // const myArr = [this.props.commentList];
  // console.log("myarr", myArr);
  return (
    <>
      {props.isLoading || props.reLoading ? (
        <Spinner animation="border" variant="secondary" />
      ) : (
        <ListGroup
          as="ul"
          style={{
            marginTop: "20px",
            width: "100%",
          }}
        >
          {props.commentList.map((elem) => (
            <ListGroup.Item
              as="li"
              key={`commID-${elem._id}`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {elem.comment}
              <Button variant="danger" style={{ marginLeft: "15px" }}>
                Rimuovi
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </>
  );
};

export default CommentsList;
