import React from 'react'
import {fetchJson} from "../utils";
import PropTypes from 'prop-types';

export class AddComment extends React.Component {
    constructor(state) {
        super(state)
        this.state = {
            email: '',
            comment: '',
            errors: []
        }
    }
    componentWillMount() {
        const email = localStorage.getItem("email");
        if (email) {
            this.setState({email});
        }
    }
    _createComment()
    {

        const {postId, onCreated} = this.props;
        const {id, email, comment} = this.state;
        localStorage.setItem("email", email);
        fetchJson(`/api/post/${postId}/comment`,'POST', {email, comment})
            .then(() => {
                onCreated && onCreated();
                this.setState({comment: ''});
            })
            .catch(errors => {
                this.setState({errors: errors})
            })
    }
    render() {
        const {email, comment, errors} = this.state;
        return (
            <div className="add-comment-form">
                <div className="form-group">
                    <label>Tavs epasts</label>
                    <input className="form-control" onChange={(e) => this.setState({email: e.target.value})} value={email}/>
                </div>
                <div className="form-group">
                    <label>Tavs epasts</label>
                    <textarea className="form-control" onChange={(e) => this.setState({comment: e.target.value})} value={comment}/>
                </div>
                {errors.map((error,i) =>
                    <div key={i} className="alert alert-danger">
                        {error}
                    </div>
                )}
                <button className="btn btn-primary" onClick={this._createComment.bind(this)}>Saglabat</button>
            </div>
        )
    }
}

AddComment.propTypes = {
    onCreated: PropTypes.func,
    postId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
};