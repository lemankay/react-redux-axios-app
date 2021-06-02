import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator} from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';




const maxLength50 = maxLengthCreator(50);

const Dialogs = (props) => {

 let addNewMessage = (values) => {props.sendMessage(values.newMessageBody);}

  //  if (!props.isAuth) { return <Redirect to={'/login'} /> }
    return (
      <div className={s.dialogs}>
            <div className={s.dialogsItems}>
              {props.dialogPage.dialogs.map(el=>(<DialogItem name={el.name}id={el.id}/>))}
            </div>
            <div className={s.messages}>
               {props.dialogPage.messages.map(el =>(<Message message={el.message}id={el.id}/>))}
               <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
     </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.zik} >
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <Field component={Textarea}
                validate={[required, maxLength50]}
                name="newMessageBody"
                placeholder="Enter new message"
            />
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: 'DialogAddMessageForm'})(AddMessageForm)
export default Dialogs;