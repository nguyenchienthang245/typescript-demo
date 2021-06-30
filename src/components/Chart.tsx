// import Plot from "react-plotly.js";
import React, { useCallback, useState } from "react";
// import { Constants } from "../../common/utils/Constants";
// import { NumberUtils } from "../../common/utils/NumberUtils";
// import Tooltip from "./tooltip/Tooltip";
// import { HvEmptyState } from "@hv/uikit-react-core";
// import { Fail } from "@hv/uikit-react-icons";
// import { useTranslation } from "react-i18next";
// import { ChartCommonService } from "../../common/services/chart-common-service";
// import $ from "jquery";

// type ChartConfig = {
//   data: any[];
//   layout: any;
//   tooltipType: string;
// };

// export const Chart = ({
//   data,
//   layout,
//   tooltipType,
//   ...others
// }: ChartConfig) => {
//   const { t } = useTranslation();

//   const [isHover, setIsHover] = useState<boolean>(false);
//   const [coordinates, setCoordinates] = useState<{ x: number; y: number }>({
//     x: 0,
//     y: 0,
//   });
//   const [containerOffset, setContainerOffset] = useState<{
//     top: number;
//     left: number;
//     width: number;
//     height: number;
//   }>({
//     top: 0,
//     left: 0,
//     width: 0,
//     height: 0,
//   });

//   const [dataTooltip, setDataTooltip] = useState<{
//     title: string;
//     elements: any[];
//   }>({
//     title: "",
//     elements: [],
//   });
//   const [id] = useState<string>(Math.random().toString(36).substr(2, 9));

//   const onHover = useCallback((event: any) => {
//     const dataFromPoints: any = {
//       title: "",
//       elements: [],
//     };

//     dataFromPoints.title =
//       event?.points?.length > 0 ? event.points[0].x : undefined;
//     if (event?.points?.length > 0) {
//       event.points
//         .sort(
//           (i1: any, i2: any) => i1.curveNumber - i2.curveNumber // sort by data trace index
//         )
//         .forEach((point: any) => {
//           dataFromPoints.elements.push({
//             color:
//               point.data?.marker?.color ||
//               point.data?.line?.color ||
//               point.data.color,
//             label: point.data.name,
//             value: NumberUtils.formatNumber(point.y, undefined, true),
//           });
//         });
//     }
//     setDataTooltip(dataFromPoints);
//     setIsHover(true);
//   }, []);

//   const onUnHover = useCallback(() => {
//     setIsHover(false);
//   }, []);

//   const getOffset = (element: any, offset = { top: 0, left: 0 }) => {
//     const _containerOffset = $(element)?.offset() || { top: 0, left: 0 };

//     // if ($(element).parent() && !$(element).parent().hasClass("app-widget")) {
//     //   getOffset($(element).parent(), _containerOffset)
//     // }
//     return {
//       top: offset.top + _containerOffset.top,
//       left: offset.left + _containerOffset.left,
//     };
//   };

//   const onMouseMove = useCallback((event: any) => {
//     const _containerOffset = getOffset($(`#${id}`));

//     setContainerOffset({
//       top: _containerOffset.top,
//       left: _containerOffset.left,
//       width: $("#" + id)?.width() || 0,
//       height: $("#" + id)?.height() || 0,
//     });

//     setCoordinates({
//       x: event.clientX - _containerOffset.left,
//       y: event.clientY - _containerOffset.top,
//     });
//   }, []);

//   const getConfig = () => {
//     // tslint:disable-next-line:prefer-const
//     let config = {};
//     ChartCommonService.getOptionsConfig(config);

//     return config;
//   };

//   const redenderChart = () => {
//     return (
//       <div onMouseMove={onMouseMove} onMouseOut={onUnHover}>
//         <Plot
//           data={data}
//           layout={layout}
//           onHover={onHover}
//           config={getConfig()}
//           // onUnhover={onUnHover}
//           useResizeHandler={true}
//           {...others}
//         />
//       </div>
//     );
//   };

//   const isNoData = () => {
//     if (!data || data.length === 0) {
//       return true;
//     }

//     let countEmpty = 0;
//     data.forEach((item: any) => {
//       if (!item.x || !item.y ||
//         (item.x && item.x.length === 0) ||
//         (item.y && item.y.length === 0) ||
//         (item.values && item.value.length === 0)
//       ) {
//         countEmpty++;
//       }
//     });
//     return countEmpty === data.length;
//   };

//   const renderNodata = () => {
//     return (
//       <HvEmptyState
//         id="empty-state-minimal"
//         message={t("message.noData")}
//         icon={<Fail role="presentation" />}
//         className="widget-panel-container"
//         style={{ background: "transparent" }}
//       />
//     );
//   };

//   return (
//     <div
//       style={{
//         minHeight: !isNoData() ? "300px" : "72px",
//         position: "relative",
//       }}
//       id={id}
//     >
//       {!isNoData() ? (
//         <>
//           {isHover && (
//             <Tooltip
//               coordinates={coordinates}
//               data={dataTooltip}
//               useSingle={tooltipType === Constants.TOOLTIP_TYPE.LONG_TEXT}
//               refType={Constants.REF_TYPE_USE_TOOLTIP.CHART}
//               containerOffset={containerOffset}
//             />
//           )}
//           {redenderChart()}
//         </>
//       ) : (
//         renderNodata()
//       )}
//     </div>
//   );
// };
