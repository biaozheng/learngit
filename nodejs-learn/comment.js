///http爬虫用来直接发送评论,主要是对request模块的了解
var http = require('http')

var querystring = require('querystring')

var postData = querystring.stringify({
	'content': '很期待老师的新课程'，
	'cid': '325'
})

var options = {
	hostname: 'www.imooc.com',
	port: 80,
	path: '/course/36478'
}