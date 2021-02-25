import React, { useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name : 'PhotoShop', price : '$99.99'},
    {name : 'Illustrator', price : '$60.99'},
    {name : 'Pdf Reader', price : '$6.99'},
    {name : "Premier EL ", price : '$299.99'}
  ]
  const nayok = ['Rajjak', 'Salman', 'Khan', 'Josim', 'Bappy', 'Shuvo']
  return (
    <div className="App">
      <header className="App-header">
        <h1>Try to learn React Js . </h1>
        <Counter> </Counter>
        <Users> </Users>
        <ul>
          {
            nayok.map(nayok => <li> {nayok} </li>)
          }
          {
            products.map(products => <li>{products.name}</li>)
          }
          
        </ul>
        {
          products.map(pd => <Product product={pd}> </Product>)
        }
        <Person name="Nahid" job="Dev"> </Person>
        <Person name="Hassan" job="Web"> </Person>
        <Person name="Bulbul" job="Analytics"> </Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count , setCount] = useState(10); 
  
  return (
    <div>
      <h1>Count   : {count} </h1>
      <button onClick={() => setCount(count + 1)} >Increase</button>
      <button id="hide" onClick={() => setCount(count - 1)} >Decrease</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then( data => setUsers(data) )
  })
  return(
    <div>
      <h1>Dynamic Object: {users.length} </h1>
      <ul>
        {
          users.map(user => 
          <li>{user.name}</li>)
    
        }
      </ul>
    </div>
  )
}
function Product(props) { 
const productStyle = {
  border : '1px solid yellow',
  borderRadius : '10px',
  backgroundColor: 'grey',
  height : '350px',
  width : '350px',
  float : 'left',
}
const {name , price} = props.product;
return (
  <div style={productStyle}>
  <h2>{name} </h2>
  <h1> {price} </h1>
  <button> Buy Now</button>
  </div>
)
}

function Person(props){
  return <div style = {{border : '1px solid red', margin : '10px' , padding : '2%',width:'400px',  borderRadius : '10px'}}>
    <h1>Hello {props.name} </h1>
  <p>My Profession : {props.job} </p>
  </div>
}
export default App;
