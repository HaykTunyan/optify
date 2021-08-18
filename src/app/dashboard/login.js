import React, { useRef } from 'react';
import actions from 'store/actions';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const onSubmit = ({ formRef, event, login }) => {
  event.preventDefault();
  const form = formRef.current;
  const userName = form.querySelector('input#username')?.value;
  const password = form.querySelector('input#password')?.value;
  login({ userName, password });
};

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const { t } = useTranslation();

  const login = (data) =>
    dispatch(actions.auth.login({ ...data, afterSuccess: () => history.push('/dashboard/users') }));

  return (
    <div className='w-full  flex flex-col items-center mt-48'>
      <form
        ref={formRef}
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-3/12'
        onSubmit={(event) => onSubmit({ formRef, event, login })}
      >
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
            {t('email')}
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='username'
            type='text'
            placeholder='Username'
            autoComplete='username'
          />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
            {t('password')}
          </label>
          <input
            className='shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            id='password'
            type='password'
            placeholder='******************'
            autoComplete='current-password'
          />
        </div>
        <div className='flex justify-center'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            {t('login')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(auth.isNotAuth(Login));
