import React from "react"
import GithubProfileCard from "./GithubProfileCard";
import GithubProfileDetails from "./GithubProfileDetails";

class GithubProfile extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 col-xs-12 p-0">
                            {
                                //to check an object is empty or not
                                Object.keys(this.props).length !== 0 ?
                                    <GithubProfileCard profile={this.props.profile}/> : null
                            }
                        </div>
                        <div className="col-md-9 col-sm-12 col-xs-12 p-0 githubprofile_Details">
                            {
                                //to check an object is empty or not
                                Object.keys(this.props).length !== 0 ?
                                    <GithubProfileDetails profile={this.props.profile}/> : null
                            }

                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default GithubProfile;