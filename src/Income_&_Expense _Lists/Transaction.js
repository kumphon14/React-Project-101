import Item from "./Item";
import "./Transaction.css"
import { v4 as uuidv4 } from 'uuid';
 

const Transaction = () =>{
    const data = [
        {title:"ค่ารักษาพยาบาล", amount:2000},
        {title:"เงินเดือน", amount:50000},
        {title:"ค่าเดินทาง", amount :400},
        {title:"ค่าที่พัก", amount:8000},
        {title:"ค่าเน็ตมือถือ", amount:4000},
    ]

    return (
        //  สร้าง props ใน const Item = (props) =>{}
        <ul className="item-list">
            {data.map((element)=>{
                //return <Item title={element.title} amount={element.amount}/>
                 return <Item {...element} key = {uuidv4()}/> // ลดรูป // กำหนด key ให้ item แต่ละตัว
            })}
        </ul>

    );
}

export default Transaction;