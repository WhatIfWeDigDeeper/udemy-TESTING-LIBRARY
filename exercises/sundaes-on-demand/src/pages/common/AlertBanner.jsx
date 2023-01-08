import Alert from 'react-bootstrap/Alert';

export function AlertBanner({ message, variant='danger' }) {
  const alertMessage = message || 'An unexpected error occurred. Please try again later.';
  return (
    <Alert variant={variant} style={{ backgroundColor: 'red'}}>
      {alertMessage}
    </Alert>
  );
}
