const topics = [
	{
		name: 'Async Await',
		href: 'advanced/async-await.html',
		isShown: true,
	},
	{
		name: 'Mutation Observers',
		href: 'advanced/mutation.html',
		isShown: true,
	},
	{
		name: 'Classes',
		href: 'advanced/classes.html',
		isShown: false,
	},
	{
		name: 'Closures',
		href: 'advanced/closures.html',
		isShown: true,
	},
	{
		name: 'Destructuring',
		href: 'advanced/destructuring.html',
		isShown: false,
	},
	{
		name: 'Generators',
		href: 'advanced/generators.html',
		isShown: true,
	},
	{
		name: 'Modules',
		href: 'advanced/modules.html',
		isShown: false,
	},
	{
		name: 'Proxies',
		href: 'advanced/proxies.html',
		isShown: true,
	},
	{
		name: 'Promises',
		href: 'advanced/promises.html',
		isShown: true,
	},
	{
		name: 'Reflect',
		href: 'advanced/reflect.html',
		isShown: true,
	},
	{
		name: 'Strict Mode',
		href: 'advanced/strictMode.html',
		isShown: true,
	},
	{
		name: 'Symbols',
		href: 'advanced/symbols.html',
		isShown: false,
	},
	{
		name: 'Template Literals',
		href: 'advanced/template-literals.html',
		isShown: false,
	},
	{
		name: 'Typed Arrays',
		href: 'advanced/typed-arrays.html',
		isShown: false,
	},
	{
		name: 'WeakMap',
		href: 'advanced/weakmap.html',
		isShown: false,
	},
	{
		name: 'WeakSet',
		href: 'advanced/weakset.html',
		isShown: false,
	},
	{
		name: 'Array Methods',
		href: 'arrays/array-methods.html',
		isShown: false,
	},
	{
		name: 'Array Properties',
		href: 'arrays/array-properties.html',
		isShown: false,
	},
	{
		name: 'Prototypes',
		href: 'arrays/prototypes.html',
		isShown: false,
	},
	{
		name: 'Array Static Methods',
		href: 'arrays/array-static-methods.html',
		isShown: false,
	},
	{
		name: 'Array Typed',
		href: 'arrays/array-typed.html',
		isShown: false,
	},
	{
		name: 'Array',
		href: 'arrays/array.html',
		isShown: false,
	},
	{
		name: 'Async Iterators',
		href: 'async-iterators/async-iterators.html',
		isShown: false,
	},
	{
		name: 'Iterators',
		href: 'async-iterators/iterators.html',
		isShown: true,
	},
	{
		name: 'Maps',
		href: 'collections/maps.html',
		isShown: false,
	},
	{
		name: 'Sets',
		href: 'collections/sets.html',
		isShown: false,
	},
	{
		name: 'WeakMaps',
		href: 'collections/weakmaps.html',
		isShown: false,
	},
	{
		name: 'WeakSets',
		href: 'collections/weaksets.html',
		isShown: false,
	},
	{
		name: 'Date',
		href: 'date/date.html',
		isShown: false,
	},
	{
		name: 'Intl',
		href: 'date/intl.html',
		isShown: false,
	},
	{
		name: 'JSON',
		href: 'date/json.html',
		isShown: false,
	},
	{
		name: 'Math',
		href: 'date/math.html',
		isShown: false,
	},
	{
		name: 'Number',
		href: 'date/number.html',
		isShown: false,
	},
	{
		name: 'RegExp',
		href: 'date/regexp.html',
		isShown: false,
	},
	{
		name: 'String',
		href: 'date/string.html',
		isShown: false,
	},
	{
		name: 'Web Storage',
		href: 'date/web-storage.html',
		isShown: false,
	},
	{
		name: 'Window',
		href: 'date/window.html',
		isShown: false,
	},
	{
		name: 'Worker',
		href: 'date/worker.html',
		isShown: false,
	},
	{
		name: 'XMLHttpRequest',
		href: 'date/xmlhttprequest.html',
		isShown: false,
	},
	{
		name: 'Web Components',
		href: 'dom/web-components.html',
		isShown: false,
	},
	{
		name: 'DOM',
		href: 'dom/dom.html',
		isShown: false,
	},
	{
		name: 'Event Loop',
		href: 'dom/eventLoop.html',
		isShown: true,
	},
	{
		name: 'Forms',
		href: 'dom/forms.html',
		isShown: false,
	},
	{
		name: 'HTML',
		href: 'dom/html.html',
		isShown: false,
	},
	{
		name: 'Selectors',
		href: 'dom/selectors.html',
		isShown: false,
	},
	{
		name: 'Shadow DOM',
		href: 'dom/shadow-dom.html',
		isShown: false,
	},
	{
		name: 'Web Components',
		href: 'dom/web-components.html',
		isShown: false,
	},
	{
		name: 'Web Workers',
		href: 'dom/web-workers.html',
		isShown: false,
	},
	{
		name: 'Canvas',
		href: 'graphics/canvas.html',
		isShown: false,
	},
	{
		name: 'SVG',
		href: 'graphics/svg.html',
		isShown: false,
	},
	{
		name: 'WebGL',
		href: 'graphics/webgl.html',
		isShown: false,
	},
	{
		name: 'Audio',
		href: 'media/audio.html',
		isShown: false,
	},
	{
		name: 'Video',
		href: 'media/video.html',
		isShown: false,
	},
	{
		name: 'IndexedDB',
		href: 'storage/indexeddb.html',
		isShown: false,
	},
	{
		name: 'Cookies',
		href: 'storage/cookies.html',
		isShown: false,
	},
	{
		name: 'Local Storage',
		href: 'storage/local-storage.html',
		isShown: false,
	},
	{
		name: 'Session Storage',
		href: 'storage/session-storage.html',
		isShown: false,
	},
	{
		name: 'Web Storage',
		href: 'storage/web-storage.html',
		isShown: false,
	},
	{
		name: 'Web Sockets',
		href: 'websockets/websockets.html',
		isShown: false,
	},
	{
		name: 'Fetch API',
		href: 'fetch-api/fetch-api.html',
		isShown: false,
	},
	{
		name: 'Service Workers',
		href: 'service-workers/service-workers.html',
		isShown: false,
	},
	{
		name: 'WebRTC',
		href: 'webrtc/webrtc.html',
		isShown: false,
	},
	{
		name: 'Decorators',
		href: 'advanced/decorators.html',
		isShown: true,
	},
	{
		name: 'Functional Programming',
		href: 'advanced/functionalProgramming.html',
		isShown: true,
	},
];

onload = function () {
	console.log('Page is loaded');
};

topics.forEach((topic) => {
	if (topic.isShown) {
		console.log(topic.name);
		const a = document.createElement('a');
		a.setAttribute('href', topic.href);
		a.textContent = topic.name;
		document.body.appendChild(a);
		document.body.appendChild(document.createElement('br'));
	}
});
