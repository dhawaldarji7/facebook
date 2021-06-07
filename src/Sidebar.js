import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow.js';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StoreFrontIcon from '@material-ui/icons/Storefront';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow 
                src='https://pbs.twimg.com/profile_images/1277836005983354880/9wL5Jc2l_400x400.jpg' 
                title='Dhawal Darji'
            />

            <SidebarRow 
                Icon={LocalHospitalIcon}
                title="Covid-19 Information Center"
            />

            <SidebarRow
                Icon={EmojiFlagsIcon} title="Pages"
            />
            <SidebarRow
                Icon={PeopleIcon} title="Friend"
            />
            <SidebarRow
                Icon={ChatIcon} title="Messenger"
            />
            <SidebarRow
                Icon={StoreFrontIcon} title="Marketplace"
            />
            
            
        </div>
    )
}

export default Sidebar
