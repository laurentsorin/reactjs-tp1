import React from "react";
import PropTypes from "prop-types";
import { Button, Table } from "reactstrap";

class List extends React.Component {
  /* constructor(props){
    super(props);
    // Nécessaire en méthode de classe pour utiliser this
    this.deleteItem = this.deleteItem.bind(this);
  } */

  // Méthode de classe
  /* deleteItem(id) {
    this.props.deleteItem(id);
  } */

  // Champs de classe (expérimentale) => this est déjà lié
  deleteItem = id => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props;
    return (
      <Table>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td className="col-01">
                <b>{item.id}</b>
              </td>
              <td className="col-10">{item.name}</td>
              {/* 
            <td><button onClick={this.deleteItem.bind(this, item.id)}>x</button></td> 
            */}
              <td className="col-1">
                <Button color="danger" onClick={() => this.deleteItem(item.id)}>
                  x
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default List;

List.propTypes = {
  items: PropTypes.array
};
