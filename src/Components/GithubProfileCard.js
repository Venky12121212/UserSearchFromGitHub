import React, {Fragment} from "react"

class GithubProfileCard extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let {name, avatar_url, bio, html_url} = this.props.profile;
        return (
            <Fragment>
                <div className="card p-0 githubProfilecard">
                    <img src={avatar_url} className="img-fluid"/>
                    <div className="card-body">
                        <h4>{name}</h4>
                        <p title={bio}>{(bio !== "undefined") || (bio !== null) ? ((bio).length > 40 ?  bio.substring(0,40) + "..." : bio) : null }</p>
                        <a href={html_url} target="_blank" className="btn btn-sm btn-success">Profile</a>
                    </div>
                </div>
            </Fragment>
        );
    }

}
export default GithubProfileCard;