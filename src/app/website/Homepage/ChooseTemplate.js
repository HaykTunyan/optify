import React from 'react';
import { Container, Img, Text, Title, Icon } from 'style-guide';
import SendEmail from 'assets/homepage/send-email.png';
import Template1 from 'assets/homepage/template-1.png';
import Template2 from 'assets/homepage/template-2.png';
import Template3 from 'assets/homepage/template-3.png';

const ChooseTemplate = ({ t }) => {
  return (
    <div>
      <Icon.ShapeTop className='fill-primary w-full' />
      <div className='bg-primary'>
        <Title.H3
          className='text-2xl xl:text-6xl text-center text-secondary font-medium'
          children={t('choose_template_and_let')}
        />
        <div className='xs:pt-0 md:pt-8' />
      </div>
      <div className='xs:px-7 md:px-0 bg-primary'>
        <Container.Base>
          <div className='grid xs:grid-cols-1 md:grid-cols-3 md:gap-7 xs:justify-between'>
            <div>
              <div className='md:pt-20 xs:pt-7' />
              <Img.Static src={Template1} className='w-full' />
            </div>
            <div>
              <div className='md:pt-0 xs:pt-10' />
              <Img.Static src={Template2} className='w-full' />
            </div>
            <div>
              <div className='md:pt-20 xs:pt-10' />
              <Img.Static src={Template3} className='w-full' />
            </div>
          </div>
          <div className='pt-5' />
          <div className='template-email px-5'>
            <div className='pt-4' />
            <Title.H3
              className='text-center text-2xl text-secondary w-full font-medium'
              children={t('send_email')}
            />
            <div className='pt-4' />
            <Text.MD
              className='text-center text-secondary md:px-32 lg:px-60 block'
              children={t('send_email_desc')}
            />
            <div className='pt-8' />
            <div className='text-center'>
              <Img.Static src={SendEmail} className='inline' />
              <div className='pt-2' />
            </div>
          </div>
          <div className='md:pt-12 xs:pt-6' />
        </Container.Base>
      </div>
      <Icon.ShapeBottom className='fill-primary w-full' />
    </div>
  );
};

export default ChooseTemplate;
