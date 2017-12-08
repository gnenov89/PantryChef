import React,{ Component, img} from 'react';
import Image from 'react-image-resizer';
import {Table, Container} from "react-materialize"
import "./SearchByIngredient.css"



class IconContainer extends Component {
  

  render() {
 
    return (
      <div>
          <Container>
          <Table>
              <tbody>
                    <tr>
                        <td>
                        <img
                            src={require("./Images/apple.png")}
                            title="apple"
                            onClick={this.props.handleClick}
                            onClickCapture={this.props.handleIngredientAdded}
                            />
                        </td>
                        <td>
                        <img
                            src={require("./Images/asparagus.png")}
                            title="asparagus"
                            onClick={this.props.handleClick}
                            />
                        </td>
                        <td>
                        <img
                            src={require("./Images/banana.png")}
                            title="banana"
                            onClick={this.props.handleClick}
                            />
                        </td>
                        <td>
                        <img
                            src={require("./Images/beer.png")}
                            title="beer"
                            onClick={this.props.handleClick}
                            />
                        </td>
                        <td>
                        <img
                            src={require("./Images/bread.png")}
                            title="bread"
                            onClick={this.props.handleClick}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <img
                            src={require("./Images/broccoli.png")}
                            title="broccoli"
                            onClick={this.props.handleClick}
                            />
                        </td>
                        <td>
                        <img
                            src={require("./Images/burger.png")}
                            title="burger"
                            onClick={this.props.handleClick}
                            />
                        </td>
                        <td>
                        <img
                            src={require("./Images/carrot.png")}
                            title="carrot"
                            onClick={this.props.handleClick}
                            />
                        </td>
                        <td>
                        <img
                            src={require("./Images/cheese.png")}
                            title="cheese"
                            onClick={this.props.handleClick}
                            />
                        </td>
                        <td>
                        <img
                            src={require("./Images/cherry.png")}
                            title="cherry"
                            onClick={this.props.handleClick}
                            />
                        </td>
                    </tr>
                </tbody>
            </Table>
           </Container>
      </div>
    )
  }
}

export default IconContainer;