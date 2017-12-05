import React from 'react'
import PropTypes from 'prop-types';
import {fetchJson} from "../utils";

export class Comments extends React.Component {

    _deleteComment(comment) {
        const {postId} = this.props;
        fetchJson(`/api/post/${postId}/comment/${comment.id}`, "DELETE")
            .then((r) => {
                this.props.onRefresh && this.props.onRefresh()
            })
    }

    _blockComment(comment) {
        const {postId} = this.props;
        fetchJson(`/api/post/${postId}/comment/${comment.id}/block`, "POST")
            .then((r) => {
                this.props.onRefresh && this.props.onRefresh()
            })
    }

    render() {
        const {comments} = this.props;
        return (
            <div>
                {comments.length ? <h4>Komentāri</h4> : null }

                <ul className="list-group">
                    {comments.map(c =>
                        <li key={c.id} className="list-group-item">
                            {c.email}:
                            {c.comment}
                            <div className="btn-group pull-right">
                                <button className="btn btn-sm btn-danger" title="dzest"
                                        onClick={this._deleteComment.bind(this, c)}>
                                    <i className="fa fa-trash"/>
                                </button>
                                <button className="btn btn-sm btn-warning" title="block this person"
                                        onClick={this._blockComment.bind(this, c)}>
                                    <i className="fa fa-ban"/>
                                </button>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}
Comments.propTypes = {
    onRefresh: PropTypes.func,
    postId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired
};