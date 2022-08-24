
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5radar from "@amcharts/amcharts5/radar";
import { useEffect } from "react";

const Linechart = (props) => {
    const chartId = "chartDiv-" + props.id;
    useEffect(() => {

        let root = am5.Root.new(chartId);

        root.current = root;
        loadChart(root)
        return () => {
            root.dispose();
        };
    }, []);

    const loadChart = (root) => {
        root.setThemes([
            am5themes_Animated.new(root)
        ]);


        // Create chart
        // https://www.amcharts.com/docs/v5/charts/xy-chart/
        var chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: true,
            panY: true,
            wheelX: "panX",
            wheelY: "zoomX",
            layout: root.verticalLayout,
            pinchZoomX: true
        }));

        // Add cursor
        // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
        var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
            behavior: "none"
        }));
        cursor.lineY.set("visible", false);

        var colorSet = am5.ColorSet.new(root, {});

        // The data
        var data = [
            {
                year: "Mon",
                value: 23.5,
                strokeSettings: {
                    stroke: colorSet.getIndex(0)
                },
                fillSettings: {
                    fill: colorSet.getIndex(0),
                },
                bulletSettings: {
                    fill: colorSet.getIndex(0)
                }
            },
            {
                year: "Tue",
                value: 26,
                bulletSettings: {
                    fill: colorSet.getIndex(0)
                }
            },
            {
                year: "Wed",
                value: 30,
                bulletSettings: {
                    fill: colorSet.getIndex(0)
                }
            },
            {
                year: "Thu",
                value: 20,
                bulletSettings: {
                    fill: colorSet.getIndex(0)
                }
            },
            {
                year: "Fri",
                value: 30,
                strokeSettings: {
                    stroke: colorSet.getIndex(3)
                },
                fillSettings: {
                    fill: colorSet.getIndex(3),
                },
                bulletSettings: {
                    fill: colorSet.getIndex(3)
                }
            },
            {
                year: "Sat",
                value: 30,
                bulletSettings: {
                    fill: colorSet.getIndex(3)
                }
            },
            {
                year: "Sun",
                value: 31,
                bulletSettings: {
                    fill: colorSet.getIndex(3)
                }
            },

        ];

        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        var xRenderer = am5xy.AxisRendererX.new(root, {});
        xRenderer.grid.template.set("location", 0.5);
        xRenderer.labels.template.setAll({
            location: 0.5,
            multiLocation: 0.5
        });

        var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
            categoryField: "year",
            renderer: xRenderer,
            tooltip: am5.Tooltip.new(root, {})
        }));

        xAxis.data.setAll(data);

        var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            maxPrecision: 0,
            renderer: am5xy.AxisRendererY.new(root, {})
        }));

        var series = chart.series.push(am5xy.LineSeries.new(root, {
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            categoryXField: "year",
            tooltip: am5.Tooltip.new(root, {
                labelText: "{valueY}",
                dy: -5
            })
        }));

        series.strokes.template.setAll({
            templateField: "strokeSettings",
            strokeWidth: 2
        });

        series.fills.template.setAll({
            visible: true,
            fillOpacity: 0.5,
            templateField: "fillSettings"
        });


        series.bullets.push(function () {
            return am5.Bullet.new(root, {
                sprite: am5.Circle.new(root, {
                    templateField: "bulletSettings",
                    radius: 5
                })
            });
        });

        series.data.setAll(data);
        series.appear(1000);

        // Add scrollbar
        // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
        chart.set("scrollbarX", am5.Scrollbar.new(root, {
            orientation: "horizontal",
            marginBottom: 20
        }));

        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        chart.appear(1000, 100);
    }

    return (
        <>
            <div className="" id={chartId} style={{ width: "100%", height: "500px" }}> </div>
        </>
    )
}

export default Linechart