import { useRef } from "react";
import SomeComponent from "./SomeComponent";



const HookuseImperativeHandle = () => {

    const comppnetRef = useRef()

  return (
    <div>
        <h2>useImperativeHandle</h2>
        <SomeComponent ref={comppnetRef}/>
        <button onClick={()=>comppnetRef.current.validate()}>Validate</button>
    </div>
  )
}

export default HookuseImperativeHandle