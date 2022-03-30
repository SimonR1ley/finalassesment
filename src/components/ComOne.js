import React from 'react';
import axios from 'axios';
import {Bar, Pie, Line} from 'react-chartjs-2';
import { useState, useRef, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto'

ChartJS.register(ArcElement, Tooltip, Legend);

const ComOne = () => {

    const [failedInfo, setFailedInfo] = useState("");
    const [successInfo, setSuccessInfo] = useState("");

    const [shipOne, setShipOne] = useState("");
    const [shipTwo, setShipTwo] = useState("");
    const [shipThree, setShipThree] = useState("");
    const [shipFour, setShipFour] = useState("");

    const [shipOnekN, setShipOnekN] = useState();
    const [shipTwokN, setShipTwokN] = useState();
    const [shipThreekN, setShipThreekN] = useState();
    const [shipFourkN, setShipFourkN] = useState();


    const [chartInfo, setChartInfo] = useState([]);



    useEffect(() => {

        axios.get('https://api.spacexdata.com/v5/launches')
            .then((res) => {


                let data = res.data;
                let success = data.filter((item) => item.success === true).length;
                let fail = data.filter((item) => item.success === false).length;

                setChartInfo([success, fail]);

                const successData = 0;
                const failData = 0;

                for (let i = 0; i < data.length; i++) {
                    if (data[i].success === false) {
                       successData = successData + 1;
                    } else {
                        failData = failData + 1;
                    }
                }

                setFailedInfo(failData);
                setSuccessInfo(successData);

                console.log(failData);
            })


          


            let urlEnd = 'https://api.spacexdata.com/v4/rockets';

            axios.get(urlEnd)
            .then((response) => {

                // console.log(response.data[0].engines.thrust_sea_level);

                let shipOneskN = 0;
                let shipTwoskN = 0;
                let shipThreeskN = 0;
                let shipFourskN = 0;

                for(let i = 0; i < response.data.length; i++){
                    // console.log(response.data[i].engines.thrust_sea_level.kN);
                    setShipOne(response.data[0].name);
                    setShipTwo(response.data[1].name);
                    setShipThree(response.data[2].name);
                    setShipFour(response.data[3].name);

                    let shipOneskN = response.data[1].engines.thrust_sea_level.kN;
                    let shipTwoskN = response.data[2].engines.thrust_sea_level.kN;
                    let shipThreeskN = response.data[3].engines.thrust_sea_level.kN;
                    let shipFoursskN = response.data[4].engines.thrust_sea_level.kN;

                    setShipOnekN(shipOneskN);
                    setShipTwokN(shipTwoskN);
                    setShipThreekN(shipThreeskN);
                    setShipFourkN(shipFourskN);
                   
                }

                // console.log(response.data);
                
            })
            



            let urlEnd3 = 'https://api.spacexdata.com/v4/launches';

            axios.get(urlEnd3)
            .then((response) => {

                console.log(response.data[0].date_utc);

                const Dates = [];

                let E1 = response.filter((item) => item.success === 2006).length;
                let E2 = response.filter((item) => item.success === 2006).length;
                let E3 = response.filter((item) => item.success === 2006).length;
                let E4 = response.filter((item) => item.success === 2006).length;
                let E5 = response.filter((item) => item.success === 2006).length;
                let E6 = response.filter((item) => item.success === 2006).length;
                let E7 = response.filter((item) => item.success === 2006).length;
                let E8 = response.filter((item) => item.success === 2006).length;
                let E9 = response.filter((item) => item.success === 2006).length;
                let E10 = response.filter((item) => item.success === 2006).length;
                let E11 = response.filter((item) => item.success === 2006).length;
                let E12 = response.filter((item) => item.success === 2006).length;
                let E13 = response.filter((item) => item.success === 2006).length;
                let E14 = response.filter((item) => item.success === 2006).length;
                let E15 = response.filter((item) => item.success === 2006).length;
                let E16 = response.filter((item) => item.success === 2006).length;
                let E17 = response.filter((item) => item.success === 2006).length;


                

                setChartInfo([E1, E2, E3, E4, E5, E6, E7, E8, E9, E10, E11, E12, E13, E14, E15, E16, E17]);
               

                for(let i = 0; i < response.data.length; i++){
                  
                    var YearSnip = new Date(response.data[i].date_utc);
                    var year = YearSnip.getFullYear();
                   

                  

                    
                }
                setChartInfo(Dates)
                
                console.log(Dates);
              
                
            })
            

    }, [])


    const faledItems = failedInfo.map((item) => <ComTwo id={item.id} fname={item.flightName} fnum={item.flightNum} imgUrl={item.imgUrl} vidlink={item.videoUrl} />)
    const successItems = successInfo.map((item) => <ComTwo id={item.id} fname={item.flightName} fnum={item.flightNum} imgUrl={item.imgUrl} vidlink={item.videoUrl} />)



    const chartData = {

        labels: ['Success', 'Failiers'],
        datasets: [{
            label: 'Success/Fail for launches',
            data: successInfo, failedInfo,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    }


    return (
        <div>
            <h1 className='main-heading'>Space X: Overview</h1>

            <div className='componentInterior'>

            <div className='row'>


                    <div className='graph-one'>
                    <Pie data={chartData} />
                      
                     </div>

                    
                     <div className='graph-two'>
                     <div className="exCon chart">
                    <Bar
                        data={{
                            labels: [shipOne, shipTwo, shipThree],
                            
                            datasets: [
                                {
                                  label: shipOne,
                                  backgroundColor: ["#2b2b2b", '#222222'],
                                  borderColor: ["#2b2b2b", '#222222'],
                                  borderWidth: 1,
                                  data: [shipOnekN, 5]
                                },
                                {
                                  label: shipTwo,
                                  backgroundColor: ["#2b2b2b", '#222222'],
                                  borderColor: ["#2b2b2b", '#222222'],
                                  borderWidth: 1,
                                  data: [4, 7]
                                },
                                {
                                  label: shipThree,
                                  backgroundColor: ["#2b2b2b", '#222222'],
                                  borderColor: ["#2b2b2b", '#222222'],
                                  borderWidth: 1,
                                  data: [10,7]
                                },
                                {
                                  label: shipFour,
                                  backgroundColor: ["#2b2b2b", '#222222'],
                                  borderColor: ["#2b2b2b", '#222222'],
                                  borderWidth: 1,
                                  data: [6,9]
                                }
                              ]
                            
                        }}
                        height={400}
                        width={600}
                        options={{ maintainAspectRatio: false}}
                    />

                </div>
                     </div>


                    <div className='graph-three'>
                    <Line
                        data={{
                            labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
                            datasets: [{
                                label: '',
                                data: [chartInfo],
                                backgroundColor: [
                                    '#2b2b2b',
                                    '#222222',
                                ],
                                borderColor: [
                                    '#2b2b2b',
                                    '#222222',
                                ],
                                borderWidth: 3
                            },

                            ],
                        }}
                        height={400}
                        width={600}
                        options={{ maintainAspectRatio: false, }}
                    />
                    </div>


            </div>



            <div className='misson-con'></div>



            </div>

          

            </div>
    );
}

export default ComOne;
