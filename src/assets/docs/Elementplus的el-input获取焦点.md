# Element-plus的el-input获取焦点
**1.给input设置ref属性**
```vue
<el-input 
  type="password" 
  placeholder="请输入密码" 
  show-password 
  ref="passwordInputRef"
>
```
**2.引入ref和nextTick**
```vue
import { ref, nextTick } from 'vue'
const passwordInputRef = ref()
```
**3.在需要的地方触发**
```vue
const focusPassword = () => { 
  nextTick(() => { 
    passwordInputRef.value.focus() 
  }) 
}
```
