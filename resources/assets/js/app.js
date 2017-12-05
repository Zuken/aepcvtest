import React from 'react';
import ReactDOM from 'react-dom';
import {PostView} from "./components/PostView";


const postContainer =  document.getElementById('react-post');
if (postContainer) {
    ReactDOM.render(
        <PostView postId={postContainer.dataset.postId}/>,
        postContainer
    );
}