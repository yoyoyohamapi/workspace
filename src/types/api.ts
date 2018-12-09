/**
 * @author yoyoyohamapi
 * @email softshot37@gmail.com
 * @create date 2018-12-09 17:12:08
 * @modify date 2018-12-09 17:12:08
 * @desc API 类型定义
*/
import { ComponentType } from './data'

/** 获得站点配置 Request */
export type GetSiteSettingReq = {
  uid: number
}

/** 获得站点配置 Response */
export type GetSiteSettingResp = {
  type: ComponentType,
  x: number,
  y: number,
  group: 1,
  layer: 1,
  config: {
    opacity: 0.5
  }
}[]
