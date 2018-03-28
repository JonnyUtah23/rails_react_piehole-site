import React from 'react';
import axios from 'axios';
import { Header, Card, Container, GridColumn, GridRow } from 'semantic-ui-react';



const SomeFun = () => (


<div class="ui vertical stripe segment">
   <div class="ui middle aligned stackable grid container">
     <div class="row">
       <div class="eight wide column">
         <h3 class="ui header">We Love Eating Pizza !!!</h3>
         <p>Lets Write something about some pizza and its SO GOOD</p>
         <h3 class="ui header">Did we Mention BEER?</h3>
         <p>12 Kinds of Beer did you hear right? YES!!</p>
       </div>
       <div class="six wide right floated column">
         <img class="ui large bordered rounded image active-image"></img>
       </div>
     </div>
     <div class="row">
       <div class="center aligned column">
         <a class="ui huge button">Need Directions?</a>
       </div>
     </div>
   </div>
 </div>
 )



export default SomeFun;



