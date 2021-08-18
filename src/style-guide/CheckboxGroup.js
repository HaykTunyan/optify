import React, { useState } from 'react';
import { Fragment } from 'react';
import { Controller } from 'react-hook-form';
import Text from './Text';

const CheckboxGroup = ({
  options = [],
  label = null,
  rules = {},
  control,
  labelClassname,
  name,
  error,
  ...props
}) => {
  const [checked, setChecked] = useState(props.defaultValue || []);
  const hasError = !!error?.message;

  return (
    <div>
      {label ? <div children={label} className={labelClassname} /> : null}
      <div className='pt-4' />
      <Controller
        defaultValue={null}
        name={name}
        control={control}
        rules={rules}
        render={(props) => (
          <div className='flex flex-wrap gap-5'>
            {options.map((opt, key) => (
              <Fragment key={key}>
                <input
                  className='hidden'
                  name={name}
                  type='checkbox'
                  id={`${name}-${opt.display}`}
                  onChange={(e) => {
                    const isChecked = !checked.includes(opt.display);
                    const data = isChecked
                      ? [...checked, opt.display]
                      : checked.filter((d) => d !== opt.display);
                    setChecked(data);
                    props.onChange(data);
                  }}
                  value={opt.display}
                />
                <label
                  htmlFor={`${name}-${opt.display}`}
                  children={opt.display}
                  className={`px-6 py-2 rounded-22 cursor-pointer transition-all select-none ${
                    checked.includes(opt.display)
                      ? 'bg-primary text-white'
                      : 'bg-secondary text-primary'
                  }`}
                />
              </Fragment>
            ))}
          </div>
        )}
      ></Controller>
      {hasError ? (
        <div className='pt-1'>
          <Text.Error>{error.message}</Text.Error>
        </div>
      ) : null}
    </div>
  );
};

export default CheckboxGroup;
