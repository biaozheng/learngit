var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()

//addlistener


life.on('求安慰',function(who){
	console.log('给' + who + '倒水')
})

life.on('求安慰',function(who){
	console.log('给' + who + '捏肩')
})

life.on('求安慰',function(who){
	console.log('给' + who + '捶背')
})

life.on('求安慰',function(who){
	console.log('给' + who + '讲笑话')
})


life.emit('求安慰','dalao')