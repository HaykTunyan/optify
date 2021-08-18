import React, { Fragment, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/datePicker.scss';
import { Controller } from 'react-hook-form';
import Text from './Text';
import Button from './Button';
import Icon from './Icon';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const CustomHeader = ({ date, decreaseMonth, increaseMonth }) => {
  const year = date.getFullYear();
  const month = months[date.getMonth()];

  return (
    <div className='bg-white py-4 m-0 px-2 flex justify-between items-center'>
      <Button.Base
        type='button'
        className='w-8 h-8 border-1 border-lightAlpha rounded-full flex justify-center items-center group hover:bg-primary shadow-button transition-all'
        onClick={decreaseMonth}
      >
        <Icon.LeftArrow className='fill-primary group-hover:fill-light' />
      </Button.Base>
      <Text.Base className='flex-1'>
        {month} <span>{year}</span>
      </Text.Base>
      <Button.Base
        type='button'
        className='w-8 h-8 border-1 border-lightAlpha rounded-full flex justify-center items-center group hover:bg-primary shadow-button transition-all'
        onClick={increaseMonth}
      >
        <Icon.RightArrow className='fill-primary group-hover:fill-light' />
      </Button.Base>
    </div>
  );
};

const MonthPickerHeader = ({ date, decreaseYear, increaseYear }) => {
  const year = date.getFullYear();
  return (
    <div className='bg-white py-4 m-0 px-2 flex justify-between items-center'>
      <Button.Base
        type='button'
        className='w-8 h-8 border-1 border-lightAlpha rounded-full flex justify-center items-center group hover:bg-primary shadow-button transition-all'
        onClick={decreaseYear}
      >
        <Icon.LeftArrow className='fill-primary group-hover:fill-light' />
      </Button.Base>
      <Text.Base className='flex-1' children={year} />
      <Button.Base
        type='button'
        className='w-8 h-8 border-1 border-lightAlpha rounded-full flex justify-center items-center group hover:bg-primary shadow-button transition-all'
        onClick={increaseYear}
      >
        <Icon.RightArrow className='fill-primary group-hover:fill-light' />
      </Button.Base>
    </div>
  );
};

const Base = (props) => {
  const {
    className = '',
    labelclassname = '',
    labeltext,
    error,
    rules = {},
    control,
    name,
    params,
    t,
  } = props;
  const hasError = error?.message;

  const DatePicker = (
    <Controller
      defaultValue={null}
      name={name}
      control={control}
      rules={rules}
      render={(props) => (
        <ReactDatePicker
          className={`p-4 w-full   ${
            hasError ? 'ring-2 ring-warrning focus:ring-warrning' : ''
          }  border-1 rounded-15 border-lightAlpha placeholder-lightGray placeholder-opacity-75 focus:ring-primary focus:ring-2 focus:border-transparent ${className}`}
          placeholderText={t('choose_date')}
          onChange={(e) => props.onChange(e)}
          selected={props.value}
          renderCustomHeader={CustomHeader}
          {...params}
        />
      )}
    />
  );
  return (
    <Fragment>
      {labeltext ? (
        <label
          children={labeltext}
          className={`pb-2 block w-full ${labelclassname}`}
          htmlFor={props.name}
        />
      ) : null}

      {DatePicker}
      {hasError ? (
        <div className='pt-1'>
          <Text.Error>{error.message}</Text.Error>
        </div>
      ) : null}
    </Fragment>
  );
};

// not fully
const Range = (props) => {
  const {
    className = '',
    rules = {},
    control,
    params,
    t,
    minDefaultValue,
    maxDefaultValue,
  } = props;
  const [startDate, setStartDate] = useState(minDefaultValue);
  const [endDate, setEndDate] = useState(maxDefaultValue);

  return (
    <div className='xs:flex xs:flex-col md:grid md:grid-flow-row md:grid-cols-2 gap-4'>
      <div>
        <Controller
          defaultValue={startDate}
          name='start'
          control={control}
          rules={rules}
          render={(props) => (
            <ReactDatePicker
              placeholderText={t('choose_start_date')}
              className={`w-full border-1 rounded-15 border-lightAlpha placeholder-lightGray placeholder-opacity-75 focus:ring-primary focus:ring-2 focus:border-transparent ${className}`}
              onChange={(e) => {
                setStartDate(e);
                props.onChange(e);
              }}
              selected={startDate}
              renderCustomHeader={CustomHeader}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              {...params}
            />
          )}
        />
      </div>

      <div>
        <Controller
          defaultValue={endDate}
          name='end'
          control={control}
          rules={rules}
          render={(props) => (
            <ReactDatePicker
              placeholderText={t('choose_end_date')}
              className={`w-full border-1 rounded-15 border-lightAlpha placeholder-lightGray placeholder-opacity-75 focus:ring-primary focus:ring-2 focus:border-transparent ${className}`}
              onChange={(e) => {
                setEndDate(e);
                props.onChange(e);
              }}
              selected={endDate}
              renderCustomHeader={CustomHeader}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              {...params}
            />
          )}
        />
      </div>
    </div>
  );
};

const Time = (props) => {
  const {
    className = '',
    labelclassname = '',
    labeltext,
    error,
    rules = {},
    control,
    name,
    params,
    t,
  } = props;
  const hasError = error?.message;

  const DatePicker = (
    <Controller
      defaultValue={null}
      name={name}
      control={control}
      rules={rules}
      render={(props) => (
        <ReactDatePicker
          className={`p-4 w-full ${
            hasError ? 'ring-2 ring-warrning focus:ring-warrning' : ''
          }  border-1 rounded-15 border-lightAlpha placeholder-lightGray placeholder-opacity-75 focus:ring-primary focus:ring-2 focus:border-transparent ${className}`}
          placeholderText={t('select_time')}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={30}
          timeCaption={<h1>TImeasd</h1>}
          dateFormat='h:mm aa'
          onChange={(e) => props.onChange(e)}
          selected={props.value}
          renderCustomHeader={CustomHeader}
          {...params}
        />
      )}
    />
  );
  return (
    <Fragment>
      {labeltext ? (
        <label
          children={labeltext}
          className={`pb-2 block w-full ${labelclassname}`}
          htmlFor={props.name}
        />
      ) : null}
      {DatePicker}
      {hasError ? (
        <div className='pt-1'>
          <Text.Error>{error.message}</Text.Error>
        </div>
      ) : null}
    </Fragment>
  );
};

const Month = (props) => {
  const {
    className = '',
    labelclassname = '',
    labeltext,
    error,
    rules = {},
    control,
    name,
    params,
  } = props;
  const hasError = error?.message;

  const DatePicker = (
    <Controller
      defaultValue={null}
      name={name}
      control={control}
      rules={rules}
      render={(props) => (
        <ReactDatePicker
          dateFormat='MM/yyyy'
          showMonthYearPicker
          className={`p-4 w-full   ${
            hasError ? 'ring-2 ring-warrning focus:ring-warrning' : ''
          }  border-1 rounded-15 border-lightAlpha placeholder-lightGray placeholder-opacity-75 focus:ring-primary focus:ring-2 focus:border-transparent ${className}`}
          placeholderText='02/2022'
          onChange={(e) => props.onChange(e)}
          selected={props.value}
          renderCustomHeader={MonthPickerHeader}
          {...params}
        />
      )}
    />
  );
  return (
    <Fragment>
      {labeltext ? (
        <label
          children={labeltext}
          className={`pb-2 block w-full ${labelclassname}`}
          htmlFor={props.name}
        />
      ) : null}

      {DatePicker}
      {hasError ? (
        <div className='pt-1'>
          <Text.Error>{error.message}</Text.Error>
        </div>
      ) : null}
    </Fragment>
  );
};

const DatePicker = {
  Base,
  Range,
  Time,
  Month,
};

export default DatePicker;
