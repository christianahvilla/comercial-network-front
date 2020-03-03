import React from 'react';
import { Chart, PieChart } from 'devextreme-react';
import {
    CommonSeriesSettings, SeriesTemplate, Title, Series, Connector,
} from 'devextreme-react/chart';
import { Label, Tooltip } from 'devextreme-react/bar-gauge';

const DefaultChart = (props) => {
    const {
        data,
        type,
        title,
        subTitle,
        architectureSources,
    } = props;

    const series = () => {
        return (architectureSources ? (architectureSources.map((item) => {
            return <Series key={item.value} valueField={item.value} name={item.name} />;
        })) : <SeriesTemplate nameField="argument" />);
    };

    const toggleVisibility = (item) => {
        return item.isVisible() ? item.hide() : item.show();
    };

    const pointClickHandler = (e) => {
        toggleVisibility(e.target);
    };

    const legendClickHandler = (e) => {
        const arg = e.target;
        const item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

        toggleVisibility(item);
    };

    const customizeText = (arg) => {
        return `${arg.valueText} (${arg.percentText})`;
    };

    const customizeTooltip = (arg) => {
        return { text: `${arg.seriesName}: ${arg.valueText}` };
    };

    return (type === 'pie'
        ? (
            <PieChart
                dataSource={data}
                palette="Soft Blue"
                onPointClick={pointClickHandler}
                onLegendClick={legendClickHandler}
            >
                <Series
                    argumentField="argument"
                    valueField="value"
                >
                    <Label
                        visible
                        customizeText={customizeText}
                    >
                        <Connector visible width={1} />
                    </Label>
                </Series>
                <Title text={title} subtitle={subTitle} />
            </PieChart>
        )
        : (
            <Chart
                palette="Soft Blue"
                dataSource={data}
            >
                <CommonSeriesSettings
                    argumentField="argument"
                    valueField="value"
                    type={type}
                    ignoreEmptyPoints
                />
                {series()}
                <Title text={title} subtitle={subTitle} />
                <Tooltip
                    enabled
                    location="edge"
                    customizeTooltip={customizeTooltip}
                />
            </Chart>
        )
    );
};

export default DefaultChart;
