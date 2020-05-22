import React from "react"
import { Formik, Form, Field } from 'formik'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { GET_USER_REPO, LOGIN_USER } from "../helpers/queries/queries.helper.gql";
import { ToastMessage, type } from '../helpers/toatser/Toastr.helper';

const FormInput = () => {
  const [onLoginUser] = useMutation(LOGIN_USER)
  const { Get_User_Repo } = useQuery(GET_USER_REPO)
  return (<>
    <Formik
      initialValues={{
        username: '',
        password: ''
      }}
      onSubmit={async (values, { resetForm, setSubmitting }) => {
        console.log(values)
        try {
          const { data } = await onLoginUser({
            variables: { ...values }

          });
          console.log(data);

          // let token = '5bb3cfaa67f4b8647678f0197d87443b7fb8cc53'
          // sessionStorage.setItem('tribr_token', token);
          resetForm();
          ToastMessage(type.SUCCESS, 'Login Successfully')
        } catch (e) {
          setSubmitting(false)
        }

      }}
      render={() => (
        <Form>
          <label htmlFor="username" >UserName:</label>
          <Field name='username' placeholder='github' />
          <label htmlFor="password">Password:</label>
          <Field name='password' />
          <button type='submit'>Submit</button>
        </Form>
      )}

    />
  </>)
}
export default FormInput;