_it is a package to save cookies from instagram its mainly created for used with instagram tools_

```js
import login from '@pritamdas/instagram-cookie-save';
import fs from 'fs';
(async () => {
const cookie = await login();
fs.writeFileSync('cookies.json', cookie);
})();
```