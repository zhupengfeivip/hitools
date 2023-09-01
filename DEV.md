
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

