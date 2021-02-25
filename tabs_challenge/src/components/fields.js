import React from 'react';

const CreateFields = (props) => {
    const { allTabs, currentTabIndex } = props;

    return (
        <div className="results">
            { allTabs[currentTabIndex].content }
        </div>
    )
}

export default CreateFields;