#!/bin/bash

# 批量替换包名脚本
# 使用：pnpm run rename-pkg old-name new-name
# 示例：pnpm rename-pkg "@mylib" "@vue3-lib"

# 检查参数
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 old-name new-name"
    echo "Example: $0 @mylib @vue3-lib"
    exit 1
fi

OLD_NAME=$1
NEW_NAME=$2

# 转义特殊字符
OLD_NAME_ESCAPED=$(echo $OLD_NAME | sed 's/\//\\\//g' | sed 's/@/\\@/g')
NEW_NAME_ESCAPED=$(echo $NEW_NAME | sed 's/\//\\\//g' | sed 's/@/\\@/g')

# 在项目根目录下执行
echo "Replacing $OLD_NAME with $NEW_NAME in all files..."

# 查找所有可能包含包名的文件并替换

# find 命令参数说明：
# -type f - 只查找文件
# -not -path - 排除特定目录
# -name - 指定文件类型
# -o - 或运算符
# -exec - 对找到的文件执行命令
find . -type f \
    -not -path "*/node_modules/*" \
    -not -path "*/dist/*" \
    -not -path "*/.git/*" \
    -not -path "*/coverage/*" \
    -not -path "*/scripts/*" \
    -not -path "*/temp/*" \
    -not -path "*/tmp/*" \
    -not -path "*/.turbo/*" \
    -not -path "*/.cache/*" \
    \( -name "*.json" -o -name "*.ts" -o -name "*.js" -o -name "*.vue" -o -name "*.md" -o -name "*.mjs" \) \
    -exec sed -i'' "s/$OLD_NAME_ESCAPED/$NEW_NAME_ESCAPED/g" {} +

# sed 命令说明：
# -i'' - 原地修改文件
# s/old/new/g - 全局替换
# {} - 当前找到的文件
# + - 一次处理多个文件

echo "Done! Please review the changes and run 'pnpm install' to update lock file"
