import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Link } from "react-router-dom";
import { Sidebar } from 'primereact/sidebar';
import { TieredMenu } from 'primereact/tieredmenu'
import { MenuItem } from "../../models/app/menuitem";
import { Card } from 'primereact/card';

export const AppView = ()=>{

    const [visibleMobile, setVisibleMobile] = useState(true);

    const sideMenuItems: MenuItem[] = [
        {label:"dashboard", icon:"pi pi-home", index: 0},
        {label:"wallet", icon:"pi pi-wallet", index: 1},
        {label:"farming", icon:"pi pi-money-bill", index: 2},
        {label:"analyitics", icon:"pi pi-chart-line", index: 3},
        {label:"", icon:"", index: 99},
        {label:"docs", icon:"pi pi-paperclip", index: 4},
        {label:"twitter", icon:"pi pi-twitter", index: 5},
        {label:"discord", icon:"pi pi-discord", index: 6},
        {label:"telegram bot", icon:"pi pi-send", index: 7},
        {label:"github", icon:"pi pi-github", index: 8}

    ];

    return (
        <div>
            <div className="headerBar">
                <Button icon="pi pi-align-justify" id="sidebar_show_mobile" onClick={() => setVisibleMobile(true)} className="p-button-raised p-button-text" />
            </div>
            <div className="appBody">
                    <div className="sidebar">
                        <Sidebar  visible={visibleMobile} dismissable={true} className="p-sidebar-sm" id="sidebar_menu_mobile" onHide={() => setVisibleMobile(false)}>
                            <h3>Satellite</h3>
                            <TieredMenu style={{width:"100%", border:"0px"}} model={sideMenuItems}  />
                        </Sidebar>
                        <Sidebar  baseZIndex={0} showCloseIcon={false} visible={true} dismissable={false} id="sidebar_menu" className="p-sidebar-sm" onHide={() => {}}>
                            <h3>Satellite</h3>
                            <TieredMenu style={{width:"100%", border:"0px"}} model={sideMenuItems}  />
                        </Sidebar>
                    </div>
                    <div className="content">
                        
                            content
                        
                    </div>
            </div>
        </div>
    );

}