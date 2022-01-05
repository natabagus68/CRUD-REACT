import React from 'react'

const AlertDelete = ({pesan}) => {
    return (
        <div class="alert alert-danger mt-5" style={{width: '800px', margin:'auto'}} role="alert">
        {pesan} telah terhapus
      </div>
    )
}

export default AlertDelete
