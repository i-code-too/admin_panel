import "./datatable.scss"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { DataGrid } from '@mui/x-data-grid'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { userColumns, productColumns } from "../../datatablesource"
import { doc, collection, deleteDoc, onSnapshot } from "firebase/firestore"
import { db } from "../../firebase"

const Datatable = ({ dataType, title, addnew }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    // fetching data and realtime updation
    const unsub = onSnapshot(collection(db, dataType), (snapShot) => {
      let list = []
      snapShot.docs.forEach(doc => {
        list.push({id:doc.id, ...doc.data()})
      })
      setData(list)
    }, (error) => {
      console.log(error)
    })
    return () => {
      unsub()
    }
  })

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item) => item.id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  const actionColumn = {
    field: 'action',
    headerName: 'Action',
    width: 200,
    renderCell: (params) => {
        return (
          <div className="cell-action">
            <Link to={`:${params.row.id}`} className="link-new">
              <div>
                <span className="view-button">View</span>
              </div>
            </Link>
            <Link className="link-new">
              <div>
                <span className="delete-button" onClick={() => handleDelete(params.row.id)}>Delete</span>
              </div>
            </Link>
          </div>
        )
    }
  }

  return(
    <div className="homeContainer">
      <div className="datatable">
        <div className="datatable-title">
          {title}
          <Link to="new" className="link">
            <AddCircleIcon className="icon" /> Add New {addnew}
          </Link>
        </div>
        <DataGrid
          className="datagrid"
          rows={data}
          columns={title === "Products" ? productColumns.concat(actionColumn) : userColumns.concat(actionColumn)}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10},
            },
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          sx={{
            '& .MuiDataGrid-cell:focus': {
              outline: 'none',
            },
            '& .MuiDataGrid-row.Mui-focused': {
              outline: 'none',
            },
          }}
        />
      </div>
    </div>
  )
}

export default Datatable