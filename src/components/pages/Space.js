
import React from 'react'
import { Button, Input } from 'antd';
import { Avatar, Card } from 'antd';

const { Meta } = Card;
const { Search } = Input;

const onSearch = (value) => console.log(value);
export const Space = () => {
const data = [{
  name:"Abisheik",
  avatar:"https://joeschmoe.io/api/v1/random",
  des:"10 streak *30coins"
},
{
  name:"Rajesh",
  avatar:"https://joeschmoe.io/api/v1/random",
  des:"12 streak *50coins"
},
{
  name:"Vicky",
  avatar:"https://joeschmoe.io/api/v1/random",
  des:"150 streak *800coins"
},
{
  name:"Mani",
  avatar:"https://joeschmoe.io/api/v1/random",
  des:"5 streak *8coins"
},
{
  name:"Sanju",
  avatar:"https://joeschmoe.io/api/v1/random",
  des:"15 streak *80coins"
},
{
  name:"zaheer",
  avatar:"https://joeschmoe.io/api/v1/random",
  des:"25 streak *180coins"
},]

  return (
        <>
         <Search
          placeholder="Articles, Excersise, Diets"
          onSearch={onSearch}
          style={{
            width: 200,
          }}
        />
        <div style={{width:"100%"}}>
          {data.map((datas,i)=>(
                 <Card
                 key={i}
                 style={{
                   width: "100%",
                   height: 100,
                   borderRadius:"25px"
                 }}>
                 <Meta
                   avatar={<Avatar src={datas.avatar}/>}
                   title={datas.name}
                   description={datas.des}
                 />
               </Card>
          ))}
        </div>
    <p> Ex Events Nearby</p>
    <Card
    style={{
      width: 300,
      borderRadius:"25px"
    }}
    cover={
      <img
      style={{borderRadius:"25px"}}
        alt="example"
        src="https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=300"
      />
    }
    actions={[
      <Button>Attend</Button>
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Yoga for beginners"
      description="Date and Time and Duration"
    />
  </Card>
        </>
      )
}
