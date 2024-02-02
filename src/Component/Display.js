import React from 'react'

export const Display = (props) => {
  return (
    <div>

      <div>
           <table>
                <tr>
                    <th>Total Amount:</th>
                    <th>Count:</th>
                    <th>Name:</th>
               </tr>
                <tr>
                    <td><input value={props.price1}/></td>
                    <td><input value={props.madhu}></input></td>
                    <td><input></input></td>
                    
                </tr>
             </table>
            <div>

            </div>
         </div>
    </div>
  )
}
