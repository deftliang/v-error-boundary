import { ref, defineComponent, onErrorCaptured, ComponentPublicInstance } from "vue";

const VErrorBoundary = defineComponent({
  name: "VErrorBoundary",
  props: {
    stopPropagation: { type: Boolean, default: false },
  },
  setup(props, { slots, emit }) {
    const hasError = ref(false);
    const info = ref<string>();
    const instance = ref();
    const err = ref();
    onErrorCaptured((_err: Error, _instance: ComponentPublicInstance | null, _info: string) => {
      hasError.value = true;
      err.value = _err;
      info.value = _info;
      instance.value = _instance;
      emit("error", _err, _instance, _info);
      return props.stopPropagation ? false : true;
    });

    const DefaultFallBack = () =>
      slots.defaultFallBack ? (
        slots?.defaultFallBack()
      ) : (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {err.value && err.value.toString()}
            <br />
            {err.value}
          </details>
        </div>
      );
    const fallback = slots.fallback ? slots?.fallback() : DefaultFallBack();

    return () => <>{hasError.value ? fallback : slots.default?.()}</>;
  },
});

export default VErrorBoundary;
