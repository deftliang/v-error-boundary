# v-error-boundary

### Error Boundary Component for Vue3

#### Install

```bash
npm i v-error-boundary

yarn add v-error-boundary
```

#### Usage

```html
<VErrorBoundary>
  <YourComponent />
</VErrorBoundary>
```

#### Props

| Property        | Description                                   | Type          | Default |
| --------------- | --------------------------------------------- | ------------- | ------- |
| stopPropagation | wheter prevent the error from propagating     | boolean       | false   |
| fallback        | fallback component to render in case of error | slots \|VNode | -       |

#### Events

| Events Name | Description                              | Arguments                       |
| ----------- | ---------------------------------------- | ------------------------------- |
| error       | event will be triggered in case of error | (error, instance, info) => void |
