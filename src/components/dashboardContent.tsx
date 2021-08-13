import React from 'react';
import { Splitter, SplitterPanel } from 'primereact/splitter';

export const DashboardContent = (props: any)=>{

    const worth:number = 0;
    const lp:number = 0;
    const staked:number = 0;
    const fees:number = 0;

    
        return (

          <Splitter style={{height: '300px'}}>
            <SplitterPanel>
                <h6>Net worth</h6>
                <p>${worth}</p>
            </SplitterPanel>
            <SplitterPanel>
                <h6>Total LP tokens value</h6>
                <p>${lp}</p>
            </SplitterPanel>
            <SplitterPanel>
                <h6>Total staked </h6>
                <p>${staked}</p>
            </SplitterPanel>
            <SplitterPanel>
                <h6>Total fees</h6>
                <p>${fees}</p>
            </SplitterPanel>
          </Splitter>
      
      );
    

}