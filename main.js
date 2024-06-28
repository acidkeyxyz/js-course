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
		href: 'advanced/array-methods.html',
		isShown: false,
	},
	{
		name: 'Array Properties',
		href: 'advanced/array-properties.html',
		isShown: false,
	},
	{
		name: 'Prototypes',
		href: 'advanced/prototypes.html',
		isShown: false,
	},
	{
		name: 'Array Static Methods',
		href: 'advanced/array-static-methods.html',
		isShown: false,
	},
	{
		name: 'Array Typed',
		href: 'arrays/array-typed.html',
		isShown: false,
	},
	{
		name: 'Array',
		href: 'advanced/array.html',
		isShown: false,
	},
	{
		name: 'Async Iterators',
		href: 'advanced/async-iterators.html',
		isShown: false,
	},
	{
		name: 'Iterators',
		href: 'advanced/iterators.html',
		isShown: true,
	},
	{
		name: 'Maps',
		href: 'advanced/maps.html',
		isShown: false,
	},
	{
		name: 'Sets',
		href: 'collections/sets.html',
		isShown: false,
	},
	{
		name: 'WeakMaps',
		href: 'advanced/weakmaps.html',
		isShown: false,
	},
	{
		name: 'WeakSets',
		href: 'advanced/weaksets.html',
		isShown: false,
	},
	{
		name: 'Date',
		href: 'advanced/date.html',
		isShown: false,
	},
	{
		name: 'Intl',
		href: 'advanced/intl.html',
		isShown: false,
	},
	{
		name: 'JSON',
		href: 'date/json.html',
		isShown: false,
	},
	{
		name: 'Math',
		href: 'advanced/math.html',
		isShown: false,
	},
	{
		name: 'Number',
		href: 'advanced/number.html',
		isShown: false,
	},
	{
		name: 'RegExp',
		href: 'date/regexp.html',
		isShown: false,
	},
	{
		name: 'String',
		href: 'advanced/string.html',
		isShown: false,
	},
	{
		name: 'Web Storage',
		href: 'advanced/web-storage.html',
		isShown: false,
	},
	{
		name: 'Window',
		href: 'advanced/window.html',
		isShown: false,
	},
	{
		name: 'Worker',
		href: 'advanced/worker.html',
		isShown: false,
	},
	{
		name: 'XMLHttpRequest',
		href: 'advanced/xmlhttprequest.html',
		isShown: false,
	},
	{
		name: 'Web Components',
		href: 'advanced/web-components.html',
		isShown: false,
	},
	{
		name: 'DOM',
		href: 'advanced/dom.html',
		isShown: false,
	},
	{
		name: 'Event Loop',
		href: 'advanced/eventLoop.html',
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
		href: 'advanced/shadow-dom.html',
		isShown: false,
	},
	{
		name: 'Web Components',
		href: 'advanced/web-components.html',
		isShown: false,
	},
	{
		name: 'Web Workers',
		href: 'advanced/web-workers.html',
		isShown: false,
	},
	{
		name: 'Canvas',
		href: 'advanced/canvas.html',
		isShown: false,
	},
	{
		name: 'SVG',
		href: 'advanced/svg.html',
		isShown: false,
	},
	{
		name: 'WebGL',
		href: 'advanced/webgl.html',
		isShown: false,
	},
	{
		name: 'Audio',
		href: 'advanced/audio.html',
		isShown: false,
	},
	{
		name: 'Video',
		href: 'advanced/video.html',
		isShown: false,
	},
	{
		name: 'IndexedDB',
		href: 'advanced/indexeddb.html',
		isShown: false,
	},
	{
		name: 'Cookies',
		href: 'advanced/cookies.html',
		isShown: false,
	},
	{
		name: 'Local Storage',
		href: 'advanced/local-storage.html',
		isShown: false,
	},
	{
		name: 'Session Storage',
		href: 'storage/session-storage.html',
		isShown: false,
	},
	{
		name: 'Web Storage',
		href: 'advanced/web-storage.html',
		isShown: false,
	},
	{
		name: 'Web Sockets',
		href: 'advanced/websockets.html',
		isShown: false,
	},
	{
		name: 'Fetch API',
		href: 'advanced/fetch-api.html',
		isShown: false,
	},
	{
		name: 'Service Workers',
		href: 'advanced/service-workers.html',
		isShown: false,
	},
	{
		name: 'WebRTC',
		href: 'advanced/webrtc.html',
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
