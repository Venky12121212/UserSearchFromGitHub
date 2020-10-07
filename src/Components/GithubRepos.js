import React, {Fragment} from "react"
import NoData from "./NoData";

class GithubRepos extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Fragment>
                <div className="card GithubReposCard">
                    <div className="card-header bg-info text-white">
                        <h5>Github Repos</h5>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            {
                                Object.keys(this.props.repos).length !== 0 ?
                                this.props.repos.map((repo) => {
                                    return (
                                        <li className="list-group-item col-md-12 list-inline">
                                            <a href={repo.html_url} className="col-md-6">{repo.name} </a>
                                            <div className="col-md-6">
                                                <span
                                                    className="badge badge-success mx-5">{repo.stargazers_count} Stars</span>
                                                <span
                                                    className="badge badge-warning mx-5">{repo.watchers_count} Watches</span>
                                            </div>
                                        </li>

                                    )
                                }) : <NoData/>
                            }
                        </ul>
                    </div>
                </div>
            </Fragment>
        );
    }

}

export default GithubRepos;