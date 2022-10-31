import React from 'react'
import { Button, Input } from 'antd';
import { Avatar, Card,} from 'antd';
import {  Col, Row } from 'antd';
import { BiDumbbell } from "react-icons/bi";
const { Meta } = Card;
const { Search } = Input;

const onSearch = (value) => console.log(value);

export const Consult = () => {
  const data=[{
name:"Manish Saxena",
avatar:"https://joeschmoe.io/api/v1/random",
des1:"Generral fitness Trainer",
des2:"6 years of Expereinnce",
special:"Fitness,Wellness",
rate:"500"
  },{
    name:"Shreya Sharma",
    avatar:"https://joeschmoe.io/api/v1/random",
    des1:"Personal Trainer",
    des2:"2 years of Expereinnce",
    special:"Fitness,yoga",
    rate:"500"
  }]
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
      <div>
        <div>
        <div className="site-card-wrapper" >
    <Row gutter={16}>
      <Col span={8}>
        <Button type="primary" shape="round" icon={<BiDumbbell />} size="large">
        Trainner
      </Button>
      </Col>
      <Col span={8}>
      <Button  shape="round" icon={<BiDumbbell />} size="large">
        Dietician
      </Button>
      </Col>
      <Col span={8}>
      <Button  shape="round" icon={<BiDumbbell />} size="large">
        Therapist
      </Button>
      </Col>
    </Row>
  </div>
        </div>
       <br/>
{data.map((datas,i)=>(
    <Card
    key={i}
    style={{
      width: 300,
      height: 280,
      borderRadius:"25px",
      border:"50px"
    }}
    actions={[
      <Button>Book a session</Button>
    ]}
   
  >
    <Meta
      avatar={<Avatar src={datas.avatar} />}
      title={datas.name}
      description={[
        <div>
        <p>{datas.des1}</p>
        <p>{datas.des2}</p>
        <div style={{display:"-webkit-inline-flex"}}>
        <p>{datas.special}</p>
        <p style={{paddingLeft:20}}>{datas.rate}/Session</p>
        </div>
        </div>
      ]}
    />
  </Card>
))}
      </div>
  

      </>
    )
}

