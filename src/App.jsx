
import './App.css'
import Die from './Die'
import Greeter from './Greeter'
import HeadingColor from './HeadingColor'


function App() {


  return (

    <div>
      <p>Hello There </p>
      {/* Greeter */}

      {/* <Greeter person={"Telgu"} from={"sherif"} />
      <Greeter person={"Rana"} from={' Amir'} /> */}

      {/* Die */}

      {/* <Die dieSide={20} from={1} />
      <Die /> */}


      {/* Passing Arrays and Object  */}


      <HeadingColor color={"teal"} text={"Dar ki ma ki choo"} />
      <HeadingColor color={"pink"} text={"Daaru pio sex karo"} />
    </div>
  )
}

export default App
