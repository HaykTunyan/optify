import React, { useState, useEffect } from 'react';
import { Link, Icon, Text, Input } from 'style-guide';
import { useLocation } from 'react-router-dom';
import { useWindowResize } from 'hooks';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import selectors from 'store/selectors';
import { PATHS, MODALS } from 'common';
import Button from './Button';
import actions from 'store/actions';

const onSubmit = ({ request, data }) => alert(JSON.stringify(data));

export const listLabel = [
  {
    key: '1',
    name: 'label_one',
    title: 'Updates',
  },
  {
    key: '2',
    name: 'label_two',
    title: 'Label 1',
  },
  {
    key: '3',
    name: 'label_three',
    title: 'Label 2',
  },
  {
    key: '4',
    name: 'label_four',
    title: 'Label 3',
  },
  {
    key: '5',
    name: 'label_five',
    title: 'Label 4',
  },
  {
    key: '6',
    name: 'label_6',
    title: 'Label 5',
  },
  {
    key: '7',
    name: 'label_7',
    title: 'Label 7',
  },
];

const Menu = ({ text, options, t, afterText }) => {
  const { pathname } = useLocation();

  const [visible, setVisible] = useState(false);
  const { isMobile } = useWindowResize();

  useEffect(() => {
    setVisible(false);
  }, [pathname]);

  return isMobile ? (
    <div>
      <ul>
        <li onClick={() => setVisible(!visible)}>
          <span
            className='flex items-center cursor-pointer w-full'
            id='options-menu'
            aria-haspopup='true'
            aria-expanded='true'
            onClick={() => setVisible(!visible)}
          >
            <Text.Menu>{text}</Text.Menu>
            <Icon.ArrowDown
              className={`w-4 hover:border-gray-300 border-transparent transform ml-1 ${
                visible ? '-rotate-180' : ''
              }`}
            />
          </span>
          {afterText}
        </li>
        <li className={`overflow-hidden transition-all duration-300 ${visible ? 'h-auto' : 'h-0'}`}>
          <ul>
            {options.map((opt, idx) => (
              <li className='text-left hover:bg-gray-200 pl-6' key={idx}>
                <Link.Internal to={opt.path}>
                  <Text.Menu
                    children={t(opt.t_key)}
                    className={`block w-full py-3 ${idx ? 'mt-1 ' : ''}`}
                  />
                </Link.Internal>
              </li>
            ))}
          </ul>
        </li>
        {/* ) : null} */}
      </ul>
    </div>
  ) : (
    <div className='relative inline-block text-left cursor-pointer'>
      <div>
        <span
          className='flex items-center hover:opacity-75'
          id='options-menu'
          aria-haspopup='true'
          aria-expanded='true'
          onClick={() => setVisible(!visible)}
        >
          <Text.Menu>{text}</Text.Menu>
          <Icon.ArrowDown
            className={`w-4 hover:border-gray-300 border-transparent transform ml-1 ${
              visible ? '-rotate-180' : ''
            }`}
          />
        </span>
        {afterText}
      </div>
      {visible ? (
        <div className='origin-top-right absolute left-0 mt-2 w-48 shadow-layout rounded-tr-22 rounded-br-22 rounded-bl-22 overflow-hidden bg-body transition-all animate-swing duration-1000'>
          <div role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
            <ul className='w-full'>
              {options.map((opt, idx) => (
                <li
                  className='text-center hover:bg-gray-200'
                  key={idx}
                  onClick={() => setVisible(false)}
                >
                  <Link.Internal to={opt.path}>
                    <Text.Menu children={t(opt.t_key)} className='block xl:py-4 md:py-3 sm:py-2' />
                  </Link.Internal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const LoggedUser = ({ t, user }) => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
  }, [pathname]);

  const options = [
    { t_key: 'profile', path: PATHS.PROFILE },
    { t_key: 'sign_out', path: PATHS.SIGN_OUT },
  ];

  return (
    <div className='relative inline-block text-left md:ml-16 cursor-pointer animate-swing'>
      <div
        className='flex items-center ml-4 border-2 border-secondary rounded-22 hover:bg-secondary hover:shadow-layout transition-all cursor-pointer select-none'
        onClick={() => setVisible(!visible)}
      >
        <Icon.Avatar />
        <Text.SM children={user?.firstName} className='xs:hidden md:block xs:px-0 md:px-3' />
      </div>
      {visible ? (
        <div className='origin-top-right absolute right-0 mt-2 w-48 shadow-layout rounded-tr-0 rounded-bl-22 rounded-br-22 rounded-tl-22 overflow-hidden bg-body transition-all animate-swing duration-1000'>
          <div role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
            <ul className='w-full'>
              {options.map((opt, idx) => (
                <li
                  className='text-center hover:bg-gray-200'
                  key={idx}
                  onClick={() => setVisible(false)}
                >
                  <Link.Internal to={opt.path}>
                    <Text.Menu children={t(opt.t_key)} className='block xl:py-4 md:py-3 xs:py-2' />
                  </Link.Internal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const Label = ({ t, children }) => {
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
    shouldFocusError: true,
  });

  const request = null;
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
  }, [pathname]);

  const { labels } = useSelector(selectors.mailing);
  const openCreateLabelModal = () => dispatch(actions.ui.openModal({ type: MODALS.NEW_LABEL }));

  return (
    <div className='relative z-toast inline-block overflow-visible'>
      <div onClick={() => setVisible(!visible)} children={children} />
      {visible ? (
        <form
          onSubmit={handleSubmit((data) => onSubmit({ request, data }))}
          noValidate
          className='origin-top-left absolute left-0 mt-2 w-240 shadow-layout rounded-tl-0 rounded-bl-22 rounded-br-22 rounded-tr-22 overflow-hidden transition-all animate-swing duration-1000 bg-white'
        >
          <div>
            <div role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
              <ul className='w-full p-4 h-52 overflow-y-auto'>
                <li className='text-left'>
                  <span>
                    <Text.XS children={t('label_as')} className='block xl:text-xs font-semibold' />
                  </span>
                </li>
                {labels.data.map((item) => (
                  <li className='text-left' key={item.id}>
                    <span>
                      <div className='xs:pt-4' />
                      <Input.Checkbox
                        name={item.name}
                        register={register}
                        error={errors.label}
                        rules={{ required: t('not_robot_required_msg') }}
                        labelclassname='text-dark'
                        labeltext={<Text.SM className='text-sm font-medium'>{item.name}</Text.SM>}
                      />
                    </span>
                  </li>
                ))}
              </ul>
              <ul className='w-full p-4 border-t-1 px-4 pt-4 pb-6'>
                <li className='text-left'>
                  <Button.Base
                    onClick={() => {
                      openCreateLabelModal();
                      setVisible(false);
                    }}
                  >
                    <Text.SM children={`+ ${t(`creat_new`)}`} className='block text-primary' />
                  </Button.Base>
                </li>
                <div className='pt-3' />
                <li className='text-left'>
                  <Button.Base
                    className='text-primary'
                    onClick={() => alert('no design')}
                    type='manage'
                  >
                    <Text.SM children={t(`manage_labels`)} className='block text-primary' />
                  </Button.Base>
                </li>
              </ul>
            </div>
          </div>
        </form>
      ) : null}
    </div>
  );
};

const Dropdown = {
  Menu,
  LoggedUser,
  Label,
};

export default Dropdown;
