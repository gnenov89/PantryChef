import React,{ Component} from 'react';
import Image from 'react-image-resizer';
import {Table} from "react-materialize"
import SearchBar from "./SearchBar"


class IconContainer extends Component {
  render() {
 
    return (
      <div>
          <SearchBar />
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