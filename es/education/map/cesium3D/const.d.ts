export declare const series: ({
    type: string;
    coordinateSystem: string;
    zlevel: number;
    lineStyle: {
        normal: {
            color: {
                type: string;
                x: number;
                y: number;
                x2: number;
                y2: number;
                colorStops: {
                    offset: number;
                    color: string;
                }[];
            };
            width: number;
            opacity: number;
            curveness: number;
            type?: undefined;
            dashOffset?: undefined;
            dashArray?: undefined;
        };
    };
    data: {
        fromName: string;
        toName: string;
        coords: number[][];
    }[];
    rippleEffect?: undefined;
    label?: undefined;
    itemStyle?: undefined;
} | {
    type: string;
    coordinateSystem: string;
    zlevel: number;
    lineStyle: {
        normal: {
            color: string;
            width: number;
            opacity: number;
            curveness: number;
            type: string;
            dashOffset: number;
            dashArray: number[];
        };
    };
    data: {
        fromName: string;
        toName: string;
        coords: number[][];
    }[];
    rippleEffect?: undefined;
    label?: undefined;
    itemStyle?: undefined;
} | {
    type: string;
    coordinateSystem: string;
    zlevel: number;
    rippleEffect: {
        brushType: string;
    };
    label: {
        normal: {
            show: boolean;
            position: string;
            color: string;
            formatter: string;
        };
    };
    itemStyle: {
        normal: {
            color: string;
        };
    };
    data: {
        name: string;
        value: number[];
    }[];
    lineStyle?: undefined;
})[];
