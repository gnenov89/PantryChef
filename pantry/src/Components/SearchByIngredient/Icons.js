import React,{ Component, img} from 'react';

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
                        <img className="apple"
                            src={require("./Images/apple.png")}
                            alt="apple"
                            onClick={this.props.handleClick}
                            onClickCapture={this.props.handleIngredientAdded}
                            />
                        </td>
                        <td>
                        <img
                            src={require("./Images/asparagus.png")}
                            alt="asparagus"
                            onClick={this.props.handleClick}
                            />
                        </td>
                        <td>
                        <img
                            src={require("./Images/banana.png")}
                            alt="banana"
                            onClick={this.props.handleClick}
                            />
                        </td>
                        <td>
                        <img
                            src={require("./Images/beer.png")}
                            alt="beer"
                            onClick={this.props.handleClick}
                            />
                        </td>
                        <td>
                        <img
                            src={require("./Images/bread.png")}
                            alt="bread"
                            onClick={this.props.handleClick}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <img
                            src={require("./Images/broccoli.png")}
                            alt="broccoli"
                            onClick={this.props.handleClick}
                            />
                        </td>
                        <td>
                        <img
                            src={require("./Images/burger.png")}
                            alt="burger"
                            onClick={this.props.handleClick}
                            />
                        </td>
                        <td>
                        <img
                            src={require("./Images/carrot.png")}
                            alt="carrot"
                            onClick={this.props.handleClick}
                            />
                        </td>
                        <td>
                        <img
                            src={require("./Images/cheese.png")}
                            alt="cheese"
                            onClick={this.props.handleClick}
                            />
                        </td>
                        <td>
                        <img
                            src={require("./Images/cherry.png")}
                            alt="cherry"
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