import React from 'react'
import {withFormik, Form, Field} from 'formik'
import * as Yup from 'yup';

 const LoginForm = ({ touched, errors, isSubmitting, values }) => {
    return (
        <Form>
        <div className="input-group">
            <div className="login-group" >
               {touched.name && errors.name && <p>{errors.username}</p>}
               <label htmlFor="username">Username: </label>
                <Field 
                    type="text"
                    name="username"
                    placeholder="Username" 
                    value={values.username}
                />
            </div>
            <div className="login-group">
            {touched.password && errors.password && <p>{errors.password}</p>}
                <label htmlFor="password">Password: </label>
                <Field 
                    autoComplete="off"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                />
            </div>
        </div>
        <div>
                {isSubmitting && <p>Loading...</p>}
            <button
                disabled={isSubmitting}
                className="submit-button"
                type="submit"
            >
                Submit &rarr;
            </button>
        </div>
        </Form>
    )
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ username, password }) {
       return{
        username: username || "",
        password: password || ""
       }; 
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password Required')
    }),

    handleSubmit(values,{ resetForm }){

    },

})(LoginForm);
export default FormikLoginForm;