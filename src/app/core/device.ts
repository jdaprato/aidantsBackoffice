import {IDevice} from '../models/device'
import { stat } from 'fs';

export class Device {
    private _device: IDevice = {} as IDevice

    constructor(state) {
        this._device.name = state.name;
        this._device.description = state.description;
        this._device.webSite = state.webSite;
        this._device.address = state.address;
        this._device.contact = state.contact;
        this._device.structure = state.structure;
    }

    public get device(){
        return this._device;
    }
}