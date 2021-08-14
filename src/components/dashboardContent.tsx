import React, { useEffect, useState } from 'react';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import axios from "axios";
import { DashBoardTotals } from '../models/app/totals';
import { convert } from "../utils/utils";
import {useLendingReserves } from "../hooks/useLendingReserves";
import { useUserAccounts } from "../hooks/useUserAccounts";
import { useMarkets } from "../contexts/market";
import { useConnectionConfig } from "../contexts/connection";

const fetchPriceFromCG = async (mint: any) => {
    let tokenlist = await axios.get(`solana.tokenlist.json`)
    let tokens = tokenlist.data.tokens
  
    let selectedToken
    for (let token of tokens) {
      if (token.address == mint) {
        selectedToken = token
        break;
      }
    }
  
    if (selectedToken != undefined && selectedToken.extensions.coingeckoId != undefined) {
      let response = await axios.get(`https://api.coingecko.com/api/v3/simple/price`, { params: { ids: selectedToken.extensions.coingeckoId, vs_currencies: "usd" } })
      let price = response.data[selectedToken.extensions.coingeckoId].usd
      return price
    } else {
      return 0
    }
  }


  
export const DashboardContent = (props: any)=>{

    const { reserveAccounts } = useLendingReserves();
    const { marketEmitter, midPriceInUSD } = useMarkets();
    const { userAccounts } = useUserAccounts();
    const { tokenMap } = useConnectionConfig();


    const [myTokens, setMyTokens] = useState<any[]>([]);

    const [totals, setTotals] = useState<DashBoardTotals>({
        networth: 0,
        totaldebt: 0,
        totaldeposit: 0,
        totalyield: 0
    });

    useEffect(() => {
        const refreshTotal = async () => {
          let newTotals: DashBoardTotals = {
            networth: 0,
            totaldeposit: 0,
            totaldebt: 0,
            totalyield: 0,
          };
    
          const myAsyncLoopFunction = async (userAccounts: any[]) => {
            const promises = userAccounts.map(async (account) => {
                const mint = typeof account.info.mint === "string" ? account.info.mint : account.info.mint?.toBase58()
                console.log({mint})
                const price = await fetchPriceFromCG(mint)
                newTotals.networth = newTotals.networth + (convert(account)/1000000000 * price);
            })
            await Promise.all(promises)
          }
    
          await myAsyncLoopFunction(userAccounts)
    
          setTotals(newTotals);
        };
    
        const dispose = marketEmitter.onMarket(() => {
          refreshTotal();
        });
    
        refreshTotal();
    
        return () => {
          dispose();
        };
      }, [marketEmitter, midPriceInUSD, setTotals, reserveAccounts, tokenMap, userAccounts]);
    
      const totalLp = (userAccounts[0] ? 169 : 0)
      const totalStaked = (userAccounts[0] ? 150 : 0)
      const totalFees = (userAccounts[0] ? 20 : 0)


    const worth:number = 0;

    
        return (

          <Splitter style={{height: '300px'}}>
            <SplitterPanel>
                <h6>Net worth</h6>
                <p>${worth}</p>
            </SplitterPanel>
            <SplitterPanel>
                <h6>Total LP tokens value</h6>
                <p>${totalLp}</p>
            </SplitterPanel>
            <SplitterPanel>
                <h6>Total staked </h6>
                <p>${totalStaked}</p>
            </SplitterPanel>
            <SplitterPanel>
                <h6>Total fees</h6>
                <p>${totalFees}</p>
            </SplitterPanel>
          </Splitter>
      
      );
    

}