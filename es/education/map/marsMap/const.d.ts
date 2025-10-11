export declare const defaultMapOptions: {
    crs: {
        code: string;
        proj: string;
        resolutions: number[];
        origin: number[];
    };
    minZoom: number;
    maxZoom: number;
    zoom: number;
    center: {
        lng: number;
        lat: number;
    };
    basemaps: {
        name: string;
        type: string;
        url: string;
        show: boolean;
    }[];
    operationallayers: never[];
    control: {
        scale: boolean;
        locationBar: {
            template: string;
        };
        zoom: {
            position: string;
        };
        toolBar: {
            position: string;
        };
    };
};
