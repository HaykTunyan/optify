import React, { Fragment } from 'react';
import { Title, Input, Button, Icon, Link, Text } from 'style-guide';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'store/actions';
import selectors from 'store/selectors';
import { PATHS } from 'common';
import { useWindowResize } from 'hooks';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const onSubmit = ({ data, request, afterSuccess }) => {
  request({ ...data });
  afterSuccess();
};

const AddLabel = ({ closeModal }) => {
  // hooks
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { isMobile } = useWindowResize();
  const { register, handleSubmit, errors } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
    shouldFocusError: true,
  });
  // actions
  const request = (data) => dispatch(actions.mailing.addLabel(data));
  const { modal } = useSelector(selectors.ui);
  const afterSuccess = () => {
    if (isMobile) {
      history.push(PATHS.MAIL_LIST);
    } else {
      closeModal();
    }

    modal?.payload?.cb && modal.payload.cb();
  };

  return (
    <Fragment>
      <Helmet>
        <title>{`${t('new_label')} | ${t('brand_name')}`}</title>
      </Helmet>
      <div>
        <div className='pt-5' />
        <Link.Internal to={PATHS.MAIL_LIST} className='flex items-center hover:underline md:hidden'>
          <Icon.LeftArrow className='fill-dark' />
          <Text.MD
            className='ml-5 font-medium text-dark text-lg leading-0'
            children={t('my_emails')}
          />
        </Link.Internal>
        <div className='xs:pt-8 md:pt-0' />
        <Title.Base
          children={t('new_label')}
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
            name='name'
            labeltext={t('new_name')}
            placeholder={t('type_here')}
            labelclassname='text-dark font-semibold'
            rules={{ required: t('label_name_required_msg') }}
            register={register}
            error={errors.name}
          />
          <div className='pt-3' />
          <div className='pt-8' />
          <div className='flex xs:flex-col md:flex-row md:justify-between md:items-center'>
            <Button.Secondary
              type='button'
              children={t('cancel')}
              className='px-12 py-4 xs:w-full md:w-auto'
              onClick={isMobile ? () => history.push(PATHS.MAIL_LIST) : closeModal}
            />
            <Button.Primary
              children={t('submit')}
              className='px-12 py-4 xs:w-full md:w-auto xs:mt-5 md:mt-0'
              type='submit'
            />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default AddLabel;
