# 报名表 Google Form 生成脚本

`enroll-form.gs` 会在当前登录的 Google 账号里自动生成：

- 报名表（Google Form）：家长信息 → 学员信息 → 课程选择 → 健康与紧急联系人 → 同意条款 → 其他，共 6 页
- 回复汇总表（Google Sheet）
- 邮件通知：每次有人提交，都会发邮件到 `infinite.sports.admin@gmail.com`，并自动回复一封确认邮件给家长

## 使用步骤（约 3 分钟）

1. 用 **infinite.sports.admin@gmail.com** 登录，打开 <https://script.google.com>，点 **新项目 / New project**。
2. 删掉默认代码，把 `enroll-form.gs` 的全部内容粘贴进去，按 Ctrl/Cmd + S 保存（项目名随意，比如 `Enrollment Form`）。
3. 在顶部函数下拉菜单选 **`createEnrollmentForm`**，点 **运行 / Run**。
4. 第一次运行会要求授权：选择账号 → 如果出现“Google 尚未验证此应用”，点 **高级 / Advanced** → **前往 … (不安全)** → **允许 / Allow**。这是你自己的脚本，所以会出现这个提示。
5. 运行完成后，在下方 **执行日志 / Execution log** 里会看到 4 个链接：
   - `Form link`：放到网站上的报名链接（发给我即可）
   - `Edit form`：编辑表单
   - `Responses sheet`：查看所有报名
6. **不要删除这个 Apps Script 项目**，邮件通知依赖它。

## 生成后建议手动调整

- 在表单编辑页点右上角调色板图标，把主题色改成橙色并上传 Logo 或首图（这一步脚本没法做）。
- 搜索 `[DRAFT]` / `[PLACEHOLDER]` 的内容：
  - **上课时间选项**：目前是示例，等课表确定后再改
  - **免责条款、医疗授权**：目前是通用草稿，正式使用前请请专业人士审核
- 如果不想自动给家长发确认邮件，把脚本里的 `sendParentConfirmation` 改成 `false`，然后重新运行一次。

## 注意

- 每运行一次 `createEnrollmentForm` 就会**新建**一个表单。旧的请到 Google Drive 删除。
- 免费 Gmail 每天最多发约 100 封脚本邮件，报名量正常时足够。
