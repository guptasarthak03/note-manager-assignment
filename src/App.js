import React, { Component } from "react";
import "./App.css";
import Notes from "./Notes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        title: "",
        text: "", //********* */
        key: ""
      }
    };
    this.handleInput = this.handleInput.bind(this);
    // this.handleText = this.handleText.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        ...this.state.currentItem,
        [e.target.name]: e.target.value,
        key: Date.now()
      }
    });
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;

    //TESTING
    console.log(newItem);

    // if there is some text value, then
    if (newItem.title !== "") {
      const newItems = [...this.state.items, newItem];
      //setting state variables back to empty.
      this.setState({
        items: newItems,
        currentItem: {
          title: "",
          text: "",
          key: ""
        }
      });
    }
  }

  deleteItem(key) {
    const requiredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: requiredItems
    });
  }

  setUpdate(title, key) {
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        item.title = title;
      }
    });
    this.setState({
      items: items
    });
  }

  render() {
    return (
      <div className="notes-wrapper">
        <div className="note-header">
          <form id="note-form" onSubmit={this.addItem}>
            <input
              name="title"
              type="text"
              placeholder="Enter Title"
              value={this.state.currentItem.title}
              onChange={this.handleInput}
            />
            <textarea
              name="text"
              placeholder="Enter Your Text Here..."
              rows="3"
              cols="30"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <button type="submit">Add</button>
          </form>
        </div>
        <div className="notes">
          <Notes
            items={this.state.items}
            deleteItem={this.deleteItem}
            setUpdate={this.setUpdate}
          ></Notes>
        </div>
      </div>
    );
  }
}

export default App;
