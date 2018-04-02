var fs = require('fs');
const crypto = require('crypto');
var fileDirectory = __dirname
var arryfilename = {
	'20129184657343': ['82fb4d0c8a19e0a71a32ae15631e91cd', 'png'],
	'5a0948f900011d3a06000338-240-135': ['598eede379235be16a9b6307777846ab', 'jpg'],
	'5a6946f200017b5c06000338-240-135': ['9f712d64a852515e6e95f629914adf67', 'jpg'],
	'iconfont-回复': ['f7fb4fb23e73157f094d2119fb047a4f', 'png'],
	'add': ['bd8c070f47b8ea1b3b8181ad1b0f7c76', 'png'],
	'qq': ['54817a2953822550980887e5f97c6851', 'png'],
	'qq_93': ['9383bd71a455ab0b52d00b76dff96226', 'png'],
	'》': ['9bd0ab29d1bc6b95f8d24c82d7978bd5', 'png'],
	'下载(9)拷贝2': ['3698c8ac9a8029227a90855dd851cf05', 'png'],
	'下载1': ['a33696e96af11a58728846785bac2f86', 'png'],
	'不支持': ['0f07e22c55a7cf55755568cf1cced7e9', 'png'],
	'分期－教育': ['d33b15978a2441f4c54073f98ab9eaf6', 'png'],
	'分期－教育_20': ['0a264b5ab51c5f79f56c13f112271874', 'png'],
	'图层1_73': ['65aadc6ccd08f46d01442184a5bfc569', 'jpg'],
	'图层550': ['94b1f93d65029e08c1ca8f80c44dd00c', 'png'],
	'图层552': ['bb1e989dbff0eb46428fa72f804fb2cf', 'png'],
	'图层553': ['d7f8ecb3b6a9b56df1529e386123c9fa', 'png'],
	'图层554': ['3e6cc81fecc982df2f2ba66da33e84f0', 'jpg'],
	'图层568': ['3e8ce1fd33ce9ecc2499a7175df97b70', 'png'],
	'图层570': ['4b6f35be0070ef6572ab0bd6f01069b2', 'png'],
	'图层7': ['9db8ccab4f0044a921316fd883a4af14', 'jpg'],
	'图层7_16': ['a44deb5b5b696598aa781d6a5b1fdfa6', 'jpg'],
	'图层9': ['fe34c0fdc36785cab84f7211eeb97be9', 'jpg'],
	'圆角矩形6拷贝': ['d8a7340efc8339467f7ccc5fb895ce62', 'png'],
	'多边形1': ['a7a2345338994e94c76c5650003e3319', 'png'],
	'多边形1_44': ['6242db7a5eb8bacda3b2c7f091bef03c', 'png'],
	'多边形1拷贝': ['03b064e3feca962a8c9ae4f424a323a3', 'png'],
	'广告': ['b83a437b8218477f25a2f865d3b55b9f', 'jpg'],
	'广告_10': ['07798d7a0de8620980480077819647af', 'jpg'],
	'广告_34': ['22dc21e2ec060dd0ef6a19d52da109c6', 'jpg'],
	'微信': ['203c442f1d15b8f1aa7f4476cf5ecd4e', 'png'],
	'广告_84': ['d332347e365bf1fdcfb5cab9300fbfd6', 'jpg'],
	'微信_40': ['462cdba68617ab61fa232788919b169e', 'png'],
	'微博': ['b18117d2816c66c36b3ec83b43ba99d7', 'png'],
	'微信图片_20180326174556': ['5a05a857cbe222d03a35914442c8b9d7', 'jpg'],
	'微博_88': ['5aa01729e17bbe4b9ee68171242443bb', 'png'],
	'我的评论': ['db18218b0accafbe6b926317f1733f8a', 'png'],
	'持续更新中': ['b804b8645cb334914466e165a94e2cd0', 'png'],
	'播放5': ['271fef4b6d0f420b95b22868229e2b26', 'png'],
	'播放录音': ['631656149db231cf133093782fdb1281', 'png'],
	'支持': ['18834b2234223ec093b7b773ee713138', 'png'],
	'更多': ['ad89285a775ef8b2d6ac7d10fd6aa698', 'jpg'],
	'男': ['f45297437ae33c64f875f0dc9db4326f', 'png'],
	'矩形613': ['f9153a45ce3d0e338db94e2a86bcdb10', 'jpg'],
	'组6': ['f66796943f97846b8c0caa7cd5ef049a', 'png'],
	'花朵': ['52b7ea2805f0afff680f003cddd6b596', 'png'],
	'表情': ['fc61160627a2d123fedcd7712d069db9', 'jpg'],
	'设置': ['28a2e21b78fb4681441b763003028d7d', 'png'],
	'评论1': ['755c1fb0b2c2e7e10b5e8e02aea11ad0', 'png'],
	'车巴巴-全部车型': ['329d09fcfbd1dfe9cc9fd25b4d5330fa', 'png'],
	'车巴巴-全部车型_48': ['f8717f0d4b2841b12792f4cde4eb1960', 'png'],
	'鸡蛋1': ['d2474b93698962273762ee9685351018', 'png'],
	'图层18': ['2e365f1e4ba3695286fe8974bef041b9', 'png'],
	'圆角矩形7': ['4eb291fb61cc63f420bd07a7a2436510', 'jpg'],
	'图层1': ['850d9a968d9d5e220fa238f66d15329a', 'png'],
	'59da048c62af5': ['8daa1b83b24db44a7780ee5f6e77a4d5', 'jpg'],
	'video': ['71994a067c3fb2ba569f2845f522b56a', 'jpg'],
	'图层1_69': ['24f6822b5a2a268736acc15ff4f28cde', 'png']
}



