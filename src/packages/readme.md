此处 setTimeout 必须明确使用 window 调用

https://stackoverflow.com/questions/55550096/ts2322-type-timeout-is-not-assignable-to-type-number-when-running-unit-te

```typescript
let timer: number
timer = window.setTimeout(() => {}, 300)
```
