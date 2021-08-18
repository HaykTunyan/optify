import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Form from './Form';

const onSubmit = ({ request, data }) => {
  const { email } = data;
  request({ emails: [email] });
};

const Single = ({ request, resetData, loaded, loading, failed, data }) => {
  const { t } = useTranslation();

  // reset data on unmount
  useEffect(() => {
    return () => resetData();
  }, [resetData]);

  return (
    <div className='flex flex-col xs:w-full md:w-600'>
      <Form
        t={t}
        data={data}
        loaded={loaded}
        failed={failed}
        loading={loading}
        onSubmit={(data) => onSubmit({ data, request })}
        resetData={resetData}
      />
    </div>
  );
};

export default Single;
