
```shell
git remote set-url --add origin git@gitee.com:bonn_admin/hitools.git

$ git remote -v
origin  git@github.com:zhupengfeivip/hitools.git (fetch)
origin  git@github.com:zhupengfeivip/hitools.git (push)
origin  git@gitee.com:bonn_admin/hitools.git (push)
```


# 作为子库

```shell
git submodule add -f https://github.com/zhupengfeivip/hitools.git src/hitools

git submodule add -f git@github.com:zhupengfeivip/hitools.git src/hitools


gitree
git submodule add -f git@gitee.com:bonn_admin/hitools.git src/hitools
```


# 作为npm包

使用npm login登录npm平台
npm publish发布版本

当缺少方法后，如何处理？
增加相应的代码
发布版本
```shell
// 登陆
$ npm login
npm notice Log in on https://registry.npmjs.org/
Login at:
https://www.npmjs.com/login?next=/login/cli/30bb19b7-d518-48f7-99a4-939921caa422
Press ENTER to open in the browser...

Logged in on https://registry.npmjs.org/.

// 控制台会返回下一个小版本号 如v1.0.1
npm version patch

// 发布命令
npm publish

请注意发布时版本号必须加一，版本号必须比已发布的大，否则会发布失败。


引用项目强制更新某一版本
pnpm add hightools@1.0.1


```

