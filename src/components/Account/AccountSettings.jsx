import React, { useState } from 'react'
import { Sidebar } from './AccountSettings/Sidebar';
import { Dashboard } from './AccountSettings/TabPanels/Dashboard';
import { EditProfile } from './AccountSettings/TabPanels/EditProfile';

export const AccountSettings = () => {

    const [activeTab, setActiveTab] = useState(0)

    return (
        <div className="ac_settings_container grid md:grid-cols-4 grid-cols-5 rounded-r h-full">
            <div className="ac_settings_sidebar md:col-span-1 col-span-2 bg-stone-700 text-white rounded-l overflow-hidden h-full">
                <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className="ac_settings_content md:col-span-3 col-span-3 md:py-5 md:px-10 p-3 border rounded-r">
                {
                    activeTab === 0 ?
                    <Dashboard />
                    :
                    activeTab === 1 ?
                    <EditProfile />
                    :
                    null
                }
            </div>
        </div>
    )
}
