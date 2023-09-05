// import { useState } from 'react';

// function useActiveNavBar() {
//   const [activeTab, setActiveTab] = useState("home");

//   // Function to set the active navigation item
//   const setActiveNavItem = (item) => {
//     setActiveTab(item);
//   };

//   return [activeTab, setActiveNavItem];
// }

// export default useActiveNavBar;


import { useState, useEffect } from 'react';

function useActiveNavBar() {
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem('activeNavItem') || null
  );

  // Function to set the active navigation item
  const setActiveNavItem = (item) => {
    localStorage.setItem('activeNavItem', item);
    setActiveTab(item);
  };

  useEffect(() => {
    // Load the active navigation item from localStorage on component mount
    const storedItem = localStorage.getItem('activeNavItem');
    if (storedItem) {
      setActiveTab(storedItem);
    }
  }, []);

  return [activeTab, setActiveNavItem];
}

export default useActiveNavBar;
