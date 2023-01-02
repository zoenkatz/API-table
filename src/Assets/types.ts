export interface INodeAPIData {
  masked: boolean;
  name: string;
  pii: boolean;
  type: string;
}

export interface INodeResReq {
  body: INodeAPIData[];
  headers: INodeAPIData[];
  queryParams: INodeAPIData[];
  urlParams: INodeAPIData[];
}

export interface INodeAPIDataExtended extends INodeAPIData{
    sectionKey: string,
    index: number
}

export interface INodeResReqExtended extends INodeResReq{
    [key: string]: INodeAPIData[],
}

