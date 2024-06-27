import "./home.scss"
import { useEffect } from "react"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widgets/Widget"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"
import TableList from "../../components/table/TableList"

const Home = () => {
    useEffect(() => {
        const synchronizeHeights = () => {
            const featuredElement = document.querySelector('.featured');
            const chartElement = document.querySelector('.chart');
    
            if (featuredElement && chartElement) {
                const featuredComputedStyle = window.getComputedStyle(featuredElement);
                const featuredHeight = parseFloat(featuredComputedStyle.height);
    
                chartElement.style.height = `${featuredHeight}px`;
            }
        };
        synchronizeHeights();
        const handleResize = () => {
            synchronizeHeights();
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <div className='home'>
            <Sidebar />
            <div className="homeHomeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="users" />
                    <Widget type="products" />
                    <Widget type="orders" />
                    <Widget type="earnings" />
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