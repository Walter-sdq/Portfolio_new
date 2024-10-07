import { useState, useEffect } from 'react';

function useNetworkStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Update network status when the connection changes
    const updateNetworkStatus = () => {
      setIsOnline(navigator.onLine);
    };

    // Add event listeners for online and offline events
    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);

    // Cleanup the event listeners on component unmount
    return () => {
      window.removeEventListener('online', updateNetworkStatus);
      window.removeEventListener('offline', updateNetworkStatus);
    };
  }, []);

  return isOnline;
}
export default useNetworkStatus