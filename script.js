const chartContainer = document.getElementById('chart-container');
const buttons = document.querySelectorAll('nav button');
const charts = document.querySelectorAll('.chart');

const chartConfigs = {
    chart1: { url: "https://public.tableau.com/views/Diwin-2431042/BarChart?:embed=y&:display_count=yes", elementId: "chart1" },
    chart2: { url: "https://public.tableau.com/views/Diwin-2431042/LineChart?:embed=y&:display_count=yes", elementId: "chart2" },
    chart3: { url: "https://public.tableau.com/views/Diwin-2431042/PieChart?:embed=y&:display_count=yes", elementId: "chart3" },
    chart4: { url: "https://public.tableau.com/views/Diwin-2431042/MapChart?:embed=y&:display_count=yes", elementId: "chart4" },
    chart5: { url: "https://public.tableau.com/views/Diwin-2431042/ScatterPlot?:embed=y&:display_count=yes", elementId: "chart5" },
    chart6: { url: "https://public.tableau.com/views/Diwin-2431042/BubbleChart?:embed=y&:display_count=yes", elementId: "chart6" },
    chart7: { url: "https://public.tableau.com/views/Diwin-2431042/TreeMap?:embed=y&:display_count=yes", elementId: "chart7" },
    chart8: { url: "https://public.tableau.com/views/Diwin-2431042/WordCloud?:embed=y&:display_count=yes", elementId: "chart8" },
    chart9: { url: "https://public.tableau.com/views/Diwin-2431042/LollypopChart?:embed=y&:display_count=yes", elementId: "chart9" },
    chart10: { url: "https://public.tableau.com/views/Diwin-2431042/BoxPlot?:embed=y&:display_count=yes", elementId: "chart10" },
    chart11: { url: "https://public.tableau.com/views/Diwin-2431042/Histogram?:embed=y&:display_count=yes", elementId: "chart11" },
    chart12: { url: "https://public.tableau.com/views/Diwin-2431042/GanttChart?:embed=y&:display_count=yes", elementId: "chart12" },
    chart13: { url: "https://public.tableau.com/views/Diwin-2431042/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link", elementId: "chart13" }
};

let tableauVizInstances = {};

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedId = button.dataset.chart;

    charts.forEach(chart => chart.classList.remove('active'));
    const selectedDiv = document.getElementById(selectedId);
    selectedDiv.classList.add('active');

    if (!tableauVizInstances[selectedId]) {
      const config = chartConfigs[selectedId];
      const vizOptions = {
        hideTabs: true,
        width: "100%",
        height: "800px"
      };
      tableauVizInstances[selectedId] = new tableau.Viz(selectedDiv, config.url, vizOptions);
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const defaultChartId = "chart13";
  const defaultDiv = document.getElementById(defaultChartId);
  defaultDiv.classList.add('active');

  const config = chartConfigs[defaultChartId];
  const vizOptions = {
    hideTabs: true,
    width: "100%",
    height: "800px"
  };

  tableauVizInstances[defaultChartId] = new tableau.Viz(defaultDiv, config.url, vizOptions);
});


