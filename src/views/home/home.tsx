import React from "react";
import { Button } from 'primereact/button';
import { Link } from "react-router-dom";

class Home extends React.Component{
    

    render(){
        return (

        <div className="centralCard">
            <div>
                <h1 style={{fontSize:"3em", color:"white", textAlign:"center"}} >Welcome in Satellite</h1>
                <Link to="/app">
                    <Button label="Proceed" className="p-button-raised " />
                </Link>
            </div>
        </div>
      
      );
    }

}

export default Home;