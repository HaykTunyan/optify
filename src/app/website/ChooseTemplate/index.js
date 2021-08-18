import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from 'components';
import { useWindowResize } from 'hooks';
import { Container, Button, Text } from 'style-guide';
import Template from './Template';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import actions from 'store/actions';
import selectors from 'store/selectors';
import { MODALS, PATHS } from 'common';
import { Helmet } from 'react-helmet-async';

export const templateCard = [
  {
    id: 1,
    title: 'template 1',
    text: 'lorem',
  },
  {
    id: 2,
    title: 'template 2',
    text: 'lorem',
  },
];

const ChooseTemplate = () => {
  // hooks
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();
  const { isMobile } = useWindowResize();
  // actions
  const openUnsubscirbersListModal = () =>
    dispatch(actions.ui.openModal({ type: MODALS.UNSUBSCRIBERS_LIST }));
  const openCreateTemplateModal = () =>
    dispatch(actions.ui.openModal({ type: MODALS.CREATE_NEW_TEMPLATE }));
  const selectTemplate = (payload) => dispatch(actions.ui.selectTemplate(payload));
  const deselectTemplate = () => dispatch(actions.ui.deselectTemplate());
  //selectors
  const { customTemplateData, selectedTemplate } = useSelector(selectors.ui);

  return (
    <Fragment>
      <Helmet>
        <title>{`${t('template')} | ${t('brand_name')}`}</title>
      </Helmet>
      <Container.BaseShadow className='xs:pt-6 xs:pb-6 lg:pt-6 lg:pb-10 xl:pb-8 md:px-5 lg:px-8'>
        <SectionTitle
          titleText={t('choose_template')}
          buttonText={t('unsubscribers_list')}
          onButtonClick={openUnsubscirbersListModal}
        />
        <div className='xs:grid lg:grid-flow-col xs:grid-flow-row lg:grid-cols-3 xs:gap-8 lg:gap-8 pt-8'>
          {templateCard.map((item) => (
            <Template
              t={t}
              key={item.id}
              title={item.title}
              selected={item.id === selectedTemplate}
              onSelect={() => selectTemplate(item.id)}
              onCancel={() => deselectTemplate()}
              content={
                <Text.MD
                  className='text-lightGray'
                  children={`${t(`lorem`)}${t(`lorem`)}${t(`lorem`)}`}
                />
              }
            />
          ))}

          <Template
            t={t}
            title={customTemplateData ? customTemplateData.name : 'template 3'}
            selected={selectedTemplate === 3}
            onSelect={customTemplateData ? () => selectTemplate(3) : null}
            onCancel={customTemplateData ? () => deselectTemplate() : null}
            content={
              customTemplateData ? (
                <div className='text-center flex flex-col items-center justify-center h-full'>
                  <Text.XL_2 className='text-primary' children={customTemplateData.mainText} />
                  <div className='pt-5' />
                  <div className='flex justify-center items-center'>
                    <Button.Secondary
                      className='px-10 py-3 w-150 xs:text-base xs:font-semibold'
                      children={t(`edit`)}
                      onClick={openCreateTemplateModal}
                    />
                  </div>
                </div>
              ) : (
                <div className='text-center flex flex-col items-center justify-center h-full'>
                  <Text.XL_2 className='text-primary' children={t(`create_your`)} />
                  <Text.XL_2 className='text-primary' children={t(`template_style`)} />
                  <div className='pt-5' />
                  <div className='flex justify-center items-center'>
                    {isMobile ? (
                      <Button.Primary
                        className='px-10 py-3 w-150 xs:text-base xs:font-semibold'
                        children={t(`create`)}
                        onClick={() => history.push(PATHS.CREATE_NEW_TEMPLATE)}
                      />
                    ) : (
                      <Button.Primary
                        className='px-10 py-3 w-150 xs:text-base xs:font-semibold'
                        children={t(`create`)}
                        onClick={openCreateTemplateModal}
                      />
                    )}
                  </div>
                </div>
              )
            }
          />
        </div>
        <div className='pt-8' />
        <div className='flex justify-between'>
          <div className='xs:pt-5 md:pt-0'>
            <Button.Secondary
              className='text-dark text-base py-3 px-10 xs:w-auto'
              children={t('back')}
              onClick={ () => window.history.back() }
            />
          </div>
          {selectedTemplate ? (
            <div className='xs:pt-5 md:pt-0'>
              <Button.Primary
                className='text-light text-base py-3 px-10 xs:w-auto'
                children={t('next')}
                onClick={() => history.push(PATHS.TEST_EMAILS)}
              />
            </div>
          ) : null}
        </div>
      </Container.BaseShadow>
    </Fragment>
  );
};

export default ChooseTemplate;
