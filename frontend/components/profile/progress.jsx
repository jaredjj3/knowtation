import React from 'react';

class Progress extends React.Component {
  constructor(props) {
    super(props);

    this._drawChart = this._drawChart.bind(this);
    this._refreshChart = this._refreshChart.bind(this);
  }

  componentDidMount() {
    this._loadChart();
  }

  componentWillReceiveProps() {
    this._refreshChart();
  }

  render() {
    return(
      <div className="progress-container">
        <div id="chart-container" />
      </div>
    );
  }

  // private

  _loadChart() {
    const google = window.google;

    google.charts.load('current', { packages:['corechart']});
    google.charts.setOnLoadCallback(this._drawChart);
  }

  _refreshChart() {
    this._drawChart();
  }

  _drawChart() {
    const google = window.google;
    const { pageUser } = this.props;
    const { mappedLoops } = pageUser.givenLoops;

    const arrayData = [['days ago', 'loops']].concat(mappedLoops);
    const data = google.visualization.arrayToDataTable(arrayData);


    // $main-blue: #0061ff;
    const options = {
      curveType: 'function',
      legend: { position: 'left' },
      width: 900,
      height: 400,
      vAxis: { baselineColor: 'black' },
      hAxis: {
        title: 'days ago',
        direction: -1, // reverse axis
        format: '#',
        baselineColor: 'transparent',
        gridlines: { color: 'transparent' },
        minValue: 0,
        maxValue: 7
      },
      colors: ['#0061ff']
    };

    this.chart = this.chart || new google.visualization.LineChart(
      document.getElementById('chart-container')
    );

    this.chart.draw(data, options);
  }
}

export default Progress;
