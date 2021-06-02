import React from 'react';
import { connect } from "react-redux";
import Users from './Users.jsx';
import {follow, unfollow, requestUsers, setCurrentPage,togglefollowingInProgress,} from '../../redux/users-reduser';
import Preloader from '../common/Preloader/Preloader';
import {getUsers, getPageSize, getTotalUsersCount,
  getCurrentPage, getIsFetching, getFollowingInProgress} 
  from '../../redux/users-selectors';
   

class UsersContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  componentDidMount(){
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
            
      }
  opPageChenge = (pageNumber) => {          
          this.props.getUsers(pageNumber, this.props.pageSize);       
      }
     
      render(){ 
    
  return ( <div>
              {this.props.isFetching ?  <Preloader />    : null}
                          <Users totalUsersCount={this.props.totalUsersCount} 
                              pageSize= {this.props.pageSize}
                              currentPage={this.props.currentPage}
                              users={this.props.users}
                              opPageChenge={this.opPageChenge}
                              unfollow= {this.props.unfollow}
                              follow= {this.props.follow}   
                              followingInProgress={this.props.followingInProgress}
                          />
      </div>
        )
      }

}

// let mapStateToProps = (state) => { 
//     return { 
//       users: state.usersPage.users,
//       pageSize: state.usersPage.pageSize,
//       totalUsersCount: state.usersPage.totalUsersCount,
//       currentPage: state.usersPage.currentPage,
//       isFetching:state.usersPage.isFetching,
//       followingInProgress: state.usersPage.followingInProgress
//   }}
  let mapStateToProps = (state) => { 
    return { 
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching:getIsFetching(state),
      followingInProgress: getFollowingInProgress(state)
  }}
  

 
export default connect(mapStateToProps,{
      follow,unfollow,
      setCurrentPage,
      togglefollowingInProgress,
      getUsers: requestUsers 
   } 
  )(UsersContainer);