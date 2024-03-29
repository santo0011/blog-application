import React, { useEffect } from 'react';
import { BsFillPeopleFill } from "react-icons/bs";
import { FaRegCaretSquareRight, FaRegUser, FaTag } from "react-icons/fa";
import { Link } from "react-router-dom";
import Chart from "react-apexcharts";


const DashboradIndex = () => {

    const chartOptions = {
        series: [
            {
                name: "Visitor",
                data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 70, 25, 150]
            },
            {
                name: "Sales",
                data: [10, 20, 15, 25, 30, 40, 35, 45, 50, 60, 55, 70]
            },
        ],
        options: {
            color: ['#181ee8', '#181ee8'],
            chart: {
                background: 'transparent'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'soomth'
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apl', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            legend: {
                position: 'top'
            },
            grid: {
                show: 'false'
            }
        }
    }

    return (
        <div className='dashborad-main-content-elements'>
            <div className="dashborad-elements">
                <div className="cards">
                    <div className="single-card">
                        <div className="card_icon">
                            <BsFillPeopleFill />
                        </div>
                        <div className="card_info">
                            <h2>Santo Biswas</h2>
                            <span>Visitoes</span>
                        </div>
                    </div>
                    <Link className="single-card">
                        <div className="card_icon">
                            <BsFillPeopleFill />
                        </div>
                        <div className="card_info">
                            <h2>Santo Biswas</h2>
                            <span>Articles</span>
                        </div>
                    </Link>
                    <Link className="single-card">
                        <div className="card_icon">
                            <FaRegCaretSquareRight />
                        </div>
                        <div className="card_info">
                            <h2>Santo Biswas</h2>
                            <span>Categorys</span>
                        </div>
                    </Link>
                    <Link className="single-card">
                        <div className="card_icon">
                            <FaTag />
                        </div>
                        <div className="card_info">
                            <h2>Santo Biswas</h2>
                            <span>Tags</span>
                        </div>
                    </Link>
                    <Link to='/deshborad/all-sub-admin' className="single-card">
                        <div className="card_icon">
                            <FaRegUser />
                        </div>
                        <div className="card_info">
                            <h2>Santo Biswas</h2>
                            <span>Sub Admins</span>
                        </div>
                    </Link>
                </div>
                <div className="card-chart">
                    <Chart
                        options={chartOptions.options}
                        series={chartOptions.series}
                        type='bar'
                        height='100%'
                        width='100%'
                    />
                </div>
            </div>
        </div>
    )
}

export default DashboradIndex;