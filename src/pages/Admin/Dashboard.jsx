import React from 'react';

//........
// import UserDashboard from '../components/UserDashboard';
// import RestaurentDashboard from '../components/RestaurentDashboard';
import styles from "./Dashboard.module.css"
import Sidebar from '../../components/Admin/Sidebar';


function Dashboard(props) {

    //render comp accoding to res like what's the TYPE in res 
    //dashboard of user
    // dashboard of restaurent
    return (
        <div className={styles.dashboard}>
            <Sidebar/>
            <div className={styles.dashboardmp}>
            <div className={styles.dashboardch}>
                <div className={styles.dashboardch1}>
                    <h1>Total Number Of Users</h1>
                    <p>uer count</p>
                </div>
                <div className={styles.dashboardch2}>
                    <h1>Total Number Of Restaurant</h1>
                    <p>restaurant count</p>
                </div>
                <div className={styles.dashboardch3}>
                    <h1> number of users Who got the coupon</h1>
                    <p>count</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Dashboard;