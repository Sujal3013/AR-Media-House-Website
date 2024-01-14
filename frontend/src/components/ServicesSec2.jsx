import {Heading, Button, Circle, Triangle } from "./"
import { useWinSizeContext } from "../context/winSizeContext"


export default function ServicesSec2({Card, list}){
  const {winSize, BR_1, BR_2, BR_3} = useWinSizeContext();

  if(winSize > BR_2) 
  return(
    <section className="relative">
      <Heading 
        heading="we've got tricks"
        subHeading="up our sleeves."
        className="w-full items-center my-6"/>
      <div className="w-full flex justify-center">
        <Card {...list[0]} />
      </div>
      <div className="w-full px-screen-padding flex justify-between items-center">
        <Card {...list[1]} />
        <Button className="bg-primary-500">Get Started</Button>
        <Card {...list[2]} />
      </div>
      <div className="w-full flex justify-center">
        <Card {...list[3]} />
      </div>

      {/* Shapes */}
      <Circle className="top-[20%] left-[5%]" />
      <Triangle className="top-[2%] right-[5%]" />
    </section>
  )
  else if(winSize > BR_1)
  return(
    <section className="relative">
      <Heading 
        heading="we've got tricks"
        subHeading="up our sleeves."
        className="w-full items-center my-6"/>
      <div className="w-full px-screen-padding flex justify-between sm:gap-4 mb-8">
        <Card {...list[0]} />
        <Card {...list[1]} />
      </div>
      <div className="w-full flex justify-center mb-8">
        <Button className="bg-primary-500">Get Started</Button>
      </div>
      <div className="w-full px-screen-padding flex justify-between sm:gap-4 mb-8">
        <Card {...list[2]} />
        <Card {...list[3]} />
      </div>

      {/* Shapes */}
      <Circle className="top-[20%] left-[5%]" />
      <Triangle className="top-[2%] right-[5%]" />
    </section>
  )
  else
  return (
    <section className="relative">
      <Heading 
        heading="we've got tricks"
        subHeading="up our sleeves."
        className="w-full items-center my-6"/>
      <div className="w-full flex flex-col items-center px-screen-padding">
        {list.map((el,ind)=>(
          <Card {...el} key={ind}/>
        ))}
        <Button className="bg-primary-500 my-8">Get Started</Button>
      </div>

      {/* Shapes */}
      <Circle className="top-[10%] sm:top-[20%] left-[5%]" />
      <Triangle className="hidden md:block top-[2%] right-[5%]" />
    </section>
  )
}