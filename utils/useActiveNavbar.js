import { useState } from 'react';

function useActiveNavBar() {
  const [activeTab, setActiveTab] = useState("home");

  // Function to set the active navigation item
  const setActiveNavItem = (item) => {
    setActiveTab(item);
  };

  return [activeTab, setActiveNavItem];
}

export default useActiveNavBar;
