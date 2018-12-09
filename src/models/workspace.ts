/**
 * @author yoyoyohamapi
 * @email softshot37@gmail.com
 * @create date 2018-12-09 17:13:14
 * @modify date 2018-12-09 17:13:14
 * @desc workspace 模型配置
*/
import { Model } from '@reobservable/core'
import { WorkspaceState, State } from '../types/state'

const model: Model<WorkspaceState, State> = {
  name: 'workspace',
  state: {
    components: [],
    pages: [],
    groups: [],
    activeComponentIdxs: [],
    activeGroupIdxs: [],
    activePageIdx: null,
  },
  reducers: {
    addComponent(state, payload) {
      return state
    },
    removeComponent(state, payload) {
      return state
    },
    updateComponent(state, payload) {
      return state
    },
    addPage(state, payload) {
      return payload
    },
    removePage(state, payload) {
      return state
    },
    updatePage(state, payload) {
      return state
    },
    group(state, payload) {
      return state
    },
    ungroup(state, payload) {
      return state
    },
    toFront(state, payload) {
      return state
    },
    toBack(state, payload) {
      return state
    },
    copyComponent(state, payload) {
      return state
    },
    copyGroup(state, payload) {
      return state
    },
    copyPage(state, payload) {
      return state
    },
    recoverPage(state, payload) {
      return state
    },
    movePage(state, payload) {
      return state
    },
    undo(state, payload) {
      return state
    },
    redo(state, payload) {
      return state
    }
  },
  flows: {
    fetch(flow$, action$, state$) {
      return flow$.pipe()
    },
    persist(flow$, action$, state$) {
      return flow$.pipe()
    },
    cacheStep(flow$, action$, state$) {
      return flow$.pipe()
    },
    autoDraft(flow$, action$, state$) {
      return flow$.pipe()
    }
  }
}

export default model