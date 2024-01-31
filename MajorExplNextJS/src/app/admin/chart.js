'use client'

import Highcharts from 'highcharts';
import drilldown from 'highcharts/modules/drilldown';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';

drilldown(Highcharts);
if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts);
}

const DrilldownChart = () => {

  const options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Analyze results'
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
        data: [
          {
            name: 'Architectural Engineering',
            y: 10,
            drilldown: 'Architectural Engineering'
          },
          {
            name: 'Bioengineering',
            y: 12,
            drilldown: 'Bioengineering'
          },
          {
            name: 'Chemical Enginering',
            y: 4,
            drilldown: 'Chemical Enginering'
          },
          {
            name: 'Computer Science',
            y: 25,
            drilldown: 'Computer Science'
          },
          {
            name: 'Construction Engineering Management',
            y: 2,
            drilldown: 'Construction Engineering Management'
          },
          {
            name: 'Ecological Engineering',
            y: 2,
            drilldown: 'Ecological Engineering'
          },
          {
            name: 'Electrical Engineering',
            y: 15,
            drilldown: 'Electrical Engineering'
          },
          {
            name: 'Electrical and Computer Engineering',
            y: 10,
            drilldown: 'Electrical and Computer Engineering'
          },
          {
            name: 'Energy Systems Engineering',
            y: 2,
            drilldown: 'Energy Systems Engineering'
          },
          {
            name: 'Engineering Science',
            y: 4,
            drilldown: 'Engineering Science'
          },
          {
            name: 'Environmental Engineering',
            y: 2,
            drilldown: 'Environmental Engineering'
          },
          {
            name: 'Industrial Engineering',
            y: 2,
            drilldown: 'Industrial Engineering'
          },
          {
            name: 'Manufacturing Engineering',
            y: 3,
            drilldown: 'Manufacturing Engineering'
          },
          {
            name: 'Mechanical Engineering',
            y: 5,
            drilldown: 'Mechanical Engineering'
          },
          {
            name: 'Nuclear Engineering',
            y: 1,
            drilldown: 'Nuclear Engineering'
          },
          {
            name: 'Outdoor Products',
            y: 0.5,
            drilldown: 'Outdoor Products'
          },
          {
            name: 'Radiation Health Physics',
            y: 0.5,
            drilldown: 'Radiation Health Physics'
          },
          {
            name: 'Other',
            y: 0,
            drilldown: null
          }
        ]
      }
    ],
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