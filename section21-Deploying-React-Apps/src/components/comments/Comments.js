import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
import useHttp from '../../hooks/use-http';
import  { getAllComments } from '../../lib/api'
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from './CommentsList';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const { quoteId } = params;

  const { sendRequest, status, data:loadedComments} = useHttp(getAllComments);

  useEffect( () => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  const onAddedCommentHandler = useCallback( () => { 
    sendRequest(quoteId);

  }, [sendRequest, quoteId]);
  
  let comments;

  if(status === 'pending'){
    comments = <div className="centered"> <LoadingSpinner /> </div>;
  }
  if(status === 'completed' && loadedComments && loadedComments.length > 0){
    comments = <CommentsList comments={loadedComments} />;
  }

  if(status === 'completed' && (!loadedComments && loadedComments === 0)){
    comments = <p className="centered"> No Comments were added yet!</p>;
  }

  console.log(comments);
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm onAddedComment={onAddedCommentHandler} quoteId={quoteId} />}
      {comments}
    </section>
  );
};

export default Comments;
