import React from "react";
import List from "./List";
import Form from "./form";
import { Card, CardBody, CardTitle } from "reactstrap";
import { toast } from "react-toastify";

class Container extends React.Component {
  /* 
  before adding cycle life methodj
  constructor() {
    super();
    this.state = {
      items: [{ id: 1, name: "Jean" }, { id: 2, name: "Laurent" }],
      currentId: 2
    };
  } */

  /* add cycle life method + toaster*/
  state = {
    items: [{ id: 1, name: "Jean" }, { id: 2, name: "Laurent" }],
    currentId: 2
  };

  // Déclenché dès qu'one prop ou le state change
  componentDidUpdate(prevProps, prevState) {
    if (prevState.items.length !== this.state.items.length) {
      toast.success("Update done !");
    }
  }
  /* **** */

  addItem = name => {
    const newId = this.state.currentId + 1;
    this.setState({
      items: [...this.state.items, { name, id: newId }],
      currentId: newId
    });
  };

  deleteItem = id => {
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    });
  };
  render() {
    return (
      <div className="container">
        <Card>
          <CardBody>
            <CardTitle>My items</CardTitle>
            <Form addItem={this.addItem} />
            <br />
            <List items={this.state.items} deleteItem={this.deleteItem} />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Container;
