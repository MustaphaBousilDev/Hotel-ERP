import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Highcharts from 'highcharts'
import variablePie from 'highcharts/modules/variable-pie';
import HighchartsReact from 'highcharts-react-official'
import Static from 'static_all/Static'
// Initialize the variablePie module
variablePie(Highcharts);
const Admin = () => {
  const { t, i18n } = useTranslation(['home','main']);
  const onClickLanguageChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language);//change the language
  }
  //options 
  const options = {
    chart: {
      type: 'variablepie',
    },
    title: {
      text: 'Countries compared by population density and total area, 2022.',
      align: 'left',
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        'Area (square km): <b>{point.y}</b><br/>' +
        'Population density (people per square km): <b>{point.z}</b><br/>',
    },
    series: [{
      minPointSize: 10,
      innerSize: '20%',
      zMin: 0,
      name: 'countries',
      borderRadius: 5,
      data: [{
        name: 'Spain',
        y: 505992,
        z: 92,
      }, {
        name: 'France',
        y: 551695,
        z: 119,
      }, {
        name: 'Poland',
        y: 312679,
        z: 121,
      }, {
        name: 'Czech Republic',
        y: 78865,
        z: 136,
      }, {
        name: 'Italy',
        y: 301336,
        z: 200,
      }, {
        name: 'Switzerland',
        y: 41284,
        z: 213,
      }, {
        name: 'Germany',
        y: 357114,
        z: 235,
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

  return (
    <div className=' relative bg-gray-50' id="dashboard">
    {/* <select onChange={onClickLanguageChange}>
        <option value='en'>English</option>
        <option value='es'>Spanish</option>
        <option value='fr'>French</option>
    </select>
    <div className="paraStyle">
      {t("line1", {ns: ['main','home']})} <br/>
      {t("line2", {ns: ['main','home']})} <br/>
      {t("line3", {ns: ['main','home']})} <br/>
    </div> */}
    <Static/>
    </div>
  )
}

export default Admin