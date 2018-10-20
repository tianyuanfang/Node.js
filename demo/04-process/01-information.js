#!/usr/bin/node

//向控制台打印 CPU 架构信息以及操作系统版本信息
console.log('architecture:',process.arch);
console.log('platform:',process.platform);
//打印进程 id 信息以及 Node.js 可执行文件的绝对路径信息
console.log('process id:',process.pid);
console.log('exePath:',process.execPath);
//在脚本中增加标准输入流的读取操作，让程序暂停执行
process.stdin.resume();
//执行 Linux 命令 ps aux，验证当前进程的 ID 信息和程序中得到的进程 ID 信息相同

//打印 Node.js 版本信息，当前登录用户 id 信息，当前登录用户所属组 id 信息以及当前脚本所在路径信息
console.log('node version:',process.version);
console.log('uid:',process.getuid());
console.log('gid:',process.getgid());
console.log('cwd:',process.cwd());
//在命令行执行 'node -v' 命令，验证程序输出的 node.js 版本信息是否正确

//在命令行执行 'id' 命令，验证程序输出的登录账户 id 信息是否正确

//在命令行执行 'pwd' 命令，验证程序输出的当前工作目录信息是否正确

//打印内存使用情况
console.log('rss:',process.memoryUsage().rss);
console.log('heapTotal:',process.memoryUsage().heapTotal);
console.log('heapUsed:',process.memoryUsage().heapUsed);
console.log('external:',process.memoryUsage().external);
//打印环境变量
console.log('env:',process.env);
console.log('host name:',process.env.HOSTNAME);
//在命令行执行 'env' 命令，验证程序输出的环境变量信息正确

