// import { Component } from "react";
import { useEffect, useState } from "react";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";
import { ListGroup } from "react-bootstrap";
// import { Spinner } from "react-bootstrap";

const CommentArea = (props) => {
  const [showComments, setShowComments] = useState({
    isLoading: true,
    comments: [],
    reLoading: false,
  });

  const fetchComments = async () => {
    const URL =
      "https://striveschool-api.herokuapp.com/api/movies/" +
      props.asin +
      "/comments";
    const method = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjY1MjEwYmNhMDAwMTQ1ODNmZDIiLCJpYXQiOjE2OTQwOTA1NzMsImV4cCI6MTY5NTMwMDE3M30.NaaaXaNcsPbSiqzTPJ0r85gA640OlnKF8HjoHiwRbTc",
      },
    };
    try {
      const response = await fetch(URL, method);

      if (response.ok) {
        const parseComments = await response.json();
        // console.log(parseComments);

        console.log("filtercomm", parseComments);

        setShowComments({
          isLoading: false,
          comments: parseComments,
          reLoading: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const forReLoad = () => {
    setShowComments({ ...showComments, reLoading: true });
  };

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.asin]);

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showComments.reLoading]);

  // console.log(this.state.comments);
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ margin: "0 40px 0 20px", width: "400px" }}
    >
      {/* {console.log(this.state.comments)} */}
      {(showComments.comments === null || showComments.comments.length === 0) &&
        !showComments.isLoading && (
          <ListGroup>
            <ListGroup.Item as="li">
              Non ci sono ancora commenti su questo film
            </ListGroup.Item>
          </ListGroup>
        )}
      {showComments.comments !== null && showComments.comments.length !== 0 && (
        <>
          <CommentsList
            commentList={showComments.comments}
            reLoading={showComments.reLoading}
            isLoading={showComments.isLoading}
          />
        </>
      )}
      <AddComment asin={props.asin} forReLoad={forReLoad} />
    </div>
  );
};

export default CommentArea;
