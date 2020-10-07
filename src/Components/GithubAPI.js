import React, {Fragment} from 'react'
import GithubProfile from "./GithubProfile";
import Axios from "axios"
import {clientId, clientSecret} from "./GithubCredentials";
import GithubRepos from "./GithubRepos";
import NoData from "./NoData";

class GithubAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            repos: null,
            profile: null
        }

    }

    //two way data binding with username
    updateInput = (e) => {
        this.setState({
            ...this.state,
            username: e.target.value
        })
    }

    //form Submission
    searchUser = (e) => {
        e.preventDefault();
        this.searchProfile();
        this.searchRepos();
    }

    //for profile search
    searchProfile = () => {
        Axios.get(`https://api.github.com/users/${this.state.username}?clientId=${clientId}&clientSecret=${clientSecret}`)
            .then((response) => {
                this.setState({
                    profile: response.data
                })
            })
            .catch((err) => {
                console.log(err);
            });
    }

    //for repos search
    searchRepos = () => {
        Axios.get(`https://api.github.com/users/${this.state.username}/repos?clientId=${clientId}&clientSecret=${clientSecret}`)
            .then((response) => {
                this.setState({
                    repos: response.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <h5>GIT Hub User Search</h5>
                                </div>
                                <div className="card-body">
                                    <form className="gitHubAPIForm" onSubmit={this.searchUser}>
                                        <div className="form-group">
                                            <input type="text"
                                                   value={this.state.username}
                                                   onChange={this.updateInput}
                                                   name="username"
                                                   className="form-control"
                                                   placeholder="User Name"/>
                                        </div>
                                        <div>
                                            <input type="submit" value="Search" className="btn btn-sm btn-secondary"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            {
                                this.state.profile ? <GithubProfile profile={this.state.profile}/> : <NoData/>
                            }
                        </div>
                    </div>
                </div>

                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            {
                                this.state.repos ? <GithubRepos repos={this.state.repos}/> : null
                            }
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default GithubAPI;