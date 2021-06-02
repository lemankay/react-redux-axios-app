import React from 'react';
import Profile from './Profile';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { getUserProfile, getStatus,  updateStatus } from '../../redux/profile-reduser';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
             userId = this.props.authorizedUserId;
             }
        this.props.getUserProfile(userId);
        // setTimeout(() => {
        // }, 1000); 
    this.props.getStatus(userId);
    }
    render() {
      //  if(!this.props.isAuth){return <Redirect to={'/login'} /> }
        return (
            <Profile {...this.props} 
                    profile={this.props.profile}
                    status={this.props.status} 
                    updateStatus={this.props.updateStatus}
                    />
        )
    }

}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile, getStatus, updateStatus })(WithUrlDataContainerComponent);