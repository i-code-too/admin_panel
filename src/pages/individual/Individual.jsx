import "./individual.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import TableList from "../../components/table/TableList"

const Individual = () => {
    return(
        <div className="individual">
            <Sidebar />
            <div className="individual-container">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="edit-button">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" 
                            alt="" className="item-img"/>
                            <div className="details">
                                <h1 className="item-title">Jane Doe</h1>
                                <div className="detail-item">
                                    <span className="item-key">Email:</span>
                                    <span className="item-value">janedoe@gmail.com</span>
                                </div>
                                <div className="detail-item">
                                    <span className="item-key">Phone:</span>
                                    <span className="item-value">+1 2313 12 14</span>
                                </div>
                                <div className="detail-item">
                                    <span className="item-key">Address:</span>
                                    <span className="item-value">Elton St. 234 Garden Yd. NewYork</span>
                                </div>
                                <div className="detail-item">
                                    <span className="item-key">Country:</span>
                                    <span className="item-value">USA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3/1} title="User Transactions (during last 6 months)"/>
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Recent Transactions</h1>
                    <TableList />
                </div>
            </div>
        </div>
    )
}

export default Individual