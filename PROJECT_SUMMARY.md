# 黑氪金球（HK）企业官网 - 开发总结（用于后续自动开发上下文）

更新时间：2026-04-07

## 目标与现状

- 目标：以最快速度交付可上线的企业官网（本地可跑 + 可部署到服务器）
- 现状：已完成本地运行、构建校验、并部署到服务器 `39.106.1.26`（Nginx 静态托管 + SPA 回退）

## 路径与资料来源

- 官网项目路径：`/Users/chenwan/Desktop/hkjq-web/hkjq-web`
- 品牌资料目录：`/Users/chenwan/.openclaw/workspace/projects/HK`
- 已同步到官网仓库：`src/content/`（内部资料用）

## 技术选型（偏“快与稳”）

- React + TypeScript + Vite：开发/构建速度快，静态站交付成本低
- React Router：官网多页面结构（SPA）
- Tailwind CSS：快速完成企业站风格与响应式布局
- Nginx：服务器静态托管 + `try_files /index.html` 做 SPA 回退

## 信息架构（站点页面）

- `/` 首页：核心价值、优势、背书展示位、流程、合作 CTA
- `/brand` 品牌：定位、三大支柱、背书展示位、合作 CTA
- `/product` 产品：产品介绍、应用场景、资料索取 CTA
- `/team` 团队：当前为 Markdown 渲染（可后续卡片化）
- `/contact` 联系：合作方向、资料索取说明、联系方式占位

## 品牌视觉资源（对外可用）

- Logo 与视觉参考图：`public/docs/logol/*`（官网背景与导航 Logo 使用）
- Nginx 仅允许 `/docs/logol/` 访问；其它 `/docs/` 路径返回 404

## 关键目录约定

- `src/pages/*` 页面
- `src/components/*` 组件
- `src/content/*` 内部资料（Markdown 同步）
- `public/*` 仅放对外可公开静态资源
- `scripts/deploy.sh` 一键部署脚本

## 本地命令

- 启动开发：`npm run dev`
- 代码检查：`npm run lint`、`npm run typecheck`
- 构建：`npm run build`
- 预览：`npm run preview`

## 服务器部署（已实现）

- 服务器：`root@39.106.1.26`
- 密码：环境变量 `ALY_PASSWORD`
- 部署命令：`npm run deploy`

脚本行为摘要：

- 本地 `npm run build`
- 打包 `dist/` 为 tgz 并上传到服务器 `/tmp/`
- 服务器侧解压到 `REMOTE_DIR`（默认 `/var/www/hkjq-web`）
- 自动安装并配置 Nginx（若缺失）
- 写入站点配置并重启 Nginx

可覆盖环境变量：

- `SERVER_HOST`（默认 `39.106.1.26`）
- `SERVER_USER`（默认 `root`）
- `SERVER_PORT`（默认 `22`）
- `REMOTE_DIR`（默认 `/var/www/hkjq-web`）
- `APP_NAME`（默认 `hkjq-web`）
- `SERVER_NAME`（默认与 `SERVER_HOST` 相同）

## “禁止下载”策略（已落实）

- 官网不提供资料下载入口（导航/首页/联系页均移除下载）
- 删除对外静态目录中的背书 PDF，避免直接访问
- Nginx 对 `/docs/` 路径直接返回 404，避免被 SPA 回退命中（但允许 `/docs/logol/` 作为官网公开 Logo 图片路径）
- 对外页面仅做“企业官网口径”的精选信息展示，完整资料按需通过合作咨询提供

## 后续迭代建议（优先级）

- 补齐公司主体信息（备案/地址/电话/工作时间等）
- 统一品牌视觉（logo/主色/字体/图片素材），替换占位图
- SEO：meta description、OG tags、站点地图（如需）
- 内容合规：对外仅保留客观可核验信息，避免医疗功效宣称与绝对化用语
- Team 页卡片化（从 `team.md` 提取结构化数据）
