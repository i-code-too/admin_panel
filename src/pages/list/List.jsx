import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"

const List = ({ dataType, title, addnew }) => {
    return(
        <div className="homeContainer">
            <div className="list">
                <Sidebar />
                <div className="list-container">
                    <Navbar />
                    <Datatable dataType={dataType} title={title} addnew={addnew} />
                </div>
            </div>
        </div>
    )
}

export default List