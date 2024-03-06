'use client'

import Highcharts from 'highcharts';
import drilldown from 'highcharts/modules/drilldown';
import { useState, useEffect } from 'react'
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';

drilldown(Highcharts);
if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts);
}

const DrilldownChart = () => {
  const [majors, setMajors] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8008/majors')
       .then((response) => response.json())
       .then((data) => {
          setMajors(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
  }, []);
  const options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Analyze results from Major Questions'
    },
    subtitle: {
      align: 'left',
      text: 'Click the columns to view "Yes" response details for each major.'
    },
    xAxis: {
      type: 'category'
    },
    legend: {
      enabled: 'false'
    },
    plotOptions: {
      series: {
          borderWidth: 0,
          dataLabels: {
              enabled: true,
              format: '{point.y:.1f}%'
          }
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:12px">{series.name}</span>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
    series: [
      {
        name: 'Majors',
        colorByPoint: true,
        data: majors
      }
    ],
    credits: {
      enabled: false
    },
    events: {
      render: function() {
        const chart = this,
          group = chart.series[0].group,
          bBox = group.getBBox(),
          ratio = bBox.width / bBox.height;
        
        if(!chart.allowUpdate) {
          chart.allowUpdate = true;
          chart.setSize(null, (chart.plotSizeX + 20) / ratio, false);
          chart.allowUpdate = false;
        }
      }
    },
    drilldown: {
      breadcrumbs: {
          position: {
              align: 'right'
          }
      },
      series: [
        {
          name: 'Architectural Engineering',
          id: 'Architectural Engineering',
          data: [
            [
              'Question 1',
              0.1
            ],
            [
              'Question 2',
              0.3
            ],
            [
              'Question 3',
              0
            ],
            [
              'Question 4',
              0.5
            ],
            [
              'Question 5',
              0.1
            ]
          ]
        },
        {
          name: 'Bioengineering',
          id: 'Bioengineering',
          data: [
            [
              'Question 1',
              0.1
            ],
            [
              'Question 2',
              0.3
            ],
            [
              'Question 3',
              0
            ],
            [
              'Question 4',
              0.5
            ],
            [
              'Question 5',
              0.1
            ]
          ]
        },
        {
          name: 'Chemical Engineering',
          id: 'Chemical Engineering',
          data: [
            [
              'Question 1',
              0.1
            ],
            [
              'Question 2',
              0.3
            ],
            [
              'Question 3',
              0
            ],
            [
              'Question 4',
              0.5
            ],
            [
              'Question 5',
              0.1
            ]
          ]
        },
        {
          name: 'Computer Science',
          id: 'Computer Science',
          data: [
            [
              'Question 1',
              0.1
            ],
            [
              'Question 2',
              0.3
            ],
            [
              'Question 3',
              0
            ],
            [
              'Question 4',
              0.5
            ],
            [
              'Question 5',
              0.1
            ]
          ]
        },
        {
          name: 'Construction Engineering Management',
          id: 'Construction Engineering Management',
          data: [
            [
              'Question 1',
              0.1
            ],
            [
              'Question 2',
              0.3
            ],
            [
              'Question 3',
              0
            ],
            [
              'Question 4',
              0.5
            ],
            [
              'Question 5',
              0.1
            ]
          ]
        },
        {
          name: 'Electrical Engineering',
          id: 'Electrical Engineering',
          data: [
            [
              'Question 1',
              0.1
            ],
            [
              'Question 2',
              0.3
            ],
            [
              'Question 3',
              0
            ],
            [
              'Question 4',
              0.5
            ],
            [
              'Question 5',
              0.1
            ]
          ]
        },
        {
          name: 'Electrical and Computer Engineering',
          id: 'Electrical and Computer Engineering',
          data: [
            [
              'Question 1',
              0.1
            ],
            [
              'Question 2',
              0.3
            ],
            [
              'Question 3',
              0
            ],
            [
              'Question 4',
              0.5
            ],
            [
              'Question 5',
              0.1
            ]
          ]
        },
        {
          name: 'Ecological Engineering',
          id: 'Ecological Engineering',
          data: [
            [
              'Question 1',
              0.1
            ],
            [
              'Question 2',
              0.3
            ],
            [
              'Question 3',
              0
            ],
            [
              'Question 4',
              0.5
            ],
            [
              'Question 5',
              0.1
            ]
          ]
        },
        {
          name: 'Energy Systems Engineering',
          id: 'Energy Systems Engineering',
          data: [
            [
              'Question 1',
              0.1
            ],
            [
              'Question 2',
              0.3
            ],
            [
              'Question 3',
              0
            ],
            [
              'Question 4',
              0.5
            ],
            [
              'Question 5',
              0.1
            ]
          ]
        },
        {
          name: 'Engineering Science',
          id: 'Engineering Science',
          data: [
            [
              'Question 1',
              0.1
            ],
            [
              'Question 2',
              0.3
            ],
            [
              'Question 3',
              0
            ],
            [
              'Question 4',
              0.5
            ],
            [
              'Question 5',
              0.1
            ]
          ]
        },
        {
          name: 'Environmental Engineering',
          id: 'Environmental Engineering',
          data: [
            [
              'Question 1',
              0.1
            ],
            [
              'Question 2',
              0.3
            ],
            [
              'Question 3',
              0
            ],
            [
              'Question 4',
              0.5
            ],
            [
              'Question 5',
              0.1
            ]
          ]
        },
        {
          name: 'Industrial Engineering',
          id: 'Industrial Engineering',
          data: [
            [
              'Question 1',
              0.1
            ],
            [
              'Question 2',
              0.3
            ],
            [
              'Question 3',
              0
            ],
            [
              'Question 4',
              0.5
            ],
            [
              'Question 5',
              0.1
            ]
          ]
        },
        {
          name: 'Manufacturing Engineering',
          id: 'Manufacturing Engineering',
          data: [
            [
              'Question 1',
              0.1
            ],
            [
              'Question 2',
              0.3
            ],
            [
              'Question 3',
              0
            ],
            [
              'Question 4',
              0.5
            ],
            [
              'Question 5',
              0.1
            ]
          ]
        },
        {
          name: 'Mechanical Engineering',
          id: 'Mechanical Engineering',
          data: [
            [
              'Question 1',
              0.1
            ],
            [
              'Question 2',
              0.3
            ],
            [
              'Question 3',
              0
            ],
            [
              'Question 4',
              0.5
            ],
            [
              'Question 5',
              0.1
            ]
          ]
        },
        {
          name: 'Nuclear Engineering',
          id: 'Nuclear Engineering',
          data: [
            [
              'Question 1',
              0.1
            ],
            [
              'Question 2',
              0.3
            ],
            [
              'Question 3',
              0
            ],
            [
              'Question 4',
              0.5
            ],
            [
              'Question 5',
              0.1
            ]
          ]
        },
        {
          name: 'Outdoor Products',
          id: 'Outdoor Products',
          data: [
            [
              'Question 1',
              0.1
            ],
            [
              'Question 2',
              0.3
            ],
            [
              'Question 3',
              0
            ],
            [
              'Question 4',
              0.5
            ],
            [
              'Question 5',
              0.1
            ]
          ]
        },
        {
          name: 'Radiation Health Physics',
          id: 'Radiation Health Physics',
          data: [
            [
              'Question 1',
              0.1
            ],
            [
              'Question 2',
              0.3
            ],
            [
              'Question 3',
              0
            ],
            [
              'Question 4',
              0.5
            ],
            [
              'Question 5',
              0.1
            ]
          ]
        },
      ]
    }
  }
  return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </div>
    )
}

export default DrilldownChart;