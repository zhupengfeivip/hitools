
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

// 控制台会返回下一个小版本号 如v1.0.1 并自动修改package.json文件 不需要人工修改 但是需要先人工提交代码
npm version patch
// patch：补丁号，修复bug，小变动，如 v1.0.0->v1.0.1
npm version patch

// minor：次版本号，增加新功能，如 v1.0.0->v1.1.0
npm version minor

// major：主版本号，不兼容的修改，如 v1.0.0->v2.0.0
npm version major

// 发布命令
npm publish

引用项目强制更新某一版本
pnpm add hightools@1.0.1


```

