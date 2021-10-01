import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import DataService from '../services/users.services';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);
        this.newSignup = this.newSignup.bind(this);
        this.signup = this.signup.bind(this);

        this.state = {
            name: "",
            email: "",
            password: "",
            mobile: "",
            newsLetter: "",

            submitted: false,
            apiMessage: ""
        }
    }

    onChangeName(e) { this.setState({ name: e.target.value }); }

    onChangeEmail(e) { this.setState({ email: e.target.value }); }

    onChangePassword(e) { this.setState({ password: e.target.value }); }

    onChangeMobile(e) { this.setState({ mobile: e.target.value }); }

    signup() {
        var data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            mobile: this.state.mobile,
            newsLetter: false
        }

        DataService.create(data)
        .then(response => {
            this.setState({ 
                submitted: true,
                apiMessage: response.data
            })
        })
        .catch(e => {
            alert(e.response.data);
        })
    }

    newSignup() {
        this.setState({
            submitted: false
        })
    }

    render() {
        return(
        <div>
            {this.state.submitted ? (
            <div> 
                <h4>{this.state.apiMessage}</h4>
                <button className="btn btn-sucess"
                        onClick={this.newSignup}>
                        Novo Usuário
                </button>
            </div>
            ):(
            <div> 
                <div class="form-group row">
                <label for="name" class="col-sm-2 col-form-label">Nome</label>
                <div class="col-sm-10">
                    <input 
                    type="text" 
                    class="form-control" 
                    id="name" 
                    required
                    value={this.state.name}
                    onChange={this.onChangeName}
                    placeholder="Nome do Usuário..." 
                    />
                </div>
            </div>
            <div class="form-group row">
                <label for="email" class="col-sm-2 col-form-label">E-mail</label>
                <div class="col-sm-10">
                    <input 
                    type="email" 
                    class="form-control" 
                    id="email" 
                    required
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    placeholder="E-mail do Usuário..." 
                    />
                </div>
            </div>
            <div class="form-group row">
                <label for="password" class="col-sm-2 col-form-label">Senha</label>
                <div class="col-sm-10">
                    <input 
                    type="password" 
                    class="form-control" 
                    id="password" 
                    required
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    placeholder="Senha do Usuário..." 
                    />
                </div>
            </div>
            <div class="form-group row">
                <label for="mobile" class="col-sm-2 col-form-label">Telefone/Celular</label>
                <div class="col-sm-10">
                    <input 
                    type="tel"
                    class="form-control" 
                    id="mobile" 
                    required
                    value={this.state.mobile}
                    onChange={this.onChangeMobile}
                    placeholder="Telefone/Celular do Usuário..." 
                    />
                </div>
            </div>
            <div class="form-group"> 
                <button
                    onClick={this.signup}
                    class="btn btn-secondary">
                        Cadastrar Usuário
                </button>
            </div>
            </div>
            )}
        </div>
        )
    }
}

export default Signup;