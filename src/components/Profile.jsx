import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="profile">
                <img src={this.props.photo} className="profile-photo" />
                <div className="memName">{this.props.name}</div>
                <div className="memGithub">{this.props.github}</div>
                <div className="memTitle">{this.props.title}</div>
                <div className="socials">
                    <a href={this.props.githubURL}>{<GitHubIcon style={{ color: '#051522' }} />}</a>
                    <a href={this.props.linkedinURL}>{<LinkedInIcon style={{ fontSize: 30, color: '#051522' }} />}</a>
                </div>
            </div>
        )
    }
}

export default Profile;