# Coolify 傻瓜式部署方案：Docker + pnpm monorepo 百度云一键上线
Coolify 是 **开源版 Vercel/Heroku**，完全可视化操作，**零代码配置**就能搞定你的 Docker + pnpm monorepo 前后端同仓项目部署，完美适配百度云服务器，全程点点点，连命令都不用记太多。

## 一、Coolify 核心优势（为什么选它）
1. **纯网页操作**：不用写 YAML、不用记命令，全程可视化配置
2. **自动识别**：智能检测 Dockerfile/Docker Compose/pnpm 结构，自动生成部署配置
3. **自动 CI/CD**：GitHub 代码提交即触发自动构建部署，失败自动回滚
4. **全栈适配**：完美支持 pnpm monorepo 前后端同仓项目，自动处理依赖安装与构建
5. **内置监控**：实时查看日志、容器状态、资源占用，故障一键排查
6. **百度云友好**：支持直接连接百度云服务器，自动配置安全组与网络

## 二、前期准备（3分钟搞定）
1. **百度云服务器要求**：
   - 系统：Ubuntu 22.04 LTS（推荐，Coolify 官方支持最佳）
   - 配置：2核4G起（建议4核8G，跑 Docker 更流畅）
   - 开放端口：**80/443/3000**（Coolify 后台+应用访问）、**22**（SSH）

2. **本地准备**：
   - VSCode 安装 Remote - SSH 扩展（方便连接服务器）
   - 项目已推送到 GitHub/GitLab（Coolify 支持直接拉取）
   - 项目根目录有 **Dockerfile** 或 **docker-compose.yml**（Coolify 自动识别）

## 三、Step 1：百度云服务器安装 Coolify（1行命令）
### 1.1 连接服务器
用 VSCode Remote - SSH 连接百度云服务器（输入公网 IP、用户名 root）

### 1.2 一键安装 Coolify（复制粘贴）
在服务器终端运行官方脚本，自动安装所有依赖（Docker 都帮你装好了）：
```bash
# Ubuntu 22.04 LTS 专用（推荐）
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```
**非 root 用户** 加 sudo：
```bash
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | sudo bash
```
等待 5-10 分钟，脚本自动完成：安装 Docker、配置环境、启动 Coolify 服务

### 1.3 访问 Coolify 后台
在浏览器输入：`http://百度云公网IP:3000`  
首次访问创建管理员账号（用户名+密码），完成初始化设置

## 四、Step 2：添加百度云服务器到 Coolify（点点点）
1. 登录 Coolify 后台 → 点击左侧 **Servers** → **Add Server**
2. 选择 **Existing Server**（百度云已有服务器）
3. 填写信息（全部自动填，只需确认）：
   - Name：自定义服务器名称（如 "百度云生产环境"）
   - IP Address：自动填充（或手动输入百度云公网 IP）
   - SSH Port：22（默认）
   - Username：root
   - Authentication：选 **Password**（百度云初始密码）或 **SSH Key**（推荐）
4. 点击 **Test Connection** → 显示 "Connected" 后 → **Save**
5. Coolify 自动配置服务器：安装依赖、配置 Docker、开放端口，全程自动完成

## 五、Step 3：部署 pnpm monorepo 项目（核心步骤，5分钟搞定）
### 5.1 新建项目 & 连接 GitHub
1. 点击左侧 **Projects** → **Create Project** → 命名（如 "我的全栈项目"）→ **Create**
2. 进入项目 → 点击 **New Resource** → 选择 **Application**（应用部署）
3. 选择 **Git Repository** → 连接你的 GitHub 账号（授权 Coolify 访问仓库）
4. 选择你的项目仓库 → 选择分支（如 main）→ **Continue**

### 5.2 Coolify 自动识别项目（关键！不用配置）
Coolify 会自动扫描项目，检测到：
- **Docker Compose**：如果有 docker-compose.yml，自动选择此模式
- **Dockerfile**：如果有 Dockerfile，自动选择 Docker 构建模式
- **pnpm monorepo**：自动识别 pnpm-workspace.yaml，处理多包依赖

