import React, { useState, useEffect } from 'react';
const Authentication = () => {
  const [isLoginLoaded, setLoginLoaded] = useState(false);
  useEffect(() => {
    import("auth/mountLogin").then((mountLogin) => {
      mountLogin.default("#header");
      setLoginLoaded(true);
    });
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <>
      {isLoginLoaded ? (
        // Render your login component here
        <></>
      ) : (
        // Render a loading spinner or any loading indicator
        <div className="spinner">
          Loading...
        </div>
      )}
    </>
  )
}

export default Authentication