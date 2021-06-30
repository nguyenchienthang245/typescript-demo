import React, { Component } from "react";
// // import PlotlyChart from "react-plotlyjs-ts";
// import { RouteComponentProps } from "react-router";
// import { WithTranslation } from "react-i18next";
// import { ChartCommonService } from "../../../common/services/chart-common-service";
// import $ from "jquery";
// import { Chart } from "../Chart";
// import { Grid } from "@material-ui/core";
// import { Constants } from "../../../common/utils/Constants";

// // Bar chart with benchmark line

// type HvBulletChartProps = {
//   chartData?: any;
//   chartType?: string;
//   bargap?: number;
//   showLoading?: boolean;
//   chartTitle?: string;
//   chartAnnotations?: any[];
// };

// type HvBulletChartState = {
//   dataChart: any[];
//   layoutChart: any;
// };

// class HvBulletChart extends Component<HvBulletChartProps, HvBulletChartState> {
//   intervalUpdate: any;

//   constructor(props: any) {
//     super(props);
//     this.state = {
//       dataChart: [],
//       layoutChart: {},
//     };
//   }

//   componentDidMount() {
//     this.setHorizontalLegendTarget();
//     this.onUpdateData();
//   }

//   componentDidUpdate(prevProps: any, prevState: any) {
//     if (prevProps.chartData !== this.props.chartData) {
//       this.onUpdateData();
//     }
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalUpdate);
//   }

//   // data = this.props.chartData;
//   // chartType = this.props.chartType;
//   // bargap = this.props.bargap;
//   // showLoading = this.props.showLoading;
//   // chartTitle = this.props.chartTitle
//   // chartAnnotations = this.props.chartAnnotations;
//   // annotationsFont = ChartCommonService.getFont();

//   chartOptions = {
//     showtooltip: true,
//   };

//   onUpdateData() {
//     const layoutChart: any = {
//       barmode: "overlay",
//       margin: {
//         t: 10,
//         r: 10,
//         l: 50,
//         b: 50,
//       },
//       xaxis: {
//         showline: true,
//         showticklabels: true,
//         fixedrange: true,
//       },
//       yaxis: {
//         showline: true,
//         fixedrange: true,
//         font: ChartCommonService.getFont(),
//         showticksuffix: "all",
//         title: {
//           text: this.props.chartTitle ? this.props.chartTitle : "",
//         },
//       },
//       hovermode: false,
//       showlegend: true,
//       bargap: this.props.bargap ? this.props.bargap : 0.5,
//       annotations: [],
//       height: 300,
//     };
//     this.props.chartAnnotations?.forEach((item) => {
//       const xValue = item.label + "";
//       const yValue = item.yValue;
//       const value = item.value;
//       layoutChart.annotations.push({
//         xref: "x1",
//         yref: "y1",
//         x: xValue,
//         y: yValue,
//         text: `<b>${value}%</b>`,
//         height: 35,
//         valign: "top",
//         font: ChartCommonService.getFont(),
//         showarrow: false,
//       });
//     });
//     // console.log(layoutChart)

//     ChartCommonService.getLayoutConfig(layoutChart);
//     ChartCommonService.getYAxisConfig(layoutChart.yaxis);
//     // const layoutForChart = layoutChart;
//     // console.log(layoutChart)
//     ChartCommonService.getOptionsConfig(this.chartOptions);
//     this.configTraceData();
//     this.setState({ layoutChart });
//     // this.layoutChart = layoutForChart;
//   }

//   setHorizontalLegendTarget(traceTarget?: any) {
//     // angular.element(document).ready(function (){
//     const indexTarget = this.props.chartData.indexOf(traceTarget);
//     const groups = $(React.createRef())?.find(".groups");
//     const groupTarget = groups[indexTarget];
//     $(groupTarget).find(".layers").css("transform", "translate(16px,0px)");
//     $(groupTarget).find(".scatterpts").css("transform", "rotate(-90deg)");
//     // })
//   }

//   configTraceData() {
//     const dataChart = this.props.chartData.map(
//       (trace: any, traceIndex: any) => {
//         if (trace.dataType === "target") {
//           trace.marker = {
//             // size : 50.5,
//             symbol:
//               this.props.chartType && this.props.chartType === "h"
//                 ? "line-ns-open"
//                 : "line-ew-open",
//             line: {
//               color: "#414141",
//               width: 2,
//             },
//             color: "#414141",
//           };

//           // Update trace target bullet chart config with common config
//           ChartCommonService.getTraceTargetBulletChartConfig(
//             trace,
//             this.props.chartType
//           );

//           if (this.props.chartType && this.props.chartType === "h") {
//             this.setHorizontalLegendTarget(trace);
//           }

//           this.updateTargetTrace(this.props.chartData, trace);

//           // tslint:disable-next-line:prefer-const
//           let count = 0;
//           this.intervalUpdate = setInterval(() => {
//             if (count > 10) {
//               clearInterval(this.intervalUpdate);
//             } else {
//               this.updateTargetTrace(dataChart, trace, count);
//             }
//           }, 500);
//         } else {
//           // update bullet chart config witd common config
//           ChartCommonService.getTraceBulletChartConfig(
//             trace,
//             this.props.chartType,
//             trace.dataType,
//             traceIndex
//           );
//           // Update chart config with common config
//           ChartCommonService.getTraceBarConfig(trace);
//         }
//         return trace;
//       }
//     );
//     // const dataChart = this.props.chartData;
//     this.setState({ dataChart });
//   }

//   updateTargetTrace(dataChart: any[], trace: any, count?: number) {
//     const barWidth =
//       $(".plotly-chart")
//         ?.find(".barlayer .point>path")
//         ?.get(0)
//         ?.getBoundingClientRect().width || 0;
//     const _markerSize = (barWidth * (78.9 - 24)) / 78.9;

//     if (trace.marker.size !== _markerSize) {
//       trace.marker.size = _markerSize; // I don't know why does it works :))

//       // Update chart layout
//       const _dataChart = dataChart.map((d: any) =>
//         d.dataType === trace.dataType ? trace : d
//       );
//       this.setState({ dataChart: _dataChart });

//       clearInterval(this.intervalUpdate);
//     } else if (count || count === 0) {
//       count++;
//     }
//   }

//   render() {
//     return (
//       <Grid className="plotly-chart">
//         <Chart
//           data={this.state.dataChart}
//           layout={this.state.layoutChart}
//           tooltipType={Constants.TOOLTIP_TYPE.MULTILINE}
//         />
//       </Grid>
//     );
//   }
// }

// export default HvBulletChart;
