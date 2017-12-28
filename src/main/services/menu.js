import { Menu } from 'electron';
import log from 'electron-log';

function getTemplate() {
	return [
		{
			label  : 'Bilibili',
			submenu: [
				{role: 'hide'},
				{role: 'hideothers'},
				{role: 'unhide'},
				{type: 'separator'},
				{role: 'quit'}
			]
		},
		{
			label   : 'Edit',
			submenu: [
				{role: 'copy'},
				{role: 'paste'},
				{role: 'delete'},
				{role: 'selectall'}
			]
		}, {
			label   : 'View',
			submenu: [
				{role: 'reload'},
				{type: 'separator'},
				{role: 'toggledevtools'}
			]
		},
		{
			role   : 'window',
			label   : 'Window',
			submenu: [
				{role: 'minimize'},
				{role: 'close'}
			]
		}
	];
}

export function init() {
	log.info('menu：init');
	const menu = Menu.buildFromTemplate(getTemplate());
	Menu.setApplicationMenu(menu);
}
