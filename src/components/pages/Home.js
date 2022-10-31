import React from 'react'
import DatePicker from "react-horizontal-datepicker";
import { Avatar,Card,Progress } from 'antd';
import { IoIosWater,IoMdBonfire } from "react-icons/io";
import { IoFootstepsSharp } from "react-icons/io5";
const { Meta } = Card;
export const Home = () => {
  const selectedDay = val => {
    console.log(val);
  };
 const data = [{
  name:"Strenth Trainning",
  des:"& days Challenge",
  avatar:"https://joeschmoe.io/api/v1/random"
 },
{
  name:"Plyometric",
  des:"30 days Challenge",
  avatar:"https://joeschmoe.io/api/v1/random"
},
{
  name:"High intensity Cardio",
  des:"30 days Challenge ",
  avatar:"https://joeschmoe.io/api/v1/random"
}]

const goalData = [
  {
    percent:75,
    icon:<IoIosWater/>,
    des1:"5/6",
    des2:"Glasses of Water"
  },
  {
    percent:50,
    icon:<IoMdBonfire/>,
    des1:"150/300",
    des2:"Calories Burned"
  },  {
    percent:65,
    icon:<IoFootstepsSharp/>,
    des1:"18K/14K",
    des2:"Steps"
  },
]
  return (
    <>
        <div className="App">
      <DatePicker
        getSelectedDay={selectedDay}
        labelFormat={"MMMM"}
        color={"#374e8c"}
      />
    </div>
    <div>
  <p>Today</p>
  <div>
    {data.map((datas,i)=>(
       <Card
       key={i}
       style={{
         width:" 100%",
         borderRadius:"25px"
       }}
     >
       <Meta
         avatar={<Avatar src={datas.avatar} />}
         title={datas.name}
         description={datas.des}
       />
     </Card>
    ))}
 
  </div>
</div>
<div>
  <p>Goals</p>
  <div style={{display:"-webkit-inline-flex",padding:10,overflowX:"scroll",width:400}}> 
  {goalData.map((gd,i)=>(
    
    <div  key={i}
    // style={{display:"-webkit-inline-flex",padding:10,overflowX:"scroll",width:300}}
    >
  <Card 
 
  style={{
    borderRadius:"25px"
  }}>
  <Progress type="circle" percent={gd.percent} format={() => gd.icon} >
  </Progress>
  <p>gd.des1</p>
  <p> gd.des2</p>
  </Card>
  </div>
  
  ))}
  </div>
</div>
    </>

  );
}
