import {useState} from 'react'

const TableUsers = ({user, deleteUser, editUser}) => {
   
  const [idUser, setIdUser] = useState('')

  const clickDel = (id) => {
    setIdUser(id)
  }


  const iya = () => {
    deleteUser(idUser)

    setIdUser('')
  }



    

    

    return (
        <div>

        <table className="table table-dark table-hover">
           <thead className="table-dark">
            <tr>
              <th className="table-dark">NO</th>
              <th className="table-dark">Nama</th>
              <th className="table-dark">email</th>
              <th className="table-dark">Edit</th>
              <th className="table-dark">Delete</th>
            </tr>
           </thead>
           <tbody>
              {user.map((e, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>
                    <button type ="button" className="btn btn-primary" onClick={()=> editUser(e.id)}>Edit</button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-danger"  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick= {()=> clickDel(e.id)} >Delete</button>
                  </td>
                </tr>
              ))
              }
           </tbody>
        </table>
            

       
        {/* modal */}
        
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">DELETE</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h4>Apakah kamu yakin untuk menghapus??</h4>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tidak</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={iya}>Ya</button>
      </div>
    </div>
  </div>
</div>

             
        </div>
    )
            
}

export default TableUsers
