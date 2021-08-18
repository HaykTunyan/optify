import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { withLazy } from 'hocs';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemas } from 'utils';

// subcomponents
const List = withLazy(import('./List'));
const Form = withLazy(import('./Form'));

const onSubmit = ({ request, data }) => {
  // const { email } = data;
  console.log(data);
  // request({ emails: [email] });
};

const Single = ({ data, request, loading }) => {
  // todo after request implement remove loaded state
  const [loaded, setLoaded] = useState(false);
  // hooks
  const { t } = useTranslation();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schemas.emailFinderSingle(t)),
    mode: 'onSubmit',
  });

  return (
    <div>
      <div className='flex flex-col'>
        <div className='pt-4' />
        <div className='flex flex-col xs:w-full md:w-600'>
          <Form
            t={t}
            handleSubmit={handleSubmit((data) => {
              onSubmit({ data });
              setLoaded(true);
            })}
            register={register}
            errors={errors}
            loading={loading}
          />
        </div>
      </div>
      <div className='md:pt-5 xs:pt-8' />
      {loaded && <List t={t} register={register} />}
    </div>
  );
};

export default Single;
