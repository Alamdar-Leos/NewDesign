import React, { useState } from 'react';
//import './custom-bootstrap-tabs.css'; // Adjust the path accordingly

const WG3TestingTabs = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="container mt-4">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a
                        className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`}
                        onClick={() => handleTabClick('tab1')}
                        href="#"
                    >
                        Tab 1
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`}
                        onClick={() => handleTabClick('tab2')}
                        href="#"
                    >
                        Tab 2
                    </a>
                </li>
            </ul>
            <div className="tab-content mt-3">
                <div className={`tab-pane fade ${activeTab === 'tab1' ? 'show active' : ''}`}>
                    <h3>Content for Tab 1</h3>
                    <p>This is the content for Tab 1.</p>
                </div>
                <div className={`tab-pane fade ${activeTab === 'tab2' ? 'show active' : ''}`}>
                    <h3>Content for Tab 2</h3>
                    <p>This is the content for Tab 2.</p>
                </div>
            </div>
        </div>
    );
};

export default WG3TestingTabs;
