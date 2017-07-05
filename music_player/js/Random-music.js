//播放控制
var myAudio = $("audio")[0];
var lyricArr = [];
//播放/暂停控制
$(".btn1").click(function(){
	if(myAudio.paused){
		play();
	}else{
		pause();
	}
});

//频道切换
$(".btn2").click(function(){
	getChannel();
});

$(".btn3").click(function(){
	getmusic();
});

function play(){
	myAudio.play();
	$(".btn1").removeClass('m-play').addClass('m-pause');
}

function pause(){
	myAudio.pause();
	$(".btn1").removeClass('m-pause').addClass('m-play');
}

//获取频道信息
function getChannel(){
	$.ajax({
		url: 'http://api-jirengu.com/fm/getChannels.php',
		dataType:'json',
		Method:'get',
		success: function(response){
			var channels = response.channels;
			var num = Math.floor(Math.random()*channels.length);
			var channelname = channels[num].name;
			var channelId = channels[num].channel_id;
			$('.record').text(channelname);
			$('.record').attr('title',channelname);
			$('.record').attr('data-id',channelId);
			getmusic();
		}
	});
}
//通过ajax获取歌曲
function getmusic(){
	$.ajax({
		url: 'http://api.jirengu.com/fm/getSong.php',
		dataType: 'json',
		Method: 'get',
		data:{
			'channel':$('.record').attr('data-id')
		},
		success:function(ret){
			var resource = ret.song[0],
				url = resource.url,
				bgPic = resource.picture,
				sid = resource.sid,
				ssid = resource.ssid,
				title = resource.title,
				author = resource.artist;
			$('audio').attr('src',url);
			$('audio').attr('sid',sid);
			$('audio').attr('ssid',ssid);
			$('.musicname').text(title);
			$('.musicname').attr('title',title);
			$('.musicer').text(author);
			$('.musicer').attr('title',author);
			$('.background').css({
				'background':'url('+bgPic+')',
				'background-repeat':'no-repeat',
				'background-position':'center',
				'background-size':'cover'
			});
			play();//播放
			getlyric();//获取歌词
		}
	});
}
//获取歌词
function getlyric(){
	var Sid = $(audio).attr('sid');
	var Ssid = $('audio').attr('ssid');
	$.post('http://api.jirengu.com/fm/getLyric.php', {ssid:Ssid,sid:Sid}).done(function(lyr){
		console.log(lyr);
		var lyr = JSON.parse(lyr);
		console.log(lyr);
		if(!!lyr.lyric){
			$('.music-lyric .lyric').empty();//清空歌词信息
			var line = lyr.lyric.split('\n');//歌词为以排数为界的数组
			var timeReg = /\[\d{2}:\d{2}.\d{2}\]/g;//时间的正则
			var result = [];
			if(line != ""){
				for(var i in line){//遍历歌词数组
					var time = line[i].match(timeReg);//每组匹配时间 得到时间数组
					if（!time）continue;//如果没有 就跳过继续
					var value = line[i].replace(timeReg,"");//纯歌词
					for(j in time){
						//遍历数组时间
						var t = time[s].slice(1,-1).split(':');//分析时间 时间的格式是[00:00.00]分钟和毫秒是t[0],t[1]
						//把结果做成数组result[0]是当前时间，result[1]是纯歌词
						var timeArr = parseInt(t[0],10)*60+parseFloat(t[1]);//计算出一个curTime s为单位
						result.push([timeArr,value]);
					}
				}
			}
			//时间排序
			result.sort(function(a,b){
				return a[0] - b[0];
			});
			lyricArr = result;//存到lyricArr里面
			renderLyric();//渲染歌词
		}
	}).fail(function(){
		$('.music-lyric .lyric').html("<li>本歌曲展示没有歌词</li>");
	});
}

function renderLyric(){
	var lyrLi = "";
	for(var i = 0; i < lyricArr.length;i++){
		lyrLi += "<li data-id ='"+lyricArr[i][0]+"'>"+lyricArr[i][1]+"</li>";
	}
	$('.music-lyric .lyric').append(lyrLi);
	setInterval(showLyric,100);//怎么显示歌词
}

function showLyric(){
	var liH = $(".lyric li").eq(5).outerHeight()-3;  //每行高度
	for(var i = 0;i < lyricArr.length;i++){//遍历歌词下所有的li
		var curT = $(".lyric li").eq(i).attr("data-time");
		var nexT = $(".lyric li").eq(i+1).attr("data-time");
		var curTime = myAudio.currentTime;
		if((curTime > curT)&&(curT < nexT)){//当前时间再下一局时间和歌曲当前时间之间的时候就渲染并滚动
			$()
		}
	}
}

