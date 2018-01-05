var http = require('http');
var fs = require('fs');
var documentRoot = 'D:/workspace/web';


var server = http.createServer(function(req,res){
	var url = req.url;
	//客户端输入的url，即/index.html
	
	var file = documentRoot + url;
	console.log(url);
	
	fs.readFile(file,function(err,data){
		/* file:文件路径
			function:回调函数
			
		*/
		if(err){
			res.writeHeader(404,{
				'content-type':'text/html;charset="utf-8"'
			});
			res.write('<h1>404错误</h1>');
			res.end();
		}else{
			res.writeHeader(200,{
				'content-type':'text/html;charset="utf-8"'
			});
			res.write(data);
			res.end();
		}
		
	});

		
}).listen(8888);

console.log('服务器开启成功');