// readHtml(fileDirectory)
// test over
function changeName(url) {
	fs.readFile(url, (err, data) => {
		if (err) throw err;
		var strdata = data.toString()
		for (attr in arryfilename) {
			console.log(attr + '.' + arryfilename[attr][1])
			var re = new RegExp(attr + '.' + arryfilename[attr][1], 'gi')
			strdata = strdata.replace(re, arryfilename[attr][0] + '.' + arryfilename[attr][1]);
		}
		fs.writeFile(url, strdata, function(error) {
			console.log(error);
		})
	});
}



// fs.readdir(fileDirectory + '/img', function(err, files) {
// 	if (err) {
// 		console.log(err);
// 		return;
// 	}
// 	files.forEach(function(filename) {
// 		console.log(filename);
// 		myhash(fileDirectory, filename)
// 	})

// })
//hash改名字完毕

// readHtml(fileDirectory, 'html', 'abc')
// readHtml(fileDirectory, 'qq.png', 'qq男1111.png')
// fs.watch(fileDirectory, function(eventType, filename) {
// 	if (eventType == 'rename') {
// 		console.log(eventType)
// 		console.log(filename)

// 		fileisnull(fileDirectory, filename)
// 		// var data = filename;
// 		// var key = 'Password!';
// 		// var encrypted = aesEncrypt(data, key);
// 		// var decrypted = aesDecrypt(encrypted, key);

// 		// console.log('Plain text: ' + data);
// 		// console.log('Encrypted text: ' + encrypted);
// 		// console.log('Decrypted text: ' + decrypted);
// 	}
// })

// function aesEncrypt(data, key) {
// 	const cipher = crypto.createCipher('aes192', key);
// 	var crypted = cipher.update(data, 'utf8', 'hex');
// 	crypted += cipher.final('hex');
// 	return crypted;
// }

// function aesDecrypt(encrypted, key) {
// 	const decipher = crypto.createDecipher('aes192', key);
// 	var decrypted = decipher.update(encrypted, 'hex', 'utf8');
// 	decrypted += decipher.final('utf8');
// 	return decrypted;
// }

function fileisnull(fileDirectory, filename) {
	fs.open(fileDirectory + '/' + filename, 'r', function(error, fd) {
		if (error) {
			console.log('file is delete');
		} else {
			myhash(fileDirectory, filename)
		}
	})
}

function myhash(fileDirectory, filename) {
	var rs = fs.createReadStream(fileDirectory + '/img/' + filename)
	var hash = crypto.createHash('md5');
	rs.on('data', hash.update.bind(hash));

	rs.on('end', function() {
		var newname = hash.digest('hex');
		var exte = filename.split('.')
		rename(fileDirectory, filename, newname + '.' + exte[exte.length - 1])
		arryfilename[exte[0]] = [newname, exte[exte.length - 1]]
		console.log(arryfilename);
	});
}

function rename(fileDirectory, filename, newname) {
	if (filename == newname) {
		return;
	}
	fs.rename(fileDirectory + '/img/' + filename, fileDirectory + '/img/' + newname, function(error) {
		if (error) {
			console.log('file repeat')
			delete(fileDirectory + '/' + filename);
			return;
		}
	})
}


function fileDelete(url) {

	fs.unlink(url, (error) => {
		if (error) {
			console.log(error)
			return;
		}
		console.log('file delete.')
	})
}


function readFile(url, name, picname, picnewname) {
	// fs.readFile(url, (err, data) => {
	// 	if (err) {
	// 		console.log(err)
	// 		return;
	// 	}
	// console.log(url)
	// console.log(name)
	var data = fs.createReadStream(url)
	data.setEncoding('utf-8')
	data.on('data', (chunk) => {
		console.log(`Received ${chunk.length} bytes of data.`);
		var strdata = chunk
		var re = new RegExp(picname, 'gi')
		strdata = strdata.replace(re, picnewname);
		var writestr = fs.createWriteStream(url)
		writestr.write(strdata);

	});
	data.on('end', (chunk) => {
		console.log('end');
	});
	// var strdata = data.read();
	// // console.log(strdata);
	// console.log(picname + ' ' + picnewname)
	// writestr.write(strdata, 'utf-8', function() {
	// 	console.log('write over');
	// })

	// fs.writeFile(url, strdata, function(error) {
	// 	if (error) {
	// 		console.log(error)
	// 		return
	// 	}
	// })
	// });
}


function readHtml(fileDirectory) {
	fs.readdir(fileDirectory, function(err, files) {
		if (err) {
			console.log(err);
			return;
		}
		files.forEach(function(filename) {
			if (filename.match(/(\.html|input|css|js)$/)) {
				// console.log(filename)
				var arry = filename.split('.')
				if (arry.length == 1) {
					// console.log('next')
					// console.log(arry[0]);
					readDir(fileDirectory + '/' + arry[0])
				} else {
					// console.log(arry[1])
					if (arry[1] == 'html') {
						changeName(fileDirectory + '/' + filename);
					}
				}
				// console.log(arry.length);
				// readFile(fileDirectory + '/' + filename);
			}
			// if (filename.match(/css$/) == 'css') {
			// 	console.log(filename);
			// 	// readFile(fileDirectory + '/' + filename);
			// }
			// if (filename.match(/input$/) == 'input') {
			// 	console.log(filename);
			// 	// readFile(fileDirectory + '/' + filename);
			// }
		})

	})
}



function readDir(url) {
	fs.readdir(url, function(err, files) {
		if (err) {
			console.log(err);
			return;
		}
		files.forEach(function(filename) {
			// console.log(url);
			changeName(url + '/' + filename);
		})

	})
}
