import React from 'react';
import { Input, Select, Link, Text, Button, DatePicker } from 'style-guide';
import { useForm } from 'react-hook-form';
import { schemas } from 'utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import countries from 'common/countries';
import { MODALS, PATHS } from 'common';
import actions from 'store/actions';
import { useDispatch } from 'react-redux';

const onSubmit = ({ data, afterSuccess }) => {
  console.log(data);
  afterSuccess();
};

const Form = ({ plan }) => {
  const { t } = useTranslation();
  const { register, handleSubmit, errors, control } = useForm({
    resolver: yupResolver(schemas.paymentDetails(t)),
    mode: 'onSubmit',
  });
  const dispatch = useDispatch();
  const openSuccessModal = () =>
    dispatch(
      actions.ui.openModal({ type: MODALS.PURCHASE_SUCCESS, payload: { infoModal: true, plan } })
    );
  const afterSuccess = openSuccessModal;

  return (
    <form onSubmit={handleSubmit((data) => onSubmit({ data, afterSuccess }))} noValidate>
      <div className='grid lg:grid-cols-2 xs:grid-cols-1 gap-8'>
        <div className='grid gap-8'>
          <div>
            <Input.Base
              type='text'
              register={register}
              tabIndex={1}
              autoFocus={true}
              name='cardPlaceholder'
              autoComplete='cc-name'
              labelclassname='font-semibold'
              error={errors.cardPlaceholder}
              labeltext={t('card_name_surname')}
              placeholder={t('card_name_placeholder')}
            />
          </div>
          <div>
            <Input.Base
              tabIndex={2}
              maxLength={16}
              name='cardNumber'
              register={register}
              autoComplete='cc-number'
              error={errors.cardNumber}
              labeltext={t('card_number')}
              labelclassname='font-semibold'
            />
          </div>
          <div className='grid md:grid-cols-2 xs:grid-cols-1 gap-8'>
            <div>
              <DatePicker.Month
                t={t}
                name='expirationDate'
                control={control}
                error={errors.expirationDate}
                labeltext={t('exp_date')}
                params={{ tabIndex: 3 }}
                labelclassname='font-semibold'
                autoComplete='cc-exp'
              />
            </div>
            <div>
              <Input.Base
                tabIndex={4}
                name='cvv'
                labeltext={t('cvv')}
                autoComplete='cc-csc'
                maxLength={4}
                labelclassname='font-semibold'
                register={register}
                error={errors.cvv}
              />
            </div>
          </div>
        </div>

        <div className='grid gap-8'>
          <div className='grid md:grid-cols-2 xs:grid-cols-1 gap-8'>
            <div>
              <Select.Base
                tabIndex={5}
                name='country'
                autoComplete='country'
                options={countries.map((c) => ({ text: c.name, value: c.name }))}
                labelclassname='font-semibold'
                labeltext={t('country')}
                register={register}
                error={errors.country}
              />
            </div>
            <div>
              <Input.Base
                tabIndex={6}
                name='city'
                labelclassname='font-semibold'
                labeltext={t('city')}
                register={register}
                error={errors.city}
              />
            </div>
          </div>

          <div>
            <Input.Base
              tabIndex={7}
              name='streetAddress'
              labeltext={t('street_address')}
              autoComplete='address'
              labelclassname='font-semibold'
              type='text'
              register={register}
              error={errors.streetAddress}
            />
          </div>
          <div className='grid md:grid-cols-2 xs:grid-cols-1 gap-8'>
            <div>
              <Input.Base
                type='text'
                tabIndex={8}
                name='building'
                labeltext={t('building_apt')}
                labelclassname='font-semibold'
                register={register}
                error={errors.building}
              />
            </div>
            <div>
              <Input.Base
                tabIndex={9}
                name='zip'
                labeltext={t('zip')}
                autoComplete='postal-code'
                labelclassname='font-semibold'
                register={register}
                error={errors.zip}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='pt-8' />
      <div className='flex items-center'>
        <Input.Checkbox
          tabIndex={10}
          name='savePayment'
          register={register}
          error={errors.savePayment}
          labelclassname='text-dark'
          labeltext={<Text.Tiny children={t('save_payment_method')} className='font-semibold' />}
        />
      </div>
      <div className='pt-4' />
      <div className='flex items-center'>
        <Input.Checkbox
          tabIndex={11}
          name='paymentsAgree'
          register={register}
          error={errors.paymentsAgree}
          labelclassname='text-dark'
          labeltext={
            <Text.Tiny>
              {t('i_agree_with')}{' '}
              <span className='font-semibold'>
                <Link.External className='underline' path={`${PATHS.TERMS_CONDITIONS}`}>
                  {t('payments_t_c')}
                </Link.External>
              </span>
            </Text.Tiny>
          }
        />
      </div>
      <div className='pt-5' />
      <div className='flex justify-between'>
        <Button.Secondary 
          children={t('back')} 
          type='button' 
          className='px-10 py-3' 
          tabIndex={12} 
          onClick={ () => window.history.back() }
          />
        <Button.Primary
          children={t('confirm')}
          type='submit'
          className='px-10 py-3'
          tabIndex={13}
        />
      </div>
    </form>
  );
};

export default Form;
