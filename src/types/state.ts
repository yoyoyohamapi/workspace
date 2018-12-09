/**
 * @author yoyoyohamapi
 * @email softshot37@gmail.com
 * @create date 2018-12-09 17:48:21
 * @modify date 2018-12-09 17:48:21
 * @desc 状态设计
*/
import { LoadingState, ErrorState } from '@reobservable/core'
import { Component, Page, Group } from './data'

/** 工作台状态 */
export interface WorkspaceState {
  /** 组件列表 */
  components: Component[],
  /** 分组列表 */
  groups: Group[],
  /** 页面列表 */
  pages: Page[],
  /** 当前选中组件 */
  activeComponentIdxs: number[],
  /** 当前选择页面 */
  activePageIdx: number | null,
  /** 当前选中分组 */
  activeGroupIdxs: number[]
}

/** 状态 */
export interface State {
  workspace: WorkspaceState,
  loading: LoadingState,
  error: ErrorState
}
