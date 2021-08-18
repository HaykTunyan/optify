import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Text, Input, Link, Icon, CheckboxGroup } from 'style-guide';
import { useForm } from 'react-hook-form';
import { PATHS } from 'common';
import { schemas } from 'utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'store/actions';
import selectors from 'store/selectors';
import { Helmet } from 'react-helmet-async';

export const options = [
  {
    id: 1,
    display: 'Name',
  },
  {
    key: 2,
    display: 'Link',
  },
  {
    key: 3,
    display: 'Department',
  },
];

const onSubmit = ({ request, data, afterSuccess }) => {
  request(data);
  afterSuccess();
  console.log('crete template', data);
};

const CreateNewTemplate = ({ closeModal }) => {
  // selectors
  const { customTemplateData } = useSelector(selectors.ui);

  // hooks
  const { t } = useTranslation();
  const { register, handleSubmit, errors, control } = useForm({
    resolver: yupResolver(schemas.createNewTemplate(t)),
    defaultValues: customTemplateData || {},
    mode: 'onSubmit',
  });
  const dispatch = useDispatch();
  // actions
  const onCreate = (payload) => dispatch(actions.ui.addCustomTemplateData(payload));
  const afterSuccess = closeModal;

  return (
    <Fragment>
      <Helmet>
        <title>{`${t('create_new_template')} | ${t('brand_name')}`}</title>
      </Helmet>
      <div>
        <div className='pt-5' />
        <Link.Internal
          to={PATHS.GUEST_POST}
          className='flex items-center hover:underline md:hidden'
        >
          <Icon.LeftArrow className='fill-dark' />
          <Text.MD
            className='ml-5 font-medium text-dark text-lg leading-0'
            children={t('choose_template')}
          />
        </Link.Internal>
        <div className='pt-8 md:hidden' />
        <Text.XL
          className='font-semibold text-primary md:hidden xs:text-1xl'
          children={t('create_new_template')}
        />
        <div className='pt-5 md:hidden' />
        <form
          onSubmit={handleSubmit((data) => onSubmit({ request: onCreate, afterSuccess, data }))}
          noValidate
        >
          <div>
            <Input.Base
              tabIndex={1}
              autoFocus={true}
              name='name'
              type='text'
              className='xs:p-3 rounded-lg'
              labeltext={t('template_name')}
              labelclassname='font-semibold text-dark text-lg'
              placeholder={t('name_here')}
              register={register}
              error={errors.name}
            />
          </div>
          <div className='pt-8' />
          <CheckboxGroup
            defaultValue={customTemplateData?.mainTextItems || []}
            error={errors.mainTextItems}
            options={options}
            label={<Text.MD className='text-dark font-semibold' children={t('main_text')} />}
            control={control}
            name='mainTextItems'
          />
          <div className='pt-5' />
          <div>
            <Input.TextArea
              tabIndex={2}
              name='mainText'
              className='resize-none h-175'
              placeholder={t('type_your_message')}
              error={errors.mainText}
              register={register}
            />
          </div>
          <div className='pt-1'>
            <Text.Error>{errors?.mainText?.message}</Text.Error>
          </div>
          <div className='pt-8' />
          <div className='flex xs:justify-between'>
            <div className='xs:pt-5 md:pt-0'>
              <Button.Secondary
                className='text-dark text-base py-3 px-12 xs:w-auto'
                children={t('reset')}
                type='reset'
                tabIndex={3}
              />
            </div>
            <div className='xs:pt-5 md:pt-0'>
              <Button.Primary
                className='text-light text-base py-3 px-12 xs:w-auto'
                children={t('create')}
                type='submit'
                tabIndex={4}
              />
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default CreateNewTemplate;
