import React, { useEffect, useState } from 'react'
import './Static.scss'
import Highcharts from 'highcharts'
import variablePie from 'highcharts/modules/variable-pie';
import HighchartsReact from 'highcharts-react-official'
import Card from '../components/Card/Card';
 //options 
variablePie(Highcharts);
const Static = () => {
  const options = {
    chart: {
      type: 'variablepie',
    },
    title: {
      text: 'Total Employéé 1800',
      align: 'center',
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        'Area (square km): <b>{point.y}</b><br/>' +
        'Population density (people per square km): <b>{point.z}</b><br/>',
    },
    series: [{
      minPointSize: 10,
      innerSize: '50%',
      zMin: 0,
      name: 'countries',
      borderRadius: 5,
      data: [{
        name: 'Restaurants',
        y: 505992,
        z: 92,
      }, {
        name: 'House Keeping',
        y: 551695,
        z: 119,
      }, {
        name: 'Poland',
        y: 312679,
        z: 121,
      }, {
        name: 'Mantenance',
        y: 78865,
        z: 136,
      }, {
        name: 'Reciption',
        y: 301336,
        z: 200,
      }, {
        name: 'Security',
        y: 41284,
        z: 213,
      }, {
        name: 'Contabless',
        y: 357000,
        z: 350,
      }],
      colors: [
        '#93c5fd',
        '#60a5fa',
        '#3b82f6',
        '#2563eb',
        '#1d4ed8',
        '#1e40af',
        '#172554',
      ],
    }],
  };
  const options2 = {
    chart: {
      zoomType: 'xy',
    },
    title: {
      text: 'Income VS Passive',
      align: 'center',
    },
    subtitle: {
      text: '',
      align: 'left',
    },
    xAxis: [
      {
        categories: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        crosshair: true,
      },
    ],
    yAxis: [
      {
        labels: {
          format: '{value}°C',
          style: {
            color: 'blue',
          },
        },
        title: {
          text: 'Temperature',
          style: {
            color: 'red',
          },
        },
        opposite: true,
      },
      {
        gridLineWidth: 0,
        title: {
          text: 'Rainfall',
          style: {
            color: 'red',
          },
        },
        labels: {
          format: '{value} mm',
          style: {
            color: 'red',
          },
        },
      },
      {
        gridLineWidth: 0,
        title: {
          text: 'Sea-Level Pressure',
          style: {
            color: 'red',
          },
        },
        labels: {
          format: '{value} mb',
          style: {
            color: 'red',
          },
        },
        opposite: true,
      },
    ],
    tooltip: {
      shared: true,
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      x: 80,
      verticalAlign: 'top',
      y: 55,
      floating: true,
      backgroundColor: '#fff' || 'rgba(255,255,255,0.25)',
    },
    series: [
      {
        name: 'Rainfall',
        type: 'column',
        yAxis: 1,
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        tooltip: {
          valueSuffix: ' mm',
        },
      },
      {
        name: 'Sea-Level Pressure',
        type: 'spline',
        yAxis: 2,
        data: [1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2, 1013.1, 1016.9, 1018.2, 1016.7],
        marker: {
          enabled: false,
        },
        dashStyle: 'shortdot',
        tooltip: {
          valueSuffix: ' mb',
        },
      },
      {
        name: 'Temperature',
        type: 'spline',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
        tooltip: {
          valueSuffix: ' °C',
        },
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              floating: false,
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
              x: 0,
              y: 0,
            },
            yAxis: [
              {
                labels: {
                  align: 'right',
                  x: 0,
                  y: -6,
                },
                showLastLabel: false,
              },
              {
                labels: {
                  align: 'left',
                  x: 0,
                  y: -6,
                },
                showLastLabel: false,
              },
              {
                visible: false,
              },
            ],
          },
        },
      ],
    },
  }
  const [styleCard, setStyleCard] = useState({ width: '23%',margin:'0px' });
  useEffect(() => {
    const mediaQuerySmallXS = window.matchMedia('(max-width: 600px)');
    const mediaQuerySmall = window.matchMedia('(max-width: 768px)');
    const mediaQueryMediumMin = window.matchMedia('(min-width: 769px)');
    const mediaQueryMediumMax = window.matchMedia('(max-width: 1024px)');
    const mediaQueryLgMin = window.matchMedia('(min-width: 1024px)');
    const mediaQueryLgMax = window.matchMedia('(max-width: 1280px)');

    const handleResize = () => {
      if(mediaQuerySmallXS.matches) {
        setStyleCard({ width: '98%',margin:'0px auto' });
      }
      else if (mediaQuerySmall.matches) {
        setStyleCard({ width: '48%',margin:'0' }); // Adjust this value as needed for smaller screens
      }
      else if(mediaQueryMediumMin.matches && mediaQueryMediumMax.matches){
        setStyleCard({ width: '32%',margin:'0' }); // Adjust this value as needed for smaller screens
      }
      else if(mediaQueryLgMin.matches && mediaQueryLgMax.matches){
        setStyleCard({ width: '32%',margin:'0' }); // Adjust this value as needed for smaller screens
      }
      else {
        setStyleCard({ width: '25.5%',margin:'0' });
      }
    };

    // Initial check
    handleResize();

    // Add event listener for resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures that the effect runs once on mount


  return (
    <div className='m-2 flex gap-3 w-full flex-wrap  h-full'>
    {/* <HighchartsReact
      highcharts={Highcharts}
      options={options}
    /> */}
    <Card styles={{...styleCard}} className=' flex  '>
      <div className=' content p-2'>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          containerProps={{style: {width:'100%',height:'200px'}}}
        />
      </div>
      <div className=' p-2'>
        <ul className=' flex    items-center flex-wrap justify-between'>
          <li style={{width:'49%'}} className=' my-1  flex gap-2 items-center '>
            <span style={{background:'#bae6fd'}} className='w-8 h-4'></span>
            <span className=' text-xs'>Restaurant</span>
          </li>
          <li style={{width:'49%'}} className=' flex my-1 gap-2 items-center '>
            <span style={{background:'#7dd3fc'}} className='w-8 h-4 '></span>
            <span className=' text-xs'>House Keeping</span>
          </li>
          <li style={{width:'49%'}} className=' flex my-1 gap-2 items-center '>
            <span style={{background:'#38bdf8'}} className='w-8 h-4 '></span>
            <span className=' text-xs'>Security</span>
          </li>
          <li style={{width:'49%'}} className=' flex my-1 gap-2 items-center '>
            <span style={{background:'#0ea5e9'}} className='w-8 h-4 '></span>
            <span className=' text-xs'>Reciption</span>
          </li>
          <li style={{width:'49%'}} className=' flex my-1 gap-2 items-center '>
            <span style={{background:'#0284c7'}} className='w-8 h-4 '></span>
            <span className=' text-xs'>Contable</span>
          </li>
          <li style={{width:'49%'}} className=' flex my-1 gap-2 items-center '>
            <span style={{background:'#0369a1'}} className='w-8 h-4 '></span>
            <span className=' text-xs'>Manager</span>
          </li>
          <li style={{width:'49%'}} className=' flex my-1 gap-2 items-center '>
            <span style={{background:'#075985'}} className='w-8 h-4 '></span>
            <span className=' text-xs'>Mantenance</span>
          </li>
        </ul>
      </div>
    </Card>
    <Card styles={{...styleCard}} className=' w-[25%]'>
      <HighchartsReact 
        highcharts={Highcharts} 
        options={options2} 
        containerProps={{style: {height:'360px'}}}
      />
    </Card>
    <Card styles={{...styleCard}} className=' w-[25%]'>
      <p>Hello Fucking Card</p>
    </Card>
    <Card styles={{width:'20%'}} className='  bg-red-500 relative w-[25%] hidden xl:flex'>
      <div className=' absolute top-0 left-0 w-full   bg-green-500' style={{height:'90vh'}}>
        <p>kjdfkkjdjf</p>
      </div>
    </Card>
    <Card styles={{...styleCard}} className=' w-[25%]'>
      <p>Hello Fucking Card</p>
    </Card>
    <Card styles={{...styleCard}} className=' w-[25%]'>
      <p>Hello Fucking Card</p>
    </Card>
    <Card styles={{...styleCard}} className=' w-[25%]'>
      <p>Hello Fucking Card</p>
    </Card>
    </div>
  )
}

export default Static