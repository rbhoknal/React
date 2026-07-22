import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series</h2>

            <User name={"Rahul Saini"} location={"Dehradun"} contact={"rahulsaini87"} />

            <UserClass name={"Will Smith (Class)"} Location={"Manali (Class)"} contact={"will@smith56"} />
        </div>
    );
};

export default About;