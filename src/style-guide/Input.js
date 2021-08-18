import React, { Fragment, useState } from 'react';
import { Icon, Text } from 'style-guide';

const inputTypes = {
  password: 'password',
  text: 'text',
  number: 'number',
};

const Base = (props) => {
  const {
    className = '',
    labelclassname = '',
    labeltext,
    register,
    error,
    rules = {},
    ...inputProps
  } = props;

  const hasError = error?.message;

  const Input = (
    <div>
      <input
        id={props.name}
        className={`p-4 w-full  ${
          hasError ? 'ring-2 ring-warrning focus:ring-warrning ' : ''
        }  border-1 rounded-15 border-lightAlpha placeholder-lightGray placeholder-opacity-75 focus:ring-primary focus:ring-2 focus:border-transparent ${className} `}
        ref={register(rules) || ''}
        {...inputProps}
      />
      {hasError ? (
        <div className='pt-1'>
          <Text.Error>{error.message}</Text.Error>
        </div>
      ) : null}
    </div>
  );

  return labeltext ? (
    <Fragment>
      <label
        children={labeltext}
        className={`pb-2  block ${labelclassname}`}
        htmlFor={props.name}
      />
      {Input}
    </Fragment>
  ) : (
    Input
  );
};

const TextArea = (props) => {
  const {
    className = '',
    labelclassname = '',
    labeltext,
    register,
    error,
    rules = {},
    ...textareaProps
  } = props;

  const hasError = error?.message;

  const TextArea = (
    <textarea
      id={props.name}
      className={`${
        hasError ? 'ring-2 ring-warrning focus:ring-warrning ' : ''
      } p-4 w-full border-lightAlpha  border-1 rounded-15 placeholder-lightGray placeholder-opacity-75 text-dark focus:ring-primary focus:ring-2 focus:border-transparent ${className}`}
      ref={register(rules) || ''}
      {...textareaProps}
    />
  );
  return labeltext ? (
    <Fragment>
      <label children={labeltext} className={`pb-2 block ${labelclassname}`} htmlFor={props.name} />
      {TextArea}
    </Fragment>
  ) : (
    TextArea
  );
};

const Checkbox = (props) => {
  const {
    className = '',
    labelclassname = '',
    labeltext,
    register,
    rules = {},
    error,
    ...checkboxProps
  } = props;
  const hasError = error?.message;

  return (
    <div>
      <div className='flex items-center'>
        <input
          id={props.name}
          type='checkbox'
          className={`${
            hasError ? 'ring-2 ring-warrning focus:ring-warrning ' : ''
          } ${className} text-primary bg-transparent  focus:ring-primary focus:ring-2 focus:border-transparent w-5 h-5 rounded-md`}
          ref={register(rules || '')}
          {...checkboxProps}
        />
        <label className={`pl-2 select-none   ${labelclassname}`} htmlFor={props.name}>
          {labeltext}
        </label>
      </div>
      {hasError ? (
        <div className='pt-1 w-full block'>
          <Text.Error>{error.message}</Text.Error>
        </div>
      ) : null}
    </div>
  );
};

const Radio = (props) => {
  const { className = '', labelclassname = '', labeltext, register, error, ...radioProps } = props;
  const hasError = error?.message;

  return (
    <div>
      <div className='flex items-center'>
        <input
          id={props.value}
          type='radio'
          className={`${
            hasError ? 'ring-2 ring-warrning focus:ring-warrning ' : ''
          } ${className} text-primary bg-transparent focus:ring-primary focus:ring-2 focus:border-transparent`}
          ref={register}
          {...radioProps}
        />
        <label className={`pl-2 select-none leading-0 ${labelclassname}`} htmlFor={props.value}>
          {labeltext}
        </label>
      </div>
      {hasError ? (
        <div className='pt-1 w-full block'>
          <Text.Error>{error.message}</Text.Error>
        </div>
      ) : null}
    </div>
  );
};

const Password = (props) => {
  const {
    className = '',
    labelclassname = '',
    labeltext,
    register,
    error,
    rules = {},
    ...inputProps
  } = props;
  const [showPassword, setShowPassword] = useState(false);
  const hasError = !!error?.message;
  const Input = (
    <div>
      <div className='relative z-10  '>
        <input
          id={props.name}
          className={`${
            hasError ? 'ring-2 ring-warrning focus:ring-warrning' : ''
          } py-4 pl-4 pr-10 w-full placeholder-lightGray placeholder-opacity-75 text-dark rounded-15 border-1 border-lightAlpha focus:ring-primary focus:border-transparent focus:ring-2 ${className} `}
          type={showPassword ? inputTypes.text : inputTypes.password}
          ref={register(rules) || ''}
          {...inputProps}
        />
        <div className='absolute right-0 bottom-0 h-full flex justify-center items-center rounded-tr-22 rounded-br-22 overflow-hidden'>
          <button
            type='button'
            className='h-full px-3'
            onClick={() => setShowPassword(!showPassword)}
          >
            <Icon.Eye className={showPassword ? 'fill-primary' : 'fill-lightGray'} />
          </button>
        </div>
      </div>
      {hasError ? (
        <div className='pt-1'>
          <Text.Error>{error.message}</Text.Error>
        </div>
      ) : null}
    </div>
  );

  return labeltext ? (
    <Fragment>
      <label
        children={labeltext}
        className={`pb-2  block ${labelclassname}`}
        htmlFor={props.name}
      />
      {Input}
    </Fragment>
  ) : (
    Input
  );
};

const Status = (props) => {
  const {
    className = '',
    labelclassname = '',
    labeltext,
    success,
    register,
    error,
    rules = {},
    loading,
    ...inputProps
  } = props;
  const Loader = <Icon.Loader className='fill-primary w-7' />;
  const Checked = <Icon.Checked />;

  const Input = (
    <div className='relative z-10'>
      <input
        id={props.name}
        className={` py-4 pl-4 pr-10 w-full placeholder-lightGray placeholder-opacity-75 text-dark rounded-15 border-1 border-lightAlpha focus:ring-primary focus:border-transparent focus:ring-2 ${className} `}
        ref={register(rules) || ''}
        {...inputProps}
      />
      {success || loading ? (
        <div
          className='absolute right-0 bottom-0 h-full flex justify-center items-center p-3 z-10'
          children={loading ? Loader : success ? Checked : null}
        />
      ) : null}
    </div>
  );
  return labeltext ? (
    <Fragment>
      <label
        children={labeltext}
        className={`pb-2  block ${labelclassname}`}
        htmlFor={props.name}
      />
      {Input}
    </Fragment>
  ) : (
    Input
  );
};

const Input = {
  Status,
  Base,
  TextArea,
  Checkbox,
  Password,
  Radio,
};

export default Input;
