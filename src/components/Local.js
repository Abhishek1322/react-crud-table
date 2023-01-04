//Arrow function version
import React, { useState } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai';
import { AiOutlineArrowDown } from 'react-icons/ai';

const UpDownTask = props => {
    const [array, setArray] = useState([
        { title: "title 1" },
        { title: "title 2" },
        { title: "title 3" },
        { title: "title 4" },
        { title: "title 5" },

    ]);
    const reorderArray = (event, originalArray) => {
        const movedItem = originalArray.find((item, index) => index === event.oldIndex);
        const remainingItems = originalArray.filter((item, index) => index !== event.oldIndex);

        const reorderedItems = [
            ...remainingItems.slice(0, event.newIndex),
            movedItem,
            ...remainingItems.slice(event.newIndex)
        ];

        return reorderedItems;
    }

    function changeOrder(index, direction) {
        setArray(reorderArray({ oldIndex: index, newIndex: index + (direction === "UP" ? (-5) : 1) }, array));
        console.log(index, direction)
    }

    return (
        <div>
            <table>

                <tr>
                    <th>Title</th>
                    <th>Order</th>
                </tr>
                {
                    array.map((item, index) => {
                        return (
                            <div key={item.title}>
                                <td>{item.title}</td>
                                <button onClick={() => changeOrder(index, "UP")}><AiOutlineArrowUp /></button>
                                <button onClick={() => changeOrder(index, "DOWN")}><AiOutlineArrowDown /></button>
                            </div>
                        )
                    })
                }
            </table>
        </div>
    );
}
export default UpDownTask