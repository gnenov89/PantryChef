import React,{ Component} from 'react';
import API from "../../API/index";
import Image from 'react-image-resizer';
import {Col, Row, Container, Table} from "react-materialize"
import ThreeIngredientBoxes from "./ThreeIngredientBoxes"

class IconContainer extends Component {
  // eslint-disable-next-line
  constructor(...args){
    super(...args);
    this.state = {
      recipes :[],
      open: true,
      query: ""
    }
  }

  componentDidMount() {
    API.searchRecipes(this.state.query)
      .then(res => this.setState({ recipes: res.data.matches }));
  }
    // eslint-disable-next-line
  render() {
    console.log(this.state.recipes)
      // eslint-disable-next-line
    const{recipes} = this.state;
      
    return (
      <div>
          <ThreeIngredientBoxes />
        <Table>
            <tbody>
                <tr>
                    <td>
                        <Image
                            src={require("./Images/apple.png")}
                            alt="apple"
                            height={60}
                            width={70}
                        />
                    </td>
                    <td>
                        <Image
                            src={require("./Images/asparagus.png")}
                            alt="apple"
                            height={60}
                            width={70}
                        />
                    </td>
                     <td>
                        <Image
                            src={require("./Images/banana.png")}
                            alt="apple"
                            height={60}
                            width={70}
                        />
                    </td>
                    <td>
                        <Image
                            src={require("./Images/beer.png")}
                            alt="apple"
                            height={60}
                            width={70}
                        />
                    </td>
                    <td>
                        <Image
                            src={require("./Images/bread.png")}
                            alt="apple"
                            height={60}
                            width={70}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Image
                            src={require("./Images/broccoli.png")}
                            alt="apple"
                            height={60}
                            width={70}
                        />
                    </td>
                    <td>
                        <Image
                            src={require("./Images/burger.png")}
                            alt="apple"
                            height={60}
                            width={70}
                        />
                    </td>
                    <td>
                        <Image
                            src={require("./Images/carrot.png")}
                            alt="apple"
                            height={60}
                            width={70}
                        />
                    </td>
                    <td>
                        <Image
                            src={require("./Images/cheese.png")}
                            alt="apple"
                            height={60}
                            width={70}
                        />
                    </td>
                    <td>
                        <Image
                            src={require("./Images/cherry.png")}
                            alt="apple"
                            height={60}
                            width={70}
                        />
                    </td>
            </tr>
            </tbody>
        </Table>
           
            
      </div>
    )
  }
}

export default IconContainer;