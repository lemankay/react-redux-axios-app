import React from 'react';
// import s from './ProfileInfo.module.css';




class ProfileStatus extends React.Component {
    
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMod = () => {
        this.setState({editMode: true});
        }
    deactivateEditMod = () => {
            this.setState({editMode: false});
            this.props.updateStatus(this.state.status);
            }
    onStatueChenge = (e) => {
        this.setState({
            status:e.currentTarget.value
        })
        
    }        
        
    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onClick={this.activateEditMod}>
                            {this.props.status || 'enter status'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input  value={this.state.status || 'ok'}
                                onChange={this.onStatueChenge}
                                autoFocus={true} 
                                onBlur={this.deactivateEditMod}
                          />
                    </div>
                }
            </div>




        )
    }
}

export default ProfileStatus;