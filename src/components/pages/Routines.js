import React from 'react'
import { Button } from 'antd';
import { Avatar, Card,Progress } from 'antd';
const { Meta } = Card;
export const Routines = () => {
  const data=[
    {
      name:"HITT",
      link:"https://images.pexels.com/photos/6456179/pexels-photo-6456179.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"HITT"
    },  {
      name:"Cardio",
      link:"https://images.pexels.com/photos/3799235/pexels-photo-3799235.jpeg?auto=compress&cs=tinysrgb&w=300",
      title:"Cardio"
    },  {
      name:"Strenth",
      link:"https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"Strenth"
    }, {
      name:"Strenth",
      link:"https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=600",
      title:"Strenth"
    },
  ]
  return (
  <>
  <p>OnGoing</p>
    <Card
    key={1}
  style={{
    width: 300,
    borderRadius:"25px"
  }}
  cover={
    <img
    style={{borderRadius:"25px"}}
      alt="example"
      src="https://images.pexels.com/photos/5384533/pexels-photo-5384533.jpeg?auto=compress&cs=tinysrgb&w=300"
    />
  }
  actions={[
    <Button>continue</Button>
  ]}
>
  <Meta
    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
    title="Summer Yoga"
    description={
      [
        <Progress percent={70} />
      ]
    }
  />
</Card>
<br/>
<Card
key={2}
  style={{
    width: 300,
    borderRadius:"25px"
  }}
  cover={
    <img
    style={{borderRadius:"25px",height:"100px"}}
      alt="example"
      src="https://images.pexels.com/photos/2080544/pexels-photo-2080544.jpeg?auto=compress&cs=tinysrgb&w=600"
    />
  }
  actions={[
    <Button>+ Add New Routine</Button>
  ]}
>
  <Meta
    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
    title="Total Arm"
    description={
      [
        <Progress percent={50} />
      ]
    }
  />
</Card>

  <p> Recommended for you</p>
  <div style={{display:"-webkit-inline-flex",padding:10,overflowX:"scroll",width:300}}>
    {data.map((datas,i)=>(
       <Card
       key={i}
       style={{
         width: 100,
         height:200,
         borderRadius:"25px",
       }}
       cover={
         <img
         style={{borderRadius:"25px"}}
           alt={datas.name}
           src={datas.link}
         />
       }
     >
     <Meta
       title={datas.title}
     />
     </Card>
    ))}
  

</div>
  </>
  )
}
