import ipc from 'node-ipc';

ipc.config.id = 'system';
ipc.config.retry = 1500;

ipc.connectTo('core', () =>
{
	ipc.of.core.on('connect', () =>
	{
  	ipc.log('## connected to world ##'.rainbow, ipc.config.delay);
    ipc.of.core.emit('message', 'hello')
	});
  
	ipc.of.core.on('disconnect', () =>
	{
  	ipc.log('disconnected from world'.notice);
	});
  
	ipc.of.core.on('message', (data) =>
	{
  	ipc.log('got a message from world : '.debug, data);
	});
});