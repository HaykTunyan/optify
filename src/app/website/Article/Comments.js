import React from 'react';
import { Button, Container, Icon, Img, Input, Text, Title } from 'style-guide';
import { useTranslation } from 'react-i18next';
import Avatar from 'assets/blog/avatar-large.png';
import { useForm } from 'react-hook-form';

const onSubmit = ({ request, data }) => alert(JSON.stringify(data));

const Comments = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, errors } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
    shouldFocusError: true,
  });
  const request = null;

  return (
    <div className='pb-24'>
      <Container.Base>
        <div className='xs:pt-12 pt-10'/>
        <Title.Base className='xs:text-1xl lg:text-2xl' children={t('blog_about')} />
        <div className='pt-5' />
        <div className='shadow-layout rounded-22 px-8 py-5 flex xs:flex-col md:flex-row lg:w-9/12 xl:w-8/12'>
          <div className='flex justify-center md:w-3/12'>
            <Img.Static className='m-auto' src={Avatar} />
          </div>
          <div className='flex flex-col md:w-7/12 md:px-4'>
            <div className='xs:pt-5'/>
            <Text.LG className='font-medium' children={t('blog_name')} />
            <div className='xs:pt-5'/>
            <Text.MD children={t('lorem')} />
          </div>
        </div>
        <div className='xs:pt-10' />
        <div className='flex'>
          <Title.Base className='xs:text-1xl md:text-2xl font-semibold' children={t('blog_comments')} />
          <Icon.Point className='ml-3 mt-3' />
          <div className='ml-3 font-semibold text-2xl'>15</div>
        </div>
        <div className='xs:pt-6' />
        <div className='flex flex-col shadow-layout rounded-22 px-6 py-4 xl:w-10/12'>
          <div className='flex'>
            <Text.MD className='font-medium' children={t('about_contact_name_placeholder')} />
            <Icon.VerticalDiv className='ml-3 mt-2' />
            <div className='ml-3 font-normal text-sm'>1 {t('hours')}</div>
          </div>
          <div className='xs:pt-3' />
          <Text.MD children={t('lorem')} />
        </div>
        <div className='flex xs:justify-start xs:pt-10'>
          <Button.Secondary
            className='xs:text-base xs:font-medium p-3 w-full block md:w-64'
            children={t('read_more')}
          />
        </div>
      </Container.Base>
      <div className='xs:pt-10' />
      <div className='shadow-layout rounded-22 p-5 md:w-690 md:mx-auto lg:w-930 xl:w-1100'>
        <Text.MD className='font-semibold text-1xl' children={t('Leave a Comment')} />
        <div className='pt-5' />
        <form onSubmit={handleSubmit((data) => onSubmit({ request, data }))} noValidate>
          <Input.TextArea
            name='message'
            labeltext={t('message')}
            className='resize-none h-44'
            labelclassname='text-dark font-medium'
            placeholder={t('comment_placeholder')}
            register={register}
            error={errors.message}
            rules={{ required: t('message_required_msg') }}
          />
          <div className='flex xs:w-full md:justify-end xs:pt-8'>
            <Button.Primary children={t('submit')} className='text-base p-2 xs:w-full md:w-44 xs:font-medium' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comments;
