
import axios from "axios";
import 'toastr/build/toastr.css';
import React, { useState } from 'react';

function Consult (){
    const[todos,setTodos]=useState([]);
    const getClientes = async () =>{
        try{
            const url = " https://apigrupogr.com/grapi/clientes/lista-clientes"
            let result=await axios({
                url,
                method: 'GET',
                dataType : 'json',
                ContentType: 'application/json',
            });
            setTodos( result.data.clients);
        }catch(error){
            alert(error);
        }
    }

    return(
        <div className="container App">
            <button onClick={getClientes}>CONSULTAR</button><tr></tr>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"> ID </th>
                        <th scope="col"> Nombre</th>
                        <th scope="col"> Descripción</th>
                        <th scope="col"> Correo</th>
                        <th scope="col"> Regimen Fiscal </th>
                        <th scope="col"> RFC</th>
                    </tr>
                </thead>
                <tbody>
                {
                    todos.map( (data)=> 
                    <tr key={"celda"+data.id_cliente}>
                        <td key={"id_cliente"+data.id_cliente}>{data.id_cliente}</td> 
                        <td key={"nombre"+data.id_cliente}>{data.nombre}</td>
                        <td key={"descripcion"+data.descripcion}>{data.descripcion} </td>
                        <td key={"correo"+data.correo}>{data.correo}</td>
                        <td key={"reg_fiscal"+data.reg_fiscal}>{data.reg_fiscal}</td>
                        <td key={"rfc"+data.urf}>{data.rfc}</td>
                    </tr>
                    )
                }
                </tbody>
            </table> 
        </div>
    );

}
export default Consult;