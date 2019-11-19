import React, { Component } from "react";
import next from "./assets/images/next.png";
import back from "./assets/images/back.png";
import View from "./components/View";
import image_1 from "./assets/images/images_1.jpg";
import image_2 from "./assets/images/images_2.jpg";
import image_3 from "./assets/images/images_3.jpg";
import image_4 from "./assets/images/images_4.jpg";

import "./App.css";
import List from "./components/List";

const catalog = [
  {
    image: image_1
  },
  {
    image: image_2
  },
  {
    image: image_3
  },
  {
    image: image_4
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copyCatalog: [...catalog],
      catalogView: catalog[0],
      catalogIndex: 0
    };
  }
  next() {
    console.log(this.state.catalogIndex);
    if (this.state.catalogIndex > catalog.length - 1) {
      this.setState({
        catalogIndex: 1,
        catalogView: catalog[0]
      });
    } else {
      this.setState({
        catalogIndex: this.state.catalogIndex + 1,
        catalogView: catalog[this.state.catalogIndex]
      });
    }
  }

  back() {}

  selectImage(event) {
    this.setState({
      catalogView: catalog[event],
      catalogIndex: event + 1
    });
    console.log(event);
  }

  render() {
    return (
      <div className="container">
        <div className="view_image">
          <View view={this.state.catalogView.image} />
        </div>
        <div className="list_images">
          <button onClick={() => this.back()}>
            <img src={back} alt="back_button" />
          </button>
          {catalog.map((item, event) => (
            <List item={item.image} select={() => this.selectImage(event)} />
          ))}
          <button onClick={() => this.next()}>
            <img src={next} alt="next_button" />
          </button>
        </div>
      </div>
    );
  }
}

App.propTypes = {};

export default App;
