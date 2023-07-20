import { useState } from "react";
import Logo from "./logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App(){
  const [items,setItems]=useState([]); 

   function handleAddItems(item){
  setItems(items=>[...items,item])

 }
 
 function handleDeleteItem(id){
  setItems((items)=>items.filter(item=>item.id!==id))
 }

 function handleToogleItem(id){
  setItems((items)=>items.map(item=>item.id===id?{...item,packed:!item.packed}:item))

 }

 function handleDeleteList(){
  const confiremed=window.confirm('are you sure you want to delete all items')
  if(confiremed) setItems([]);
 }

 return <div className="app">
  <Logo/>
  <Form onAddItems={handleAddItems} />
  <PackingList items={items} onDeleteItems={handleDeleteItem} onToggleItems={handleToogleItem} onDeleteList={handleDeleteList}/>
  <Stats items={items}/>
 </div>
}