import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import { login} from '../../redux/auth-reduser';
import { Redirect } from 'react-router-dom';
import s from './loginComponent.module.css';

const LoginForm = (props) => {
return (
    <div>
        <form onSubmit={props.handleSubmit}>
            <div>
             <Field placeholder={'Email'}name={'email'} component={Input} 
              validate={ [required] }/></div>
            <div>
             <Field placeholder={'password'}name={'password'}type={'password'}
              component={Input}
              validate={ [required] } /></div>
            <div>
             <Field type={'checkbox'} name={'remember me'}component={Input}
              validate={ [required] }/>remember me</div>
             { props.error && <div className={s.formSummaryError}>     
                  {props.error}             
              </div>
             }
            <div><button>login</button></div>
        </form>
    </div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const LoginComponent = (props) => {
    const onSubmit = (formData) => {
           props.login(formData.email, formData.password, formData.rememberMe )
    }
    if(props.isAuth){return <Redirect to={"/profile"} /> }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = state => ({
   isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(LoginComponent);

