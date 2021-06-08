import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow.js';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StoreFrontIcon from '@material-ui/icons/Storefront';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import { useStateValue } from './StateProvider';

function Sidebar() {

    const [ {user} , dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow 
                src={user.photoURL}
                title={user.displayName}
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
