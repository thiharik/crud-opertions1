import React from 'react';
import {useDispatch, useSelector}  from 'react-redux';
//import {Link} from "react-router-dom";
//import { userList } from './Data';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReducer';


function Home() {
    const users= useSelector((state)=>state.users);
    const dispatch =useDispatch();

    const handleDelete =(id)=>{
        dispatch(deleteUser ({id:id}))
    }

    
  return (
    <div className='container'>
    <h2>
        crud App with json server
    </h2>
    <Link  to="./Create" className='btn btn-success my-3'>
        create+
    </Link>
    <table className='table'>
        <thead>
            <tr>
                <td><b>id</b></td>
                <td><b>name</b></td>
                <td><b>email</b></td>
                <td><b>Action</b></td>
            </tr>
        </thead>
        <tbody>
          {users.map((user,index)=>(
            <tr key={index}>
                <td>
                    {user.id}
                </td>
                <td>
                    {user.name}
                </td>
                <td>
                    {user.email}
                </td>
                <td>
                    <Link 
                        to= {`/edit/${user.id}`} 
                        className='btn btn-sm btn-primary'>
                        Edit
                    </Link>
                    <button  
                    className='btn btn-sm btn-danger'
                    onClick={()=>handleDelete(user.id)}
                    >
                        delete
                    </button>

                </td>
            </tr>
          ))}
        </tbody>
    </table>
    </div>
  )
          }     

export default Home