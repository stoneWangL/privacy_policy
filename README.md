# 林默的个人静态网站

这是一个零依赖、无需构建的个人博客模板。直接把仓库根目录作为静态网站根目录即可部署。

## 文件说明

- `index.html`：首页
- `styles.css`：全站样式
- `script.js`：主题切换和年份更新
- `posts/`：文章页面
- `assets/avatar.svg`：轻量本地头像素材
- `404.html`：静态托管的错误页

## 修改入口

1. 修改 `index.html` 中的姓名、介绍、邮箱和社交链接。
2. 复制 `posts/slow-web.html`，替换标题、日期和正文，增加新的文章。
3. 在首页的“最近写了什么”区域增加对应文章链接。

站点没有 CDN、数据库或服务端代码，适合放在静态托管服务后，再由反向代理绑定域名。

## 反向代理

如果静态文件放在服务器的 `/srv/privacy-policy`，Nginx 可以使用下面这段配置：

```nginx
server {
    listen 80;
    server_name example.com;
    root /srv/privacy-policy;
    index index.html;

    location / {
        try_files $uri $uri/ /404.html;
    }
}
```
