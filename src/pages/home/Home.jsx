import "./home.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widgets/Widget"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"
import TableList from "../../components/table/TableList"

const Home = () => {
    return(
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="users" />
                    <Widget type="orders" />
                    <Widget type="earnings" />
                    <Widget type="balance" />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart aspect={2/1} title="Revenue (Last 6 months)"/>
                </div>
                <div className="list-container">
                    <div className="list-title">Latest Transactions</div>
                    <TableList />
                </div>
            </div>
        </div>
    )
}

export default Home