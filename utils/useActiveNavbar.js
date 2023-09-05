import { useState, useEffect } from 'react';

function useActiveNavBar() {
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem('activeNavItem') || null
  );

  const setActiveNavItem = (item) => {
    localStorage.setItem('activeNavItem', item);
    setActiveTab(item);
  };

  useEffect(() => {
    const storedItem = localStorage.getItem('activeNavItem');
    if (storedItem) {
      setActiveTab(storedItem);
    }
  }, []);

  return [activeTab, setActiveNavItem];
}

export default useActiveNavBar;
