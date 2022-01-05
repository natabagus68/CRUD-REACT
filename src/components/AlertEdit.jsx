import React from 'react'

const AlertEdit = ({pesan}) => {
    return (
        <div className="alert alert-info mt-5" style={{width: '800px', margin:'auto'}} role="alert">
        {pesan} telah di Update!!
      </div>
    )
}
 
export default AlertEdit
