import React from 'react';

const EnvTest = () => {
  return (
    <div style={{ padding: '20px', background: '#f0f0f0', margin: '20px' }}>
      <h3>Environment Variables Test</h3>
      <p>Service ID: {process.env.REACT_APP_EMAILJS_SERVICE_ID || 'NOT LOADED'}</p>
      <p>Template ID: {process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'NOT LOADED'}</p>
      <p>Public Key: {process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'NOT LOADED'}</p>
    </div>
  );
};

export default EnvTest;