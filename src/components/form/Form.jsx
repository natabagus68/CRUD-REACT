import React from 'react'

const Form = ({change, change2, name, email, submited}) => {
    return (
        <div style={{width:'800px', margin: 'auto', marginTop:'40px'}}>
            <form onSubmit={submited}>
                <div className="mb-3">
                    <label className="form-label" for="1">Nama</label>
                    <input type="text" className="form-control" id='1' value={name} onChange={change}/>
                </div>
                <div className="mb-3">
                    <label className="form-label" for="2">Email</label>
                    <input type="email" className="form-control" id='2' value={email} onChange={change2}/>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form
