import React, { Fragment } from 'react';
import Text from './Text';

const Base = (props) => {
  const {
    className = '',
    labelclassname = '',
    labeltext,
    options = [],
    register,
    error,
    rules = {},
    ...selectProps
  } = props;

  const hasError = error?.message;
  const Select = (
    <select
      className={`${
        hasError ? 'ring-2 ring-warrning focus:ring-warrning ' : ''
      } form-select w-full p-4 border-lightAlpha border-1 rounded-15 text-lightGray focus:ring-primary focus:border-transparent focus:ring-2 ${className}`}
      ref={register(rules)}
      {...selectProps}
    >
      {options.map((opt) => (
        <option className='text-dark py-4' children={opt.text} value={opt.value} key={opt.value} />
      ))}
    </select>
  );
  return (
    <Fragment>
      {labeltext ? (
        <label children={labeltext} className={`pb-2 block ${labelclassname}`} />
      ) : null}
      {Select}
      {hasError ? (
        <div className='pt-1'>
          <Text.Error>{error.message}</Text.Error>
        </div>
      ) : null}
    </Fragment>
  );
};

const Select = { Base };
export default Select;
