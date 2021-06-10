import React from 'react';
export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formOpen: false,
            app: '',
            username: 'test',
            password: ''
        };
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        this.setState({ formOpen: !this.state.formOpen });
        const { app, username, password } = this.state;
        const user = { app, username, password };
        this.props.onSubmit(user);
    }
    render() {
       const button = <button onClick={() => { this.setState({ formOpen: !this.state.formOpen })}}>
            <i>Add</i>
           </button>;
        const form = (
            <div>
                <label>App</label><input value={this.state.app} onChange={e => this.setState({ app: e.target.value })} />
                <label>Userame</label><input value={this.state.username} onChange={e => this.setState({ username: e.target.value })} />
                <label>Password</label><input value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
                <button onClick={this.onClick}>Add</button></div>
            );
        return this.state.formOpen ? form : button;
    }
}