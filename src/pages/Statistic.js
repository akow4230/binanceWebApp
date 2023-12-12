import React, {useEffect, useState} from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import binPhoto from './../images/bin.png'
import './style.css'
import Header from './Header';
import ApiCall from '../ApiCall/ApiCall';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Statistic(props) {
    const  [showRodal, setShowRodal]=useState(false)
    const [admins, setAdmins]=useState([])
    const [newAdmin, setNewAdmin] = useState({
        tradername: '',
        uid: '',
    });
    useEffect(() => {
        getAdmins()
    }, []);

    async function getAdmins() {
        try {
            const result = await ApiCall('/api/v1/traders', 'get', null);
            if (!result.error) {
                setAdmins(result.data);
            } else {
                console.error('Error fetching admins:', result.error);
            }
        } catch (error) {
            console.error('Error fetching admins:', error);
        }
    }
    const handleAddAdmin = async (event) => {
        event.preventDefault();
        try {
            const result = await ApiCall('/api/v1/traders', 'post', newAdmin);
            if (!result.error) {
                // If the admin is added successfully, close the modal and refresh the admin list
                setShowRodal(false);
                toast('Admin saved successfully!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                getAdmins();
            } else {
                console.error('Error adding admin:', result.error);
            }
        } catch (error) {
            console.error('Error adding admin:', error);
        }
        setNewAdmin({
            tradername: '',
            uid: '',
        })
    };

    const deleteAdmin = async (adminId) => {
        try {
            const result = await ApiCall(`/api/v1/traders/${adminId}`, 'delete', null);
            if (!result.error) {
                toast.success('Admin deleted successfully!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                getAdmins();
            } else {
                console.error('Error deleting admin:', result.error);
            }
        } catch (error) {
            console.error('Error deleting admin:', error);
        }
    };

    return (
        <div>
         <ToastContainer />
             <Header name='traders'/>
             <div className='ag-courses_box ' style={{color: 'white', fontSize: 20}}>
            
            <div id="wrapper">
               <div className='divFlex'>
                   <h1 style={{marginTop:5}}>Traders</h1>
                   <button onClick={()=>setShowRodal(true)} className='submit'>+Add</button>
               </div>
              <div style={{overflow:'scroll', padding:2}}>
                <table  id="keywords"  >
                    <thead>
                    <tr>
                        <th>№</th>
                        <th><span>Name</span></th>

                        <th><span> UID</span></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    
                    {
                        admins.map((item, index)=>
                            <tr key={item.adminid}>
                                <td>{index+1}</td>
                                <td class="lalign">{item.tradername}</td>
                                <td>{item.uid}</td>
                                <td onClick={()=>deleteAdmin(item.uid)}>
                                    <img width={30} src={binPhoto} alt='...'/>
                                </td>
                            </tr>  
                        )
                    }
                    
                    
                    
                    </tbody>
                </table>
              </div>
           </div> 

           <Rodal width={320} height={300} visible={showRodal} onClose={() => setShowRodal(false)}>
                <div className="container" style={{ color: 'black' }}>
                    <div className="text">
                        Add new Trader
                    </div>
                    <form onSubmit={handleAddAdmin}>
                        <div className="form-row">
                            <div className="input-data">
                                <input type="text" required value={newAdmin.tradername} onChange={(e) => setNewAdmin({ ...newAdmin, tradername: e.target.value })} />
                                <div className="underline"></div>
                                <label htmlFor="">Name</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-data">
                                <input type="text" required value={newAdmin.uid} onChange={(e) => setNewAdmin({ ...newAdmin, uid: e.target.value })} />
                                <div className="underline"></div>
                                <label htmlFor="">Trader UID</label>
                            </div>
                        </div>
                        <div className="form-row submit-btn">
                            <button type='submit' className='submit'>save</button>
                        </div>
                    </form>
                </div>
            </Rodal>
       </div>
        </div>
       
    );
}

export default Statistic;