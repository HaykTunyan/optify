import React, { Fragment } from 'react';
import { Message } from 'style-guide';

const ErrorBlock = (errorMessage) =>
  errorMessage ? (
    <Fragment>
      <div className='pt-1 xs:w-full'>
        <Message.Fail text={errorMessage} className='animate-swing' />
      </div>
      <div className='xs:pb-5 md:pb-0' />
    </Fragment>
  ) : null;

export default ErrorBlock;
