import React from 'react';
import { withTranslation } from 'react-i18next';

class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    const { t } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return (
        <div className='text-center w-screen mt-24'>
          <h1 className='text-5xl font-black'>{t('OOOPS...')}</h1>
        </div>
      );
    }
    
    return this.props.children;
  }
}

export default withTranslation()(ErrorBoundary);
