# APP 隐私政策静态页面

这是一个零依赖、无需构建的静态隐私政策页面集合。

## 页面结构

```text
.
├── index.html
├── styles.css
├── 404.html
├── robots.txt
└── ts300/
    └── ts300_privacy_policy.html
```

首页只负责展示不同 APP 的政策入口。每个 APP 使用独立的二级目录，目录名作为 APP 的代称。

当前页面访问路径：

```text
/ts300/ts300_privacy_policy.html
```

如果网站域名是 `https://example.com`，完整地址就是：

```text
https://example.com/ts300/ts300_privacy_policy.html
```

## 新增其他 APP

例如新增 `demo` APP：

1. 创建目录 `demo/`。
2. 将页面保存为 `demo/demo_privacy_policy.html`。
3. 在根目录 `index.html` 的政策列表中增加一个链接：

```html
<a class="policy-item" href="demo/demo_privacy_policy.html">
  ...
</a>
```

无需安装依赖，也不需要执行构建命令。部署时将仓库根目录作为静态网站根目录即可。
