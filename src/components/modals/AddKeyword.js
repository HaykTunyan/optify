import React, { Fragment } from 'react';
import { Title, Input, Button, Link, Text, Icon } from 'style-guide';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import actions from 'store/actions';
import { schemas } from 'utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { PATHS } from 'common';
import { useWindowResize } from 'hooks';
import { useHistory } from 'react-router-dom';
import { urlHelper } from 'utils';
import { Helmet } from 'react-helmet-async';

const onSubmit = ({ data, request, afterSuccess }) => {
  // connect redux
  request(data);
  afterSuccess();
};

const CreateNewKeyword = ({ closeModal }) => {
  // hooks
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();
  const { isMobile } = useWindowResize();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schemas.createNewKeyword(t)),
    mode: 'onSubmit',
  });
  // actions
  const request = (data) => dispatch(actions.ui.addKeyword(data));
  const afterSuccess = () => {
    isMobile
      ? history.push({
          pathname: PATHS.GUEST_POST,
          search: urlHelper.setSearchParam({ key: 'section', value: 'w-metrics' }),
        })
      : closeModal();
  };

  return (
    <Fragment>
      <Helmet>
        <title>{`${t('add_keyword')} | ${t('brand_name')}`}</title>
      </Helmet>
      <div className='xs:w-full md:w-609'>
        <div className='pt-5' />
        <Link.Internal
          to={PATHS.GUEST_POST}
          className='flex items-center hover:underline md:hidden'
        >
          <Icon.LeftArrow className='fill-dark' />
          <Text.MD
            className='ml-5 font-medium text-dark text-lg leading-0'
            children={t('guest_post')}
          />
        </Link.Internal>
        <div className='xs:pt-8 md:pt-0' />
        <Title.Base
          children={t('create_new_keyword')}
          className='text-primary tracking-tight md:hidden font-semibold'
        />
        <div className='pt-4' />
        <form
          onSubmit={handleSubmit((data) => onSubmit({ request, data, afterSuccess }))}
          noValidate
        >
          <Input.Base
            autoFocus={true}
            tabIndex={1}
            name='keyword'
            placeholder={t('type_here')}
            labelclassname='text-dark font-semibold'
            register={register}
            error={errors.keyword}
          />
          <div className='pt-5' />
          <div className='flex'>
            <Button.Primary children={t('submit')} className='w-full py-4' type='submit' />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default CreateNewKeyword;
