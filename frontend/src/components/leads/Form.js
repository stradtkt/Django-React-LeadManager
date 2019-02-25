import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLead } from '../../actions/leads';


class Form extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    };
    static propTypes = {
      addLead: PropTypes.func.isRequired
    };
    onChange(e) {
        this.setState({[e.target.name]: [e.target.value]});
    }
    onSubmit(e) {
        e.preventDefault();
        const { name, email, message } = this.state;
        const lead = { name, email, message };
        this.props.addLead(lead);
    }

    render() {
        const { name, email, message } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Lead</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" onChange={this.onChange} className="form-control" value={name}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" onChange={this.onChange} className="form-control" value={email}/>
                    </div>
                    <div className="form-group">
                        <textarea name="message" onChange={this.onChange} cols="30" rows="10" className="form-control" value={message}></textarea>
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default connect(null, {addLead})(Form);
