import React from 'react'
import PropTypes from 'prop-types';


export class EditableText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            value: props.value
        }
    }
    componentWillReceiveProps(nextProps) {
        const {value} = nextProps;

        if (this.props.value !== value) {
            this.setState({original:value, value})
        }
    }
    _setValue(value)
    {
        const {onChange} = this.props;
        this.setState({value});
        onChange && onChange(value);
    }
    _onChange(event) {
        const value = event.target.value;
        this._setValue(value);
    }
    _onCancel() {
        this._setValue(this.state.original);
        this.setState({editing: false})
    }
    _onSave() {
        const {onSave} = this.props;
        onSave && onSave(this.state.value);
        this.setState({editing: false})

    }

    render() {
        const {value, editing} = this.state;
        const {type} = this.props;

        if (!editing) {
            return (
                <span onDoubleClick={() => this.setState({editing: true})}>
                    {value}
                    <button className="btn btn-sm btn-info pull-right" onClick={() => this.setState({editing: true})}>
                        <i className="fa fa-edit"/>
                    </button>
                </span>
            );
        }
        return (
            <div className="input-group">
                <input type={type ? type : 'text'}
                       value={value}
                       className="form-control"
                       onChange={this._onChange.bind(this)}
                />
                <div className="input-group-btn">
                    <button className="btn btn-success" onClick={this._onSave.bind(this)}>
                        <i className="fa fa-save"/>
                    </button>
                    <button className="btn btn-warning" onClick={this._onCancel.bind(this)}>
                        <i className="fa fa-close"/>
                    </button>

                </div>
            </div>
        )
    }
}
EditableText.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'number', 'email']),
};