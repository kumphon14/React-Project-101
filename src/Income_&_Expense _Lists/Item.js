// function used to manage income and expense lists
import PropTypes from 'prop-types';


const Item = (props) =>{ 
    //const {title, amount} = props // ให้ title,amount เป็น props 
    return(
        <li>{props.title} <span> {props.amount} </span></li> // {...} dynamic data // พารามิเตอร์ props
    );
}

Item.propTypes={
    title:PropTypes.string.isRequired, // isRequired บังคับให้ต้องกรอกค่าลงไปและ type ต้องถูกต้อง
    amount:PropTypes.number.isRequired
}

export default Item;