### 5.3 傻瓜式配置（只需改3个地方）
1. **Basic Settings**：
   - Name：应用名称（如 "frontend-backend"）
   - Domain：留空（或填你的域名，Coolify 支持自动 HTTPS）
2. **Build Settings**（Coolify 自动填好，确认即可）：
   - Build Command：`pnpm install && pnpm build`（自动识别 pnpm）
   - Start Command：Docker 启动命令（自动从 Dockerfile 读取）
   - Working Directory：项目根目录（自动识别）
3. **Docker Settings**：
   - 勾选 **Use Docker Compose**（如果是 docker-compose 项目）
   - 或选择 **Dockerfile Path**（如果是单 Dockerfile 项目）
4. 点击 **Deploy Now** → 等待 3-5 分钟，Coolify 自动完成：
   - 拉取代码 → 构建 Docker 镜像 → 启动容器 → 配置网络 → 自动测试访问

## 六、Step 4：pnpm monorepo 专属优化（Coolify 自动搞定）
针对 pnpm monorepo 前后端同仓，Coolify 会自动处理：
1. **pnpm 缓存优化**：自动缓存 node_modules，下次构建提速 80%
2. **多包构建**：自动识别 packages 目录，按依赖顺序构建前后端
3. **Docker 多阶段构建**：自动优化镜像大小，只保留运行时依赖
4. **端口映射**：自动处理 docker-compose 中的端口映射，无需手动配置百度云安全组

## 七、Step 5：自动 CI/CD 配置（提交代码自动部署）
1. 项目部署成功后 → 进入应用 → 点击 **Settings** → **Auto Deploy**
2. 开启 **Enable Auto Deploy** → 选择触发条件（如 "On Push to Branch"）
3. 选择分支（main）→ 保存
✅ 以后本地开发提交代码到 GitHub：
```bash
git add .
git commit -m "更新功能"
git push origin main
```
Coolify 会 **自动检测提交 → 拉取代码 → 重新构建 → 部署 → 验证**，失败自动回滚到上一版本

## 八、日常管理（全在网页上操作）
### 8.1 查看日志（故障排查）
应用页面 → **Logs** 标签 → 实时查看构建日志、容器运行日志，报错直接显示，不用 SSH 登录服务器

### 8.2 手动部署/回滚
- 手动部署：应用页面 → **Deploy** 按钮 → 立即触发构建部署
- 回滚：应用页面 → **Deployments** 标签 → 选择历史版本 → **Rollback** → 1分钟回滚到之前状态

### 8.3 资源监控
应用页面 → **Metrics** 标签 → 查看 CPU、内存、磁盘使用情况，异常自动告警

## 九、常见问题 & 傻瓜式解决
1. **pnpm 安装失败**：Coolify 自动检测，提示添加 `--unsafe-perm` 参数，只需在 Build Command 末尾加即可：`pnpm install --unsafe-perm && pnpm build`
2. **端口冲突**：Coolify 自动检测，提示修改 docker-compose 中的端口映射，直接在界面修改保存即可
3. **百度云安全组问题**：Coolify 自动配置，如仍不通 → 服务器页面 → **Firewall** → 一键开放 80/443/3000 端口

## 十、总结：Coolify 傻瓜式部署流程
1. 百度云服务器一键安装 Coolify（1行命令）
2. Coolify 后台添加服务器（点点点）
3. 连接 GitHub 仓库，选择项目
4. 确认 Coolify 自动生成的配置（改3个名字就行）
5. 点击部署，等待自动完成
6. 以后提交代码自动部署，故障一键回滚

全程 **无需写任何 CI/CD 配置文件**，无需记忆复杂命令，连 Docker 都不用手动操作，真正的傻瓜式部署，适合不想折腾的开发者，同时满足专业项目的 CI/CD 需求。

需要我根据你的项目结构（是否用 Docker Compose、pnpm 工作区路径、前后端端口）生成一份可直接复制的 docker-compose.yml 和 Coolify 配置要点吗？