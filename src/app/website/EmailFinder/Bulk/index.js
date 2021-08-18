import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { convert, common } from 'utils';
import { ResultDownload } from 'components';
import Form from './Form';

const onSubmit = ({ data, setLoaded }) => {
  const domains = convert.csvToArray({ csv: data.domains });
  setLoaded(true);
  console.log({ ...data, domains });
  // request({ domains });
};

const onFileUpload = ({ file, setError, setValue, t }) => {
  const isExtValid = common.checkExtension({ fileName: file.name });
  if (isExtValid) {
    convert.sheetToArray({
      file,
      cb: (values) => setValue('domains', values, { shoudValidate: true }),
    });
  } else {
    setError('file', { type: 'manual', message: t('wrong_extension_msg') });
  }
};

// loaded
const Bulk = ({ request, resetData, loading, failed, data }) => {
  const [loaded, setLoaded] = useState(false);
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
      <div className='pt-1' />
      <Form
        t={t}
        data={data}
        loaded={loaded}
        failed={failed}
        loading={loading}
        resetData={resetData}
        onFileUpload={onFileUpload}
        onSubmit={(data) => onSubmit({ data, request, setLoaded })}
      />

      {loaded ? (
        <ResultDownload
          t={t}
          data={[1, 3, 4]}
          ref={downloadButtonRef}
          onDownload={() => convert.arrayToSheet({ array: data, t })}
        />
      ) : null}
    </div>
  );
};

export default Bulk;
