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
        '#4caefe',
        '#3dc3e8',
        '#2dd9db',
        '#1feeaf',
        '#0ff3a0',
        '#00e887',
        '#23e274',
      ],
    }],
  };
  const [styleCard, setStyleCard] = useState({ width: '23%',margin:'0px' });
  useEffect(() => {
    const mediaQuerySmallXS = window.matchMedia('(max-width: 600px)');
    const mediaQuerySmall = window.matchMedia('(max-width: 768px)');
    const mediaQueryMediumMin = window.matchMedia('(min-width: 769px)');
    const mediaQueryMediumMax = window.matchMedia('(max-width: 1500px)');

    const handleResize = () => {
      if(mediaQuerySmallXS.matches) {
        setStyleCard({ width: '100%',margin:'0px auto' });
      }
      else if (mediaQuerySmall.matches) {
        setStyleCard({ width: '49%',margin:'0' }); // Adjust this value as needed for smaller screens
      }
      else if(mediaQueryMediumMin.matches && mediaQueryMediumMax.matches){
        setStyleCard({ width: '32%',margin:'0' }); // Adjust this value as needed for smaller screens
      }
      else {
        setStyleCard({ width: '23%',margin:'0' });
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
    <div className='m-2 flex gap-3 w-full flex-wrap bg-red-500 h-full'>
    {/* <HighchartsReact
      highcharts={Highcharts}
      options={options}
    /> */}
    <Card styles={{...styleCard}} className=' flex  '>
      <div className=' content p-2'>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          containerProps={{style: {width:'100%',height:'250px'}}}
        />
      </div>
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