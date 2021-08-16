import { Menu } from 'primereact/menu';
import React, { useRef, useState } from "react";
import { LABELS } from "../../constants";
import { useWallet } from "../../contexts/wallet";
import { MenuItem } from '../../models/app/menuitem';
import { Button } from 'primereact/button';


export const ConnectButton = () => {
  const { connected, connect, select, provider } = useWallet();

  const menuRef = useRef<Menu>(null);

  let [selected, setSelected] = useState("");

  const walletMenuItems: MenuItem[] = [
    {label:"Sollet", icon:"pi sollet-icon", index: 0, url: '', command:()=>{ changeWallet("Sollet"); }},
    {label:"Solong", icon:"pi solong-icon", index: 1, url: '', command:()=>{changeWallet("Solong"); }},
    {label:"Solflare", icon:"pi solflare-icon", index: 2, url: '', command:()=>{changeWallet("Solflare");  }}
  ];


  const changeWallet = (selected: string)=>{
    setSelected(selected);
    select();
  }

  // only show if wallet not selected and user not connected, otherwise tries to connect

  if (selected == "") {
    return (
        <span>
            <Button label={LABELS.CHOOSE_WALLET_LBL} onClick={(event) => {
                    if(null !== menuRef && menuRef.current){
                        menuRef.current.toggle(event);
                    }
                }
            } />
            <span id="walletList">
                <Menu model={walletMenuItems} popup ref={menuRef} id="wallet_menu" />
            </span>
        </span>
    );
  }

  if(selected != "" && !connected && !provider){
    return (
        <Button label={LABELS.CONNECT_BUTTON} onClick={(event) => {
            connect();
        }
    } />
    );
  }

  return (
      <span>
          <p>{LABELS.CONNECTED_LABEL}</p>{selected}
          <Button label={LABELS.CHANGE_WALLET_BTN} />
      </span>
  );
};
