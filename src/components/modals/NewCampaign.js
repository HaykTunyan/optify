import React, { Fragment } from 'react';
import { Title, Icon, Link, Text, CheckboxGroup } from 'style-guide';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'store/actions';
import selectors from 'store/selectors';
import { PATHS } from 'common';
import { useWindowResize } from 'hooks';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import campaign from 'common/campaign';

const onSubmit = ({ data, request, afterSuccess }) => {
  request({ ...data });
  afterSuccess();
  alert(JSON.stringify(data));
};

const NewCampaign = ({ closeModal }) => {
  // hooks
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { isMobile } = useWindowResize();
  const { handleSubmit, errors, control } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
    shouldFocusError: true,
  });
  // actions
  const request = (data) => dispatch(actions.mailing.campaign(data));
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
        <title>{`${t('new_campaign')} | ${t('brand_name')}`}</title>
      </Helmet>
      <div className='md:w-460'>
        <div className='xs:pt-5 md:pt-0' />
        <Link.Internal to={PATHS.MAIL_LIST} className='flex items-center hover:underline md:hidden'>
          <Icon.LeftArrow className='fill-dark' />
          <Text.MD
            className='ml-5 font-medium text-dark text-lg leading-0'
            children={t('my_emails')}
          />
        </Link.Internal>
        <div className='xs:pt-5 md:pt-0' />
        <Title.Base
          children={t('new_campaign')}
          className='text-primary tracking-tight md:hidden font-semibold'
        />
        <div>
          <div className='xs:pt-5 md:pt-2' />
          <Text.Base
            className='text-sm font-medium text-dark-alpha'
            children={t('your_campaign_type')}
          />
          <div className='pt-6' />
          <form
            onSubmit={handleSubmit((data) => onSubmit({ request, data, afterSuccess }))}
            noValidate
            className='md:flex md:justify-center'
          >
            <CheckboxGroup
              rules={{
                validate: {
                  empty: (val) => val?.length || t('day_required_msg'),
                },
              }}
              error={errors['campaign']}
              options={campaign}
              control={control}
              name='campaign'
              className='brd'
            />
          </form>
        </div>
        <div className='pb-7' />
      </div>
    </Fragment>
  );
};

export default NewCampaign;
