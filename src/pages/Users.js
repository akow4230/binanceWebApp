import React, {useState} from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import binPhoto from './../images/bin.png'
import './style.css'
import Header from './Header';
function Users(props) {
    
        const  [showRodal, setShowRodal]=useState(false)
        return (
            <div>
                 <Header name='users'/>
                 <div className='ag-courses_box ' style={{color: 'white', fontSize: 20}}>
                
                <div id="wrapper">
                   <div className='divFlex'>
                       <h1>Users</h1>
                   </div>
                   <table  id="keywords"  >
                       <thead>
                       <tr>
                           <th>№</th>
                           <th><span>Name</span></th>
    
                           <th><span>Telegram ID</span></th>
                           <th></th>
                       </tr>
                       </thead>
                       <tbody>
                       <tr>
                           <td>1</td>
                           <td className="lalign">Ro'zimurod</td>
                           <td>855893763</td>
                           <td>
                               <img width={30} src={binPhoto} alt='...'/>
                           </td>
                       </tr>
                       <tr>
                           <td>2</td>
                           <td className="lalign">silly tshirts</td>
                           <td>855893763</td>
                           <td>
                               <img width={30} src={binPhoto} alt='...'/>
                           </td>
                       </tr>
                       <tr>
                       <td>3</td>
                           <td className="lalign">Anvar</td>
                           <td>855893763</td>
                           <td>
                               <img width={30} src={binPhoto} alt='...'/>
                           </td>
                       </tr>
                       <tr>
                       <td>1</td>
                           <td className="lalign">silly tshirts</td>
                           <td>6,000</td>
                           
                       </tr>
                       <tr>
                       <td>1</td>
                           <td className="lalign">silly tshirts</td>
                           <td>6,000</td>
                           
                       </tr>
                       <tr>
                       <td>1</td>
                           <td className="lalign">silly tshirts</td>
                           <td>6,000</td>
                           
                       </tr>
                       <tr>
                       <td>1</td>
                           <td className="lalign">silly tshirts</td>
                           <td>6,000</td>
                           
                       </tr>
                      
                       
                       </tbody>
                   </table>
               </div> 
    
               <Rodal width={320} visible={showRodal} onClose={()=>setShowRodal(false)}>
                   <div>Content</div>
               </Rodal>
           </div>
            </div>
           
        );
    
}

export default Users;