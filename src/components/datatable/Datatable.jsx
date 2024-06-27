import "./datatable.scss"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { DataGrid } from '@mui/x-data-grid'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { userColumns, userRows } from "../../datatablesource"
import { doc, collection, getDocs, deleteDoc } from "firebase/firestore"
import { db } from "../../firebase"

const Datatable = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let list = []
      try {
        const querySnapshot = await getDocs(collection(db, "users"))
        querySnapshot.forEach((doc) => {
          list.push({ id:doc.id, ...doc.data() })
        })
        setData(list)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  console.log(data)

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item) => item.id !== id))
    } catch (error) {
      
    }
  }

  const actionColumn = {
    field: 'action',
    headerName: 'Action',
    width: 200,
    renderCell: (params) => {
        return (
          <div className="cell-action">
            <Link to=":userId" className="link-new">
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
      <div className="datatable">
        <div className="datatable-title">
          Users
          <Link to="new" className="link">
            <AddCircleIcon className="icon" /> Add New User
          </Link>
        </div>
        <DataGrid
          className="datagrid"
          rows={data}
          columns={userColumns.concat(actionColumn)}
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
  )
}

export default Datatable