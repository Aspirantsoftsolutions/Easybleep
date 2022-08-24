import { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5radar from "@amcharts/amcharts5/radar";

import "./RadarChart.scss"

const RadarChart = (props) => {
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



        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        // Create chart
        // https://www.amcharts.com/docs/v5/charts/radar-chart/
        var chart = root.container.children.push(am5radar.RadarChart.new(root, {
            panX: false,
            panY: false,
            wheelX: "panX",
            wheelY: "zoomX",
            innerRadius: am5.percent(20),
            startAngle: 180,
            endAngle: 360
        }));


        // Data
        var data = [

            {
                category: "Saturday",
                value: 68,
                full: 100,
                columnSettings: {
                    fill: '#564600'
                }
            },
            {
                category: "Friday",
                value: 68,
                full: 100,
                columnSettings: {
                    fill: '#adc9fb'
                }
            },
            {
                category: "Thursday",
                value: 68,
                full: 100,
                columnSettings: {
                    fill: '#ff612d'
                }
            },
            {
                category: "Wednesday",
                value: 68,
                full: 100,
                columnSettings: {
                    fill: '#3d0779'
                }
            },
            {
                category: "Tuesday",
                value: 92,
                full: 100,
                columnSettings: {
                    fill: '#ff9505'
                }
            },
            {
                category: "Monday",
                value: 35,
                full: 100,
                columnSettings: {
                    fill: '#3898ff'
                }
            },
            {
                category: "Sunday",
                value: 80,
                full: 100,
                columnSettings: {
                    fill: '#ffba03'
                }
            },

        ];

        // Add cursor
        // https://www.amcharts.com/docs/v5/charts/radar-chart/#Cursor
        var cursor = chart.set("cursor", am5radar.RadarCursor.new(root, {
            behavior: "zoomX"
        }));

        cursor.lineY.set("visible", false);

        // Create axes and their renderers
        // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
        var xRenderer = am5radar.AxisRendererCircular.new(root, {
            //minGridDistance: 50
        });


        xRenderer.grid.template.setAll({
            forceHidden: true
        });

        var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
            renderer: xRenderer,
            min: 0,
            max: 100,
            strictMinMax: true,
           // numberFormat: "#'%'",
            tooltip: am5.Tooltip.new(root, {})
        }));


        var yRenderer = am5radar.AxisRendererRadial.new(root, {
            minGridDistance: 10
        });

        yRenderer.labels.template.
        setAll({
            centerX: am5.p100,
            fontWeight: "0",
            fontSize: 0,
            templateField: ""
        });

        yRenderer.grid.template.setAll({
            forceHidden: true
        });

        var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
            categoryField: "category",
            renderer: yRenderer
        }));

        yAxis.data.setAll(data);


        // Create series
        // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
        var series1 = chart.series.push(am5radar.RadarColumnSeries.new(root, {
            xAxis: xAxis,
            yAxis: yAxis,
            clustered: false,
            valueXField: "full",
            categoryYField: "category",
            fill: root.interfaceColors.get("alternativeBackground")
        }));

        series1.columns.template.setAll({
            width: am5.p100,
            fillOpacity: 0.08,
            strokeOpacity: 0,
            cornerRadius: 20
        });

        series1.data.setAll(data);


        var series2 = chart.series.push(am5radar.RadarColumnSeries.new(root, {
            xAxis: xAxis,
            yAxis: yAxis,
            clustered: false,
            valueXField: "value",
            categoryYField: "category"
        }));

        series2.columns.template.setAll({
            width: am5.p100,
            strokeOpacity: 0,
            tooltipText: "{category}: {valueX}%",
            cornerRadius: 20,
            templateField: "columnSettings"
        });

        series2.data.setAll(data);

        // Animate chart and series in
        // https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation
        series1.appear(1000);
        series2.appear(1000);
        chart.appear(1000, 100);
    }


    return (
        <>
            <div className="" id={chartId} style={{ width: "100%", height: "250px" }}> </div>
            <div className="secblock">0 min 6 sec</div>
            <div className="avgblock">Avg.processing Time</div>
            
        </>
    )
}

export default RadarChart;