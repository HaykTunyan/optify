import React, { Fragment } from 'react';
import { Button, Title } from 'style-guide';

const SectionTitle = ({ titleText, buttonText, onButtonClick }) => (
  <Fragment>
    <div className='flex xs:flex-col md:flex-row md:justify-between md:items-center md:px-8'>
      <Title.Base children={titleText} className='font-medium' />
      <div className='xs:pt-5 md:pt-0' />
      {buttonText ? (
        <Button.Secondary
          children={buttonText}
          className='px-8 py-3 text-base xs:font-medium'
          onClick={onButtonClick}
        />
      ) : null}
    </div>
    <div className='pt-6' />
    <div className='w-full h-1px bg-divider' />
  </Fragment>
);

export default SectionTitle;
