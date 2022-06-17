# v-error-boundary

### Error Boundary Component for Vue3

#### Install

```
npm i v-error-boundary

or

yarn add v-error-boundary
```

#### Usage

```
<VErrorBoundary>
  <YourComponent/>
</VErrorBoundary>
```

#### Props

| Property        | Description                                   | Type          | Default |
| --------------- | --------------------------------------------- | ------------- | ------- |
| stopPropagation | wheter prevent the error from propagating     | boolean       | false   |
| fallback        | fallback component to render in case of error | slots \|VNode | -       |
| defaultFallBack | change the default fallback component         | slots \|VNode | -       |

#### Events

| Events Name | Description                              | Arguments                       |
| ----------- | ---------------------------------------- | ------------------------------- |
| error       | event will be triggered in case of error | (error, instance, info) => void |
