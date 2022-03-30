import React from 'react';
import React from 'react';
import axios from 'axios';
import {Bar, Pie} from 'react-chartjs-2';
import { useState, useRef, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto'

ChartJS.register(ArcElement, Tooltip, Legend);

const ComTwo = () => {



    const [chartInfo, setChartInfo] = useState([]);
    const [failedInfo, setFailedInfo] = useState([]);
    const [successInfo, setSuccessInfo] = useState([]);

    const [showMissions, setShowMissions] = useState([]);

    const linkval = useRef();

    useEffect(() => {

        axios.get('https://api.spacexdata.com/v4/rockets')
            .then((res) => {

                console.log(res);

                let data = res.data;
                let success = data.filter((item) => item.success === true).length;
                let fail = data.filter((item) => item.success === false).length;

                setChartInfo([success, fail]);

                const successData = [];
                const failData = [];

                for (let i = 0; i < data.length; i++) {
                    if (data[i].success === false) {
                        failData.push({
                            id: data[i].id,
                            imgUrl: data[i].links.patch.small,
                            flightNum: data[i].flight_number,
                            flightName: data[i].n,
                            videoUrl: data[i].links.youtube_id
                        });
                    } else {
                        successData.push({
                            id: data[i].id,
                            imgUrl: data[i].links.patch.small,
                            flightNum: data[i].flight_number,
                            flightName: data[i].n,
                            videoUrl: data[i].links.youtube_id
                        });
                    }
                }

                setFailedInfo(failData);
                setSuccessInfo(successData);

            })
    }, [])
    return (
        <div>
            
        </div>
    );
}

export default ComTwo;
