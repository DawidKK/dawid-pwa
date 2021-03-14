import React, { useEffect } from 'react'
import { useMotion } from 'react-use'

const DevicePosition = props => {
  const state = useMotion();

  // useEffect(() => {
  //   if ( window.location.protocol != "https:" ) {
  //     window.location.href = "https:" + window.location.href.substring( window.location.protocol.length );
  //   }
  // }, [])

  // const onClick = () => {
  //     if ( typeof( DeviceMotionEvent ) !== "undefined" && typeof( DeviceMotionEvent.requestPermission ) === "function" ) {
  //         // (optional) Do something before API request prompt.
  //         DeviceMotionEvent.requestPermission()
  //             .then( response => {
  //             // (optional) Do something after API prompt dismissed.
  //             if ( response == "granted" ) {
  //                 window.addEventListener( "devicemotion", (e) => {
  //                     // do something for 'e' here.
  //                 })
  //             }
  //         })
  //             .catch( console.error )
  //     } else {
  //         alert( "DeviceMotionEvent is not defined" );
  //     }
  // }

  return (
    <>
      <pre>
        {JSON.stringify(state, null, 2)}
        dsdsds
      </pre>
      {/* <button onClick={onClick}>click</button> */}
    </>
  );
}

export default DevicePosition
