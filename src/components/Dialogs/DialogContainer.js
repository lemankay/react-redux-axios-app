import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import { sendMsssageCreater } from '../../redux/dialog-reduser';

let mapStateToProps = (state) => { 
  return { 
      dialogPage: state.dialogPage,
      newMessageBody:state.dialogPage.newMessageBody,
      isAuth: state.auth.isAuth
}}
let mapDispatchToProps = (dispatch) => { return {  
    sendMessage:(newMessageBody)=>{dispatch(sendMsssageCreater(newMessageBody));}
   }
}
const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogContainer;