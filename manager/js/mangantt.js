

var tasks = [
  {
    id: 'Task 1',
    name: 'Redesign website',
    start: '2016-12-28',
    end: '2016-12-31',
    progress: 20,
    dependencies: null
  }
]
var gantt = new Gantt("#chart_div", tasks);
