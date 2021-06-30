import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="profile">
                <img src={this.props.photo} />
                <div className="memName">{this.props.name}</div>
                <div className="memGithub">{this.props.github}</div>
                <div className="memTitle">{this.props.title}</div>
                <a href={this.props.githubURL}>Github</a>
                <a href={this.props.linkedinURL}>LinkedIn</a>
            </div>
        )
    }
}

export default Profile;