import { Cartesian3, Entity, ImageryLayer, Viewer } from 'cesium';
import { controlStatusType, optionType, pointType, newEntity } from './type';
export declare class cesiumService {
    containerId: string;
    options: optionType;
    viewer: Viewer | null;
    pointData: pointType[] | null;
    pointEntities: Entity[] | null;
    polygonEntities: Entity[] | null;
    screenSpaceEventHandler: void | null;
    constructor(containerId: string, options: optionType);
    initViewer(controlStatus: controlStatusType): Promise<boolean>;
    loadTileLayer(url: string): Promise<ImageryLayer | null>;
    addPoint(point: pointType, type?: string, changeType?: string): Promise<Entity | null>;
    clearEntity(key: string): Promise<void>;
    addPolygon(name: string): Entity | null;
    getPositionCartographic(): number[] | undefined;
    setCameraHeight(type: string): void;
    convertCartographic(cartesian: Cartesian3): Cartesian3;
    pointClickHandler(pickedObject: newEntity): void;
    polygonClickHandler(name: string): void;
    setInitialView(centerPosition: Cartesian3): void;
    destroy(): void;
}
