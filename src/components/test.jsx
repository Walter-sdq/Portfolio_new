// // import React, { useState } from 'react'

// // const LogicalNot = () => {

// //   //Using Inline Function and the The Logical Not (!) to toggle state
// //   const [toggle, setToggle] = useState(true)

// //   return (
// //     <>
// //       <button
// //             onClick={() => setToggle(!toggle)}
// //             class="btn btn-primary mb-5">
// //           Toggle State
// //       </button>
// //       {toggle && (
// //         <ul class="list-group">
// //           <li class="list-group-item">An item</li>
// //           <li class="list-group-item">A second item</li>
// //           <li class="list-group-item">A third item</li>
// //           <li class="list-group-item">A fourth item</li>
// //           <li class="list-group-item">And a fifth one</li>
// //         </ul>
// //       )}
// //     </>
// //   )
// // }
// // export default LogicalNot

// import { useState, useEffect } from 'react';

// // function ConnectStatus(connectd) {

// //   const [connect, setConnect] = useState(null);

// //   useEffect(() => {
// // const con = navigator.onLine?setConnect(`online`):``
// //   }, [connectd]);

// //   return (
// //     <div>
// //       <p>connect Level: {connect !== null ? `connection is ${connect}` : 'not connectde but Loading...'}</p>
// //     </div>
// //   );
// // }

// // export default ConnectStatus;

// function NetworkStatus() {
//   const [isOnline, setIsOnline] = useState(navigator.onLine);

// useEffect(() => {
//   // Update network status when the connection changes
//   const updateNetworkStatus = () => {
//     setIsOnline(navigator.onLine);
//   };

//   // Add event listeners for online and offline events
//   window.addEventListener('online', updateNetworkStatus);
//   window.addEventListener('offline', updateNetworkStatus);

//   // Cleanup the event listeners on component unmount
//   return () => {
//     window.removeEventListener('online', updateNetworkStatus);
//     window.removeEventListener('offline', updateNetworkStatus);
//   };
// }, []);

//   return (
//     <div>
//       <p>Network Status: {isOnline ? 'Online' : 'Offline'}</p>
//     </div>
//   );
// }

// export default NetworkStatus;
import { Document, Page } from "react-pdf";
import '@react-pdf-viewer/core'
import '@react-pdf-viewer/default-layout'

const Test = () => {
  return (
    <Document file='https://example.com/sample.pdf'>
      <Page />
    </Document>
  )

};

export default Test;
