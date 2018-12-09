/**
 * @author yoyoyohamapi
 * @email softshot37@gmail.com
 * @create date 2018-12-09 17:12:25
 * @modify date 2018-12-09 17:12:25
 * @desc 数据类型定义
*/

/** 组件类型定义 */
export enum ComponentType {
  Button = 'button',
  Rate = 'rate',
  Image = 'image'
}

/** 组件 */
export interface Component<T = {[key: string]: any}> {
  x: number,
  y: number,
  type: ComponentType,
  group: number,
  layer: number,
  config: T
}

/** 分组 */
export interface Group {
  x: number,
  y: number
}

/** 页面 */
export interface Page {
  isDeleted: false,
  config: {
    [key: string]: any
  }
}

/** 页面配置 */
export interface PageConfig {
  backgroundImage?: string
}