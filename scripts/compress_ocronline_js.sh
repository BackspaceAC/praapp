#! /bin/bash

# 将src文件合并放到dist文件内

JS_PATH=/home/lyy/praapp/ocronline/static/js/
JS_PATH_DIST=${JS_PATH}dist/
JS_PATH_SRC=${JS_PATH}src/

find $JS_PATH_SRC -type f -name '*.js' | sort | xargs cat > ${JS_PATH_DIST}ocr.js


