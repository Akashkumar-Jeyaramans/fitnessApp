import React from 'react'
import { Input } from 'antd';
import { Row } from 'antd';


const { Search } = Input;


export const Discover = () => {

 

  const data =[{
    name:"example1",
    link:"https://images.pexels.com/photos/2803158/pexels-photo-2803158.jpeg?auto=compress&cs=tinysrgb&w=300",
    des:"back pain relief"
  },{
    name:"example2",
    link:"https://images.pexels.com/photos/4482936/pexels-photo-4482936.jpeg?auto=compress&cs=tinysrgb&w=600",
    des:"Outdoor Excersise"
  },{
    name:"example3",
    link:"https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=600",
    des:"Outdoor Excersise"
  },
{
  name:"example4",
    link:"https://images.pexels.com/photos/2923156/pexels-photo-2923156.jpeg?auto=compress&cs=tinysrgb&w=600",
    des:"Vegeterian Receipies"
}]

const searchData=["Fiber","Planks","HIIT","Strenth","Polyometric","Electrolyte",]
const onSearch = (value) => {
  console.log(value)
  return searchData.push(value)
};
  return (
    <>
     <Search
      placeholder="Articles, Excersise, Diets"
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
    <br/>
    <br/>
    <div style={{display:"-webkit-inline-flex"}}>
      {searchData.map((sd,i)=>(
        <div key={i}>
        <br/>
        <p style={{border: "solid",padding:5,borderRadius:"25px",backgroundColor:"grey"}}>{sd}</p>
          </div>
      ))}
   </div>
    <div>
      <div style={{display:"flex",height:"100%"}}>
  
      <br/>
<Row>
  {data.map((datas,i)=>(
    <div style={{width:150}} key={i}>
    <img
     style={{borderRadius:"25%",width:150}}
       alt={datas.name}
       src={datas.link}
     />
   {/* <div className='text-on-image' style={{position: "absolute",right: "55%",left: "00%",bottom: "55%"}}> */}
            <p> {datas.des} </p>
         {/* </div> */}
         </div>
  ))}
  </Row>
  </div>
    </div>
    </>
  )
}
