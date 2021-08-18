import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { convert, common } from 'utils';
import { ResultDownload } from 'components';
import Form from './Form';

const onSubmit = ({ request, data }) => {
  const emails = convert.csvToArray({ csv: data.emails });
  request({ emails });
};

const onFileUpload = ({ file, setError, setValue, t }) => {
  const isExtValid = common.checkExtension({ fileName: file.name });
  if (isExtValid) {
    convert.sheetToArray({
      file,
      cb: (values) => setValue('emails', values, { shoudValidate: true }),
    });
  } else {
    setError('file', { type: 'manual', message: t('wrong_extension_msg') });
  }
};

const Bulk = ({ request, resetData, loaded, loading, failed, data }) => {
  // hooks
  const downloadButtonRef = useRef(null);
  const { t } = useTranslation();
  // reset data on unmount
  useEffect(() => {
    return () => resetData();
  }, [resetData]);

  // scroll to download button after request load
  useEffect(() => {
    loaded &&
      downloadButtonRef.current &&
      downloadButtonRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [loaded]);

  return (
    <div className='flex flex-col'>
      <div className='pt-8' />
      <Form
        t={t}
        data={data}
        loaded={loaded}
        failed={failed}
        loading={loading}
        resetData={resetData}
        onFileUpload={onFileUpload}
        onSubmit={(data) => onSubmit({ data, request })}
      />

      {loaded && data ? (
        <ResultDownload
          t={t}
          data={data}
          ref={downloadButtonRef}
          onDownload={() => convert.arrayToSheet({ array: data, t })}
        />
      ) : null}
    </div>
  );
};

export default Bulk;
