//Arrow function version
import React, { useState } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai';
import { AiOutlineArrowDown } from 'react-icons/ai';

const UpDownTask = props => {
    // const [array, setArray] = useState([
    //     { title: "title 1" },
    //     { title: "title 2" },
    //     { title: "title 3" },
    //     { title: "title 4" },
    //     { title: "title 5" },

    // ]);
    const [array, setArray] = useState([{ service: "" }]);
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setArray([...array, { service: "" }]);
        setCount(count + 1);
        console.log(array);
        console.log(count);
    };

    const handleServiceChnge = (e, index) => {
        const { name, value } = e.target;
        const list = [...array];
        list[index][name] = value;
        setArray(list);
    };


    const reorderArray = (event, originalArray) => {
        const movedItem = originalArray.find((elem, index) => index === event.oldIndex);
        const remainingItems = originalArray.filter((elme, index) => index !== event.oldIndex);

        const reorderedItems = [
            ...remainingItems.slice(0, event.newIndex),
            movedItem,
            ...remainingItems.slice(event.newIndex)
        ];

        return reorderedItems;
    }

    function changeOrder(index, direction) {
        setArray(reorderArray({ oldIndex: index, newIndex: index + (direction === "UP" ? (-1) : 1) }, array));
        console.log(index, direction)
    }

    return (
        <div>
            <table>

                <tr>
                    <th>Title</th>
                    <th>Order</th>
                </tr>
                {array.map((elem, index) => {
                    return (
                        <div key={index} className="services">
                            <div className="Stage1">
                                <label>
                                    <h2>Stage {index + 1}</h2>
                                </label>
                                <input
                                    className="ApprovalNameInput w-393"
                                    onChange={(e) => handleServiceChnge(e, index)}
                                    type="text"
                                    value={elem.service}
                                    name="service"
                                    placeholder="Workflow stage name"
                                />
                            </div>
                            <button onClick={handleAdd} type="button">
                                add div
                            </button>

                            <td>{elem.service}</td>
                            <button onClick={() => changeOrder(index, "UP")}><AiOutlineArrowUp /></button>
                            <button onClick={() => changeOrder(index, "DOWN")}><AiOutlineArrowDown /></button>

                        </div>

                    );
                })}
            </table>
        </div>
    );
}
export default UpDownTask