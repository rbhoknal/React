import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {

    constructor(props){
        super(props);
        
        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent Component Did Mount");
        //Api Call
    }

    render() {
        console.log("Parent Render");

        return (
            <div>
                <h1>About</h1>
                <h2>This is Namaste React Web Series</h2>

                <UserClass
                    name={"First"}
                    Location={"Manali (Class)"}
                    contact={"will@smith56"}
                />
                <UserClass
                    name={"Second"}
                    Location={"Dehradun (Class)"}
                    contact={"will@smith56"}
                />
                <UserClass
                    name={"Third"}
                    Location={"Shimla (Class)"}
                    contact={"will@smith56"}
                />
            </div>
        );
  }
}

export default About;
