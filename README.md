# workspace template

## Techs

- 开发语言：TypeScript
- 风格检查：tslint
- 组件支持：React + React DOM, v16.7+ for hooks, for furture
- 状态管理：[reobservable](https://www.npmjs.com/package/reobservable)
- immutable: [immer](https://github.com/mweststrate/immer)，for high performance & 
- 构建：Webpack v4
- 拖动支持：[react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)
- 放缩支持：[react-resizable](https://github.com/STRML/react-resizable)
- 富交互：RxJs + [rxjs-hooks](https://github.com/LeetCode-OpenSource/rxjs-hooks)
- 公共组件文档：[Storybook](https://storybook.js.org)
- 工具函数文档：[typedoc](https://github.com/TypeStrong/typedoc)
- 测试框架：Jest 
- 组件测试：[react-testing-library](https://github.com/kentcdodds/react-testing-library)

## Structure

```bash
.
└── src
    ├── components
    │   ├── button
    │   │   ├── __tests__
    │   │   ├── config
    │   │   ├── style
    │   │   └── ui
    │   ├── context-menu
    │   │   └── ui
    │   ├── page
    │   └── rate
    ├── configs
    ├── hooks
    ├── models
    ├── modules
    │   ├── component-list
    │   ├── page-config
    │   ├── page-list
    │   └── workspace
    ├── types
    └── utils
```

- `components/*`：存放基础组件，如图片、按钮、评分等
  - `components/*/ui`：基础组件的 UI 视图
  - `components/*/style`：基础组件的样式
  - `components/*/config`：基础组件的配置表单
  - `components/*/__tests__`：对基础组件的测试
  - `components/*/screenshot.png`：基础组件缩略图
- `config/*`：存放配置
- `hooks/*`：React Hooks
- `models/*`：存放模型
- `modules/*`：存放业务模块
- `types/*`：存放类型声明
  - `types/*/data.ts`：数据结构声明
  - `types/*/api.ts`：API 类型声明
  - `types/*/state.ts`：redux 状态声明
- `utils/*`：存放工具函数


