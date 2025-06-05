import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Kinisha",
        location: "India",
      },
    };

    console.log("Child Constructor called : ");
  }

  async componentDidMount() {
    console.log("Child Component Did Mount : ");
    const data = await fetch("https://api.github.com/users/akshaymarch7");

    const jsonData = await data.json();

    console.log(jsonData, "Data");
    this.setState({
      userInfo: jsonData,
    });

    this.timer = setInterval(() => {
      console.log("Timer started ");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Component Did Update called");
  }

  componentWillUnmount() {
    console.log("Component will unmount called : ");
    clearInterval(this.timer);
  }

  render() {
    console.log("Child Render called : ");
    const { name, location } = this.state.userInfo;
    return (
      <>
        <div className="user-card">
          <p>Name(Class) : {name}</p>
          <p>Location(Class) : {location}</p>
        </div>
      </>
    );
  }
}

export default UserClass;
