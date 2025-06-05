// import React from "react";
// import User from "./User";
// import UserClass from "./UserClass";
// const About = () => {
//   return (
//     <>
//       <h1>About Page</h1>
//       <User name={"Kashi"} location={"Banaras"}></User>
//       <UserClass name={"Kridha"} location={"Bhopal"}></UserClass>
//     </>
//   );
// };

// export default About;

import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor called :");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount : ");
  }
  render() {
    console.log("Parent Render Method get called : ");
    return (
      <>
        <h1>About Page </h1>
        {/* <User name={"Kashi"} location={"Banaras"}></User> */}
        {/* <UserClass name={"First"} location={"Bhopal"}></UserClass>
        <UserClass name={"Second"} location={"Banaras"}></UserClass> */}
        <UserClass></UserClass>
      </>
    );
  }
}

export default About;
