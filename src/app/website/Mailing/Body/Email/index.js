
import React, { Fragment } from 'react';
import { PATHS, MODALS } from 'common';
import { withLazy } from 'hocs';
import { date as dt } from 'utils';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import selectors from 'store/selectors';
import { Button, Icon, Link, Text, Img } from 'style-guide';
import { useWindowResize } from 'hooks';
import actions from 'store/actions';

const Labels = withLazy(import('../Labels/Classic'));
const Pipe = () => <div className='w-1px bg-dark h-3'></div>;

// todo divide component
const Email = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { search } = useLocation();
  const { isMobile } = useWindowResize();
  const { emailById } = useSelector(selectors.mailing);
  const data = emailById(id);
  const dispatch = useDispatch();
  const history = useHistory();

  const openCooperationFinderModal = () => {
    if (isMobile) {
      history.push(PATHS.COOPERATION_FINDER);
     } else {
      dispatch(actions.ui.openModal({ type: MODALS.COOPERATION_FINDER }));
     }
  }

  return (
    <Fragment>
      <div className='flex w-full xs:flex-col md:flex-row'>
      <div className='xl:w-52 lg:w-48 md:w-44 flex md:h-full'>
        <Labels />
      </div>
      <div className='w-full md:flex-1'>
        <div className='flex justify-start p-5'>
          <div>
            <Link.Internal to={{ pathname: PATHS.MAIL_LIST, search: search }}>
              <Button.Base className='w-8 h-8 bg-lightAlpha flex justify-center items-center rounded-full hover:bg-secondary transition-all'>
                <Icon.LeftArrow className='fill-dark-alpha w-2 hover:fill' />
              </Button.Base>
            </Link.Internal>
          </div>
          <div className='pl-4 flex items-center'>
            <Text.SM children={t('subject_of_email')} className='font-semibold text-dark' />
          </div>
        </div>
        <div className='flex flex-wrap px-5'>
          <div className='xs:w-2/12 pr-2'>
            <div className='w-12 h-12 rounded-full overflow-hidden border-2 border-lightAlpha grid-cols-1'>
              <Img.Static src='https://i.pravatar.cc/300' className='w-full h-full object-cover' />
            </div>
          </div>
          <div className='xs:w-10/12 pl-2'>
            <div className='flex flex-wrap items-center'>
              <div className='flex items-center'>
                <Text.SM
                  children={data.author}
                  className='max-w-xs whitespace-nowrap overflow-hidden overflow-ellipsis font-medium text-dark'
                />
                <div className='pl-2'>
                  <Pipe />
                </div>
              </div>
              <div className='lg:pl-2 xs:hidden lg:block'>
                <Text.SM
                  children={`${data.author.split(' ').join('')}@gmail.com`}
                  className='flex-1 max-w-full underline font-semibold text-dark'
                />
              </div>
              <div className='pl-2 lg:ml-auto'>
                <Text.XS children={dt.formatTime(data.date)} className='font-semibold text-dark' />
              </div>
            </div>
            <div className='xs:pt-1 xs:block lg:hidden'>
              <Text.SM
                children={`${data.author.split(' ').join('')}@gmail.com`}
                className='flex-1 max-w-full underline font-semibold text-dark'
              />
            </div>
            <div className='pt-2' />
            <div>
              <Text.SM className='text-dark-alpha font-medium' children={data.content} />
            </div>
            <div className='pt-5' />
            <div className='flex'>
              <Icon.HorizontalDiv className='fill-dark-alpha' />
              <Icon.HorizontalDiv className='ml-0.5 fill-dark-alpha' />
            </div>
            <div className='pt-3' />
            <Text.SM className='text-dark-alpha font-medium'>Best Regards</Text.SM>
            <div className='pt-2' />
            <Text.SM className='text-dark-alpha font-semibold'>John Smith</Text.SM>
            <div className='pt-2' />
            <Text.SM className='text-dark-alpha font-semibold'>Tel. (+568) 8789565</Text.SM>
          </div>
        </div>
        <div className='pt-5' />
        <div className='w-full h-1px bg-lightAlpha' />
        <div className='flex flex-wrap p-5'>
          <div className='xs:w-2/12 pr-2'>
            <div className='w-12 h-12 rounded-full overflow-hidden border-2 border-lightAlpha grid-cols-1'>
              <Img.Static
                src='https://i.pinimg.com/originals/4b/57/06/4b570687fbe6346b087d14ab741d4d9e.png'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
          <div className='xs:w-10/12 pl-2'>
            <div className='flex flex-row items-center'>
              <div className='flex items-center'>
                <Text.SM
                  children='Apple'
                  className='max-w-xs whitespace-nowrap overflow-hidden overflow-ellipsis font-medium text-dark'
                />
                <div className='pl-2'>
                  <Pipe />
                </div>
              </div>
              <div className='md:pl-2 xs:hidden lg:block'>
                <Text.SM
                  children='apple@mail.com'
                  className='flex-1 max-w-full underline font-semibold text-dark'
                />
              </div>
              <div className='pl-2 lg:ml-auto'>
                <Text.XS children={'13:30'} className='font-semibold text-dark' />
              </div>
            </div>
            <div className='flex pt-1 xs:block lg:hidden'>
              <Text.SM
                children='apple@mail.com'
                className='flex-1 max-w-full underline font-semibold text-dark'
              />
            </div>
            <div className='pt-2' />
            <div className='w-full'>
              <Text.SM className='text-dark-alpha font-medium'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              </Text.SM>
            </div>
            <div className='pt-8' />
            <Text.SM className='text-dark-alpha font-medium'>Best Regards</Text.SM>
            <div className='pt-2' />
            <Text.SM className='text-dark-alpha font-semibold'>John Smith</Text.SM>
            <div className='pt-2' />
            <Text.SM className='text-dark-alpha font-semibold'>Tel. (+568) 8789565</Text.SM>
          </div>
        </div>
        <div className='pt-7' />
        <div className='grid xs:grid-cols-1 lg:grid-cols-2 gap-5 px-5 pb-4'>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-5'>
            <div>
              <Button.Secondary
                children={t('forward')}
                className=' md:px-8 lg:px-12 py-3 md:text-sm lg:text-base w-full'
              />
            </div>
            <div>
              <Button.Secondary
                children={t('reply')}
                className=' md:px-8 lg:px-12 py-3 md:text-sm lg:text-base w-full'
              />
            </div>
          </div>
          <div className='md:w-8/12 lg:w-10/12 xl:w-8/12'>
            <Button.Primary
              onClick={openCooperationFinderModal}
              children={t('cooperation_finder')}
              className=' md:px-8 lg:px-12 py-3 md:text-sm lg:text-base w-full'
            />
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
};

export default Email;
