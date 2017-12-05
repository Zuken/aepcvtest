import React from 'react'
import {Comments} from "./Comments";
import {AddComment} from "./AddComment";
import {EditableText} from "./EditableText";
import {fetchJson} from "../utils";
import PropTypes from 'prop-types';


export class PostView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            title: '',
            text: '',
            comments: [],
            errors: [],
            isPostDirty: false
        }
    }

    componentWillMount()
    {
        this._loadPost();

    }
    _loadPost()
    {
        const {postId} = this.props;


        return fetchJson(`/api/post/${postId}`)
            .then((r) => {
                this.setState({
                    id: r.id,
                    title: r.title,
                    text: r.text,
                    comments: r.comments

                });
            })
    }
    _savePost()
    {
        const {postId} = this.props;
        fetchJson(`/api/post/${postId}`,'PUT', this.state)
            .then(r => {
                this.setState({
                    id: r.id,
                    title: r.title,
                    text: r.text,
                    isPostDirty: false
                });
            })
            .catch(errors => {
                this.setState({errors: errors})
            })
    }
    _updatedPost(partialState) {
        this.setState({...partialState, isPostDirty: true, errors: []});
    }
    render() {
        const {id, isPostDirty, title, text, comments, errors} = this.state;
        return (
            <div>
                <h1 className="title">Dienasgrāmatas ieraksts {id}</h1>
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h4>
                            <EditableText value={title} onSave={(v) => this._updatedPost({title:v})}/>
                        </h4>
                    </div>
                    <div className="panel-body">
                        <EditableText value={text} onSave={(v) => this._updatedPost({text:v})}/>
                    </div>
                    <div className="panel-footer">
                        {errors.map((error,i) =>
                            <div key={i} className="alert alert-danger">
                                {error}
                            </div>
                        )}

                        {isPostDirty ?
                            <button className="btn btn-primary" onClick={this._savePost.bind(this)}>Saglabat</button>:
                            null
                        }
                    </div>
                </div>
                {id && <Comments postId={id} comments={comments} onRefresh={this._loadPost.bind(this)}/> }
                <h4>Komentēt</h4>
                {id && <AddComment postId={id} onCreated={this._loadPost.bind(this)}/> }


            </div>
        );
    }
}
PostView.propTypes = {
    postId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
};
