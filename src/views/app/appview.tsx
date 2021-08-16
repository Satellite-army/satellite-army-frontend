import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { TieredMenu } from 'primereact/tieredmenu'
import { MenuItem } from "../../models/app/menuitem";
import { useHistory } from "react-router-dom";
import { Icon } from "../../assets";
export const AppView = (props: any)=>{
    const history = useHistory();
    const [visibleMobile, setVisibleMobile] = useState(false);

    const sideMenuItems: MenuItem[] = [
        {label:"dashboard", icon:"pi pi-home", index: 0, url: 'localhost:3000/app', command:()=>{ history.push("/app"); }},
        {label:"wallet", icon:"pi pi-wallet", index: 1, url: 'localhost:3000/wallet', command:()=>{ history.push("/app/wallet"); }},
        {label:"farming", icon:"pi pi-money-bill", index: 2, url: 'localhost:3000/farming', command:()=>{ history.push("/app/farming"); }},
        {label:"", icon:"", index: 99, url: 'localhost:3000/app', command:()=>{ history.push("/app"); }},
        {label:"docs", icon:"pi pi-paperclip", index: 4, url: 'http://satellite-army-book.s3-website-eu-west-1.amazonaws.com/', command:()=>{ history.push("/app"); }},
        {label:"twitter", icon:"pi pi-twitter", index: 5, url: 'https://twitter.com/ArmySatellite', command:()=>{ history.push("/app"); }},
        {label:"discord", icon:"pi pi-discord", index: 6, url: 'https://discord.com/invite/tdX3kqEe', command:()=>{ history.push("/app"); }},
        {label:"telegram bot", icon:"pi pi-send", index: 7, url: 'https://telegram.me/satelliteArmyBot', command:()=>{ history.push("/app"); }},
        {label:"github", icon:"pi pi-github", index: 8, url: 'https://github.com/Satellite-army/satellite-army-frontend', command:()=>{ history.push("/app"); }}

    ];

    return (
        <div>
            <div className="headerBar">
                <Button icon="pi pi-align-justify" id="sidebar_show_mobile" onClick={() => setVisibleMobile(true)} className="p-button-raised p-button-text" />
            </div>
            <div className="appBody">
                    <div className="sidebar">
                        <Sidebar  visible={visibleMobile} dismissable={true} className="p-sidebar-sm" id="sidebar_menu_mobile" onHide={() => setVisibleMobile(false)}>
                            <img className="menuIcon" src={Icon} /><br/><h3 className="menuTitle">Satellite</h3>
                            <TieredMenu style={{width:"100%", border:"0px"}} model={sideMenuItems}  />
                        </Sidebar>
                        <Sidebar  baseZIndex={0} showCloseIcon={false} visible={true} dismissable={false} id="sidebar_menu" className="p-sidebar-sm" onHide={() => {}}>
                        <img className="menuIcon" src={Icon} /><br/><h3 className="menuTitle">Satellite</h3>
                            <TieredMenu style={{width:"100%", border:"0px"}} model={sideMenuItems}  />
                        </Sidebar>
                    </div>
                    <div className="content">
                        
                        {props.content}
                        
                    </div>
            </div>
        </div>
    );

}