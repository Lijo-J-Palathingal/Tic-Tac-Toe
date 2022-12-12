import React, { useState } from 'react';
import Icon from './Components/Icon';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Card, CardBody, Container, Button, Col, Row } from 'reactstrap';
import './App.css';


const itemArray = new Array(9).fill("empty")

function App() {
  
  const [isCar , setIsCar] = useState(false);

  const [winMessage , setWinMessage] = useState("") 
  
  const reloadGame = () => {
    setIsCar(false);
    setWinMessage("");
    itemArray.fill("empty",0,9)
  } 
  
  const checkIsWinner = () => {
    // ----------------------------------------------------sidewise
    if(itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2] &&
      itemArray[0] !== "empty"){
        setWinMessage(`${itemArray[0]} wins`)
      }
      else if(itemArray[3] === itemArray[4] &&
        itemArray[4] === itemArray[5] &&
      itemArray[3] !== "empty")
      {
        setWinMessage(`${itemArray[3]} wins`)
      }
    else if(itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8] &&
      itemArray[6] !== "empty")
      {
        setWinMessage(`${itemArray[6]} wins`)
      }
      // ----------------------------------------------------sidewise
      
      // ----------------------------------------------------top to bottom
      else if(itemArray[0] === itemArray[3] &&
        itemArray[3] === itemArray[6] &&
        itemArray[0] !== "empty")
        {
          setWinMessage(`${itemArray[0]} wins`)
        }
        else if(itemArray[1] === itemArray[4] &&
          itemArray[4] === itemArray[7] &&
          itemArray[1] !== "empty")
          {
            setWinMessage(`${itemArray[1]} wins`)
          }
          else if(itemArray[2] === itemArray[5] &&
            itemArray[5] === itemArray[8] &&
            itemArray[2] !== "empty")
            {
     setWinMessage(`${itemArray[2]} wins`)
    }
    // ----------------------------------------------------top to bottom
    
    // ---------------------------------------------------cross
    else if(itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8] &&
      itemArray[0] !== "empty")
      {
        setWinMessage(`${itemArray[0]} wins`)
      }
      else if(itemArray[2] === itemArray[4] &&
        itemArray[4] === itemArray[6] &&
        itemArray[2] !== "empty")
        {
          setWinMessage(`${itemArray[2]} wins`)
        }
        
        // ---------------------------------------------------cross
      }
      // ======================================================tost=====by lijo
      const notify = () => {
        if(winMessage){
          toast.success(winMessage, {
            position: toast.POSITION.BOTTOM_CENTER
          });
        }else {
          toast.error("already filled", {
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      }
      // ==========================================================tost
      const changeItem = itemNumber =>{
        if(winMessage){
          return notify(winMessage,{ type: "success"})
        }
        
        if(itemArray[itemNumber] === "empty"){
          itemArray[itemNumber] = isCar ? "Car": "bike"
      setIsCar(!isCar)
    }
    
    else{
      return notify("already filled", {type:"error"})
    }
    checkIsWinner();
  }
  
  return (
      <Container className='p-5'>
        <ToastContainer position="buttom-center"/>
        <Row>
          <Col md={6} className="offset-md-3">
            {winMessage ? (
              <div className='mb-2 mt-2'>
                <h1 className='text-success text-uppercase text-center'>
                  {winMessage}
                </h1>
                <Button  color='success'block onClick={reloadGame}>
                  Reload The Game
                </Button>
              </div>
            ) : (
              <h1 className='text-center text-warning'>
                {isCar ? "Car" : "bike" } Turn
              </h1>
            ) }
            <div className='grid'>
              {itemArray.map((item,index)=>(
                <Card color='warning' onClick={()=>changeItem(index)}>
                  <CardBody className='box'>
                    <Icon name={item}/>
                  </CardBody>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    
  );
}
  
export default App;
