// import React, { useContext } from 'react';
// import { AppContext } from '../context/AppContext';
// import { FaTimesCircle } from 'react-icons/fa';

// const ExpenseItem = (props) => {
// };

// export default ExpenseItem;


import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa'
import { FaMinusCircle } from 'react-icons/fa'

const ExpenseItem = (props) => {
    const { dispatch, Location} = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };


    return (
        <tr>
        <td>{props.name}</td>
        {/* <td>{props.unitprice}</td> */}
        {/* <td>{props.quantity}</td> */}
        {/* <td>{Location}{parseInt(props.unitprice)}</td> */}
        <td>{Location}{parseInt(props.unitprice)}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={handleDeleteItem}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={handleDeleteItem}></FaMinusCircle></td>
        </tr>
    );
};

export default ExpenseItem;
