import React from "react";
import { Button, Col, Input, Row } from "reactstrap";

class Form extends React.Component {
  constructor() {
    super();
    this.addItem = this.addItem.bind(this);
    this.updateName = this.updateName.bind(this);
    this.state = { name: "" };
  }

  addItem(e) {
    this.props.addItem(this.state.name);
    this.setState({ name: "" });
  }

  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    const { name } = this.state;

    return (
      <Row>
        <Col sm={9}>
          {/* composant controlé */}
          <Input type="text" onChange={this.updateName} value={name} />
        </Col>
        <Col sm={3}>
          <Button
            onClick={this.addItem}
            disabled={name ? false : true}
            color="primary"
          >
            Add item{" "}
          </Button>
        </Col>
      </Row>
    );
  }
}

export default Form;
