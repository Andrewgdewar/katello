import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import getBookmark from './BookmarkActions';
import { selectBookmarkError, selectBookmarks, selectBookmarkStatus } from './BookmarkSelectors';

const Bookmark = ({ controller }) => {
  const dispatch = useDispatch();
  const details =
    useSelector(state => selectBookmarks(state, controller), shallowEqual);
  const status =
    useSelector(state => selectBookmarkStatus(state, controller), shallowEqual);
  const error =
    useSelector(state => selectBookmarkError(state, controller), shallowEqual);

  useEffect(() => {
    dispatch(getBookmark(controller));
  }, [controller, dispatch]);

  const onUpdate = () => {
    // name: "steve"
    // public: true
    // query: "steve"
  };

  return (
    <>{JSON.stringify(details)}</>
  );
};

Bookmark.propTypes = {
  controller: PropTypes.string.isRequired,
};

export default Bookmark;
