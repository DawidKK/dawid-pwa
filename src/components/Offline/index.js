import React from 'react'
import { useNetworkState } from 'react-use';
import Alert from 'react-bootstrap/Alert'

const Offline = props => {
  const { online } = useNetworkState();

  return (
    <div>
      <Alert variant={online ? 'success' : 'danger'}>
        { online ? 'Your are online 🎉' : 'You are offline 🛑'}
      </Alert>
    </div>
  )
}

export default Offline
