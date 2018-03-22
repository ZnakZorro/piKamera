ps -ef | grep /camera/index.js | grep -v grep | awk '{print "sudo kill -9 "$2}' | sh
/usr/local/bin/node "$HOME"/app/camera/index.js $1
