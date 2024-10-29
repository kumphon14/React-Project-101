import {useState } from "react"
import "./FormComponent.css"

const FormComponent = () =>{

    const [title,setTitle] = useState('') // [ชื่อตัวแปร,เป็นฟังก์ชันตั้งค่าหรือเปลี่ยนค่าตัวแปร] // useState('') คือให้ค่าเริ่มต้นของ title = ''
    const inputTitle = (event)=>{ // ภายใน onChange={inputTitle} มี call back function inputTitle
        setTitle(event.target.value) // เมื่อรับค่าใดๆ เข้ามาที่ setTitle ให้นำค่านั้นไปไว้ที่ useState( )
        //console.log(event.target.value)
    }

    const [amount,setAmount] = useState(0)
    const inputAmount = (event)=>{
        setAmount(event.target.value)
        //console.log(event.target.value)
    }

    const saveItem = (event) => {
        event.preventDefault(); // clear ค่าใน input

        //สร้างที่เก็บข้อมูล title,amount
        const itemData = {
            title:title, // prors ชื่อว่า title ดึงค่ามาจาก useState ส่วนของ title
            amount:Number(amount)
        }
        console.log(itemData);
        // clear ค่าใน state พร้อมกับ clear ค่าใน input --> value={title}
        setTitle('') 
        setAmount(0)
    }
    

    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการ" onChange={inputTitle} value={title}/> 
                </div>
                
                <div>
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="ระบุจำนวนเงิน" onChange={inputAmount} value={amount}/>
                </div>

                <div>
                    <button className="btn" type="submit">เพิ่มข้อมูล</button>
                </div>

            </form>
        </div>
    );
}

export default FormComponent;