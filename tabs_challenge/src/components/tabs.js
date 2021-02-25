import React from 'react';

const Tabs = (props) => {
  const { allTabs, currentTabIndex, setCurrentTabIndex } = props;

  // conditionally styling the tabs with classes in CSS
  const tabStyle = (index) => {
    if (index === currentTabIndex) {
      return "selectedTab";
    } else {
      return "nonSelectedTab";
    }
  }

  const setSelectedTab = (index) => {
    setCurrentTabIndex(index);
  }

  // Using both inline style and css to demonstrate both usage syntax
    return (
        <div>
            {
                allTabs.map((item, index) => (
                <div onClick={(e) => setSelectedTab(index) }>
                    { item.label }
                </div>
                ))
            }
        </div>
    )
}

export default Tabs;