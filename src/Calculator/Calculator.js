
import React, {Component } from 'react';
import './Calculator.css';
import * as math from 'mathjs';

var current = [0];
var stringify 
class Calculator extends React.Component{

    constructor(props){
      super(props);
      this.state = {
    currentValue: '',
    previousVal: '0',
     formula: ''   


      };
      this.clickHandler = this.clickHandler.bind(this)
      this.deleteHandler = this.deleteHandler.bind(this)
      this.decimalHandler = this.decimalHandler.bind(this)

      this.formulaHandler=this.formulaHandler.bind(this)
      this.equalHandler = this.equalHandler.bind(this)
    }

    clickHandler(e){
        
        current.push(e.target.value) 
   
        this.setState( {
           currentValue: this.state.currentValue + e.target.value,
          // currentValue: parseInt(current.join('')),
           //previousVal: parseInt(current.join('')),
          });
 

          

console.log('current ' + current)
console.log('state ' + this.state.currentValue)
console.log('xxx ' + stringify)


    }


    equalHandler(){
        this.setState( {
           
            currentValue: math.evaluate(this.state.currentValue)
          });
          current.push(math.evaluate(this.state.currentValue))
          console.log('pushed');
          console.log('x curent ' + current)
          console.log('xx state xx ' + this.state.currentValue)
    }

    formulaHandler(e){
        this.setState( {
           
            formula: e.target.value
          });
        
         
          
    }



    decimalHandler(){
        this.setState( {
           

          });
        
          console.log(this.state.currentValue)
          
    }






        deleteHandler(e){
        this.setState( {
            currentValue: '',
           
    
          });
          current= [0]
          
    }




render(){
    
    return(
        <div >
            <div id='main'>

            




            <div id='nums' >
          
            
            <button className="numFormat" onClick = {this.clickHandler} type="button" id="seven" value='7' >7</button>
            <button className="numFormat" onClick = {this.clickHandler}  type="button" id="eight" value='8' >8</button>
            <button className="numFormat" onClick = {this.clickHandler} type="button" id="nine" value='9' >9</button>
           
            <button className="numFormat" onClick = {this.clickHandler}  type="button" id="four" value='4' >4</button>
            <button className="numFormat" onClick = {this.clickHandler}  type="button" id="five" value='5' >5</button>
            <button className="numFormat" onClick = {this.clickHandler}  type="button" id="six" value='6' >6</button>

            <button className="numFormat"  onClick = {this.clickHandler} type="button" id="one" value='1' >1</button>
            <button className="numFormat"  onClick = {this.clickHandler} type="button" id="two" value='2' >2</button>
            <button className="numFormat" onClick = {this.clickHandler}  type="button" id="three" value='3' >3</button>
            </div>



            <button className="zero"  type="button" id="zero" value='0' onClick = {this.clickHandler} >0</button>


            <div id='calcButtons'>
            <button className="numFormat"  onClick = {this.clickHandler} type="button" id="divide" value='/'  >/</button>
             
            <button className="numFormat" onClick = {this.clickHandler} type="button" id="multiply" value='*'   >*</button>
 
            <button className="numFormat" onClick = {this.clickHandler} type="button" id="subtract" value='-'  >-</button>

            <button className="numFormat" onClick = {this.clickHandler}  type="button"  id="add" value='+'  >+</button>

            <button className="numFormat" onClick = {this.clickHandler}  type="button"   id="decimal" value='.'  >.</button>

            <button className="numFormat" onClick={this.deleteHandler}  type="button"    id="clear" value='AC' >AC</button>
            <button type="button"  onClick = {this.equalHandler} id="equals" value='=' >=</button>
            
    <div id="display">   {current[current.length-1]} </div>
    <div id="display2">{this.state.currentValue} </div>
            </div>
            </div>

         
        </div>
    )
}

}


export default Calculator

