import React, { useState } from "react";

const UpDown = () => {
        const [serviceList, setServiceList] = useState([{ service: "" }]);
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setServiceList([...serviceList, { service: "" }]);
        setCount(count + 1);
        console.log(serviceList);
        console.log(count);
    };

    const handleServiceChnge = (e, index) => {
        const { name, value } = e.target;
        const list = [...serviceList];
        list[index][name] = value;
        setServiceList(list);
    };

    return (
        <>
            <div className="main-task">
                {serviceList.map((elem, index) => {
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
                            
                        </div>
                       
                    );
                })}
            </div>
        </>
    );
};

export default UpDown