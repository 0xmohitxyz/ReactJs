import Card from "./components/Card";
const App = () => {
  return (
    <div className="parent">
      <Card user="Aman" age={18} 
      img="https://images.unsplash.com/photo-1754663186601-2823b35e9124?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg1fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
      <Card user="Mohit" age={22} img="https://plus.unsplash.com/premium_photo-1765390093374-695f6f14af7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
      {/* <Card />
      <Card />
      <Card /> */}
    </div>
  )
}

export default App;