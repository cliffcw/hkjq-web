# 黑氪金球（HK）企业官网

目标：以最快速度实现可上线的企业官网（本地可跑 + 可部署到服务器）。

## 技术选型

- React + TypeScript + Vite：开发/构建速度快，交付静态站点
- React Router：多页面结构（首页/品牌/产品/团队/联系）
- Tailwind CSS：高效做视觉与布局
- react-markdown + remark-gfm：直接复用现有资料 Markdown
- Nginx：服务器静态托管 + SPA 回退（try_files /index.html）
  - `/docs/` 路径强制 404（避免资料被当作静态文件暴露，`/docs/logol/` 用于官网公开 Logo 图片）

## 资料来源

- 品牌/卖点/团队资料：`src/content/`（从 `projects/HK` 同步过来）
- 资料文件：仅用于内部归档与整理，不在官网对外提供下载

## 本地运行

```bash
npm i
npm run dev
```

访问：`http://localhost:5173/`

## 构建与校验

```bash
npm run lint
npm run typecheck
npm run build
npm run preview
```

## 部署到服务器（39.106.1.26）

依赖：本机已安装 `sshpass`，并且能 SSH 连通服务器。

```bash
export ALY_PASSWORD="你的服务器密码"
npm run deploy
```

默认会：

- 本地执行 `npm run build`
- 上传 `dist/` 到服务器 `REMOTE_DIR`（默认 `/var/www/hkjq-web`）
- 自动安装并配置 Nginx（如服务器未安装）
- 重启 Nginx，使用 80 端口提供访问

可选环境变量：

```bash
export SERVER_HOST="39.106.1.26"
export SERVER_USER="root"
export SERVER_PORT="22"
export REMOTE_DIR="/var/www/hkjq-web"
export APP_NAME="hkjq-web"
export SERVER_NAME="39.106.1.26"
```

## 项目开发规则（精简版）

- 分支：`main` 仅用于可部署版本；日常开发用 `feat/*`、`fix/*`
- 提交：以动词开头（如 `feat: add product page` / `fix: adjust router`）
- 内容：避免“医疗功效宣称”与绝对化用语；对外口径以资料为准
- 安全：不在代码与日志中输出密码/密钥；服务器密码仅通过环境变量传入
- 目录约定：
  - `src/pages/*` 放页面
  - `src/components/*` 放可复用组件
  - `src/content/*` 放内容源（Markdown）
  - `public/*` 仅放对外可公开的静态文件
