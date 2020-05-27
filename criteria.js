const prepareCriteria = rawCriteria => {
	const criteria = [];
	rawCriteria.match.forEach(match =>
		rawCriteria.matchables.forEach(matchable =>
			criteria.push({
				['usable.' + matchable]: {$regex: match, $options: 'i'}
			})
		)
	);

	if (rawCriteria.hasOwnProperty('exists')) {
		rawCriteria.exists.forEach(key => {
			criteria.push({
				['usable.require.' + key]: {$exists: true}
			});

			criteria.push({
				['usable.require-dev.' + key]: {$exists: true}
			});
		});
	}


	if (rawCriteria.hasOwnProperty('extra')) {
		rawCriteria.extra.forEach(key => {
			criteria.push({
				['usable.extra.' + key]: {$exists: true}
			});
		});
	}	
	return {$or: criteria};
}

const criteria = {
	laravel: {
		match: [
			'laravel',
		],
		matchables: [
			'name', 'description', 'keywords', 'type',
		],
		exists: [
			'laravel\/framework', 'illuminate\/auth',
			'illuminate\/broadcasting', 'illuminate\/bus',
			'illuminate\/cache', 'illuminate\/config',
			'illuminate\/console', 'illuminate\/container',
			'illuminate\/contracts','illuminate\/cookie',
			'illuminate\/database', 'illuminate\/encryption',
			'illuminate\/events', 'illuminate\/filesystem',
			'illuminate\/hashing', 'illuminate\/http',
			'illuminate\/log', 'illuminate\/mail',
			'illuminate\/notifications', 'illuminate\/pagination',
			'illuminate\/pipeline', 'illuminate\/queue',
			'illuminate\/redis', 'illuminate\/routing',
			'illuminate\/session', 'illuminate\/support',
			'illuminate\/testing', 'illuminate\/translation',
			'illuminate\/validation', 'illuminate\/view',
		],
		extra: [
			'laravel',
		],
	},
	fuel: {
		match: [
			'fuelphp',
		],
		matchables: [
			'name', 'description', 'keywords', 'type',
		],
		exists: [
			'fuel\/fuel', 'fuel\/core', 'fuel\/docs',
			'fuel\/auth', 'fuel\/email', 'fuel\/oil',
			'fuel\/orm', 'fuel\/parser',
		]
	},
	symfony: {
		match: [
			'symfony',
		],
		matchables: [
			'name', 'description', 'keywords', 'type',
		],
		exists: [
			'symfony\/symfony', 'symfony\/asset',
			'symfony\/amazon-mailer', 'symfony\/browser-kit',
			'symfony\/cache', 'symfony\/config',
			'symfony\/console', 'symfony\/css-selector',
			'symfony\/dependency-injection', 'symfony\/debug-bundle',
			'symfony\/doctrine-bridge', 'symfony\/dom-crawler',
			'symfony\/dotenv', 'symfony\/error-handler',
			'symfony\/event-dispatcher', 'symfony\/expression-language',
			'symfony\/filesystem', 'symfony\/finder', 'symfony\/form',
			'symfony\/framework-bundle', 'symfony\/google-mailer',
			'symfony\/http-client', 'symfony\/http-foundation',
			'symfony\/http-kernel', 'symfony\/inflector', 'symfony\/intl',
			'symfony\/ldap', 'symfony\/lock', 'symfony\/mailchimp-mailer',
			'symfony\/mailer', 'symfony\/mailgun-mailer',
			'symfony\/messenger', 'symfony\/mime', 'symfony\/monolog-bridge',
			'symfony\/notifier', 'symfony\/options-resolver',
			'symfony\/postmark-mailer', 'symfony\/process',
			'symfony\/property-access', 'symfony\/property-info',
			'symfony\/proxy-manager-bridge', 'symfony\/routing',
			'symfony\/security-core', 'symfony\/security-csrf',
			'symfony\/security-guard', 'symfony\/security-http',
			'symfony\/security-bundle', 'symfony\/sendgrid-mailer',
			'symfony\/serializer', 'symfony\/stopwatch', 'symfony\/string',
			'symfony\/templating', 'symfony\/translation',
			'symfony\/twig-bridge', 'symfony\/twig-bundle', 'symfony\/uid',
			'symfony\/validator', 'symfony\/var-dumper',
			'symfony\/var-exporter', 'symfony\/web-link',
			'symfony\/web-profiler-bundle', 'symfony\/workflow',
			'symfony\/yaml',
		]
	},
	yii: {
		match: [
			'yii',
		],
		matchables: [
			'name', 'description', 'keywords', 'type',
		],
		exists: [
			'yiisoft\/yii', 'yiisoft\/yii2', 'yiisoft\/yii-debug',
			'yiisoft\/yii2-gii', 'yiisoft\/yii2-bootstrap',
			'yiisoft\/yii2-swiftmailer', 'yiisoft\/yii2-faker',
		]
	},
	zend: {
		match: [
			'zend',
		],
		matchables: [
			'name', 'description', 'keywords', 'type',
		],
		exists: [
			'zendframework\/zendframework', 'zendframework\/zend-authentication',
			'zendframework\/zend-barcode', 'zendframework\/zend-cache',
			'zendframework\/zend-captcha', 'zendframework\/zend-code',
			'zendframework\/zend-config', 'zendframework\/zend-console',
			'zendframework\/zend-crypt', 'zendframework\/zend-db',
			'zendframework\/zend-debug', 'zendframework\/zend-di',
			'zendframework\/zend-diactoros', 'zendframework\/zend-dom',
			'zendframework\/zend-escaper', 'zendframework\/zend-eventmanager',
			'zendframework\/zend-feed', 'zendframework\/zend-file',
			'zendframework\/zend-filter', 'zendframework\/zend-form',
			'zendframework\/zend-http', 'zendframework\/zend-hydrator',
			'zendframework\/zend-i18n', 'zendframework\/zend-i18n-resources',
			'zendframework\/zend-inputfilter', 'zendframework\/zend-json',
			'zendframework\/zend-json-server', 'zendframework\/zend-loader',
			'zendframework\/zend-log', 'zendframework\/zend-mail',
			'zendframework\/zend-math', 'zendframework\/zend-memory',
			'zendframework\/zend-mime', 'zendframework\/zend-modulemanager',
			'zendframework\/zend-mvc', 'zendframework\/zend-mvc-console',
			'zendframework\/zend-mvc-form', 'zendframework\/zend-mvc-i18n',
			'zendframework\/zend-mvc-plugins', 'zendframework\/zend-navigation',
			'zendframework\/zend-paginator', 'zendframework\/zend-permissions-acl',
			'zendframework\/zend-permissions-rbac', 'zendframework\/zend-progressbar',
			'zendframework\/zend-psr7bridge', 'zendframework\/zend-serializer',
			'zendframework\/zend-server', 'zendframework\/zend-servicemanager',
			'zendframework\/zend-servicemanager-di', 'zendframework\/zend-session',
			'zendframework\/zend-soap', 'zendframework\/zend-stdlib',
			'zendframework\/zend-stratigility', 'zendframework\/zend-tag',
			'zendframework\/zend-test', 'zendframework\/zend-text',
			'zendframework\/zend-uri', 'zendframework\/zend-validator',
			'zendframework\/zend-view', 'zendframework\/zend-xml2json',
			'zendframework\/zend-xmlrpc', 'zendframework\/zendxml',
		]
	},
	nette: {
		match: [
			'nette',
		],
		matchables: [
			'name', 'description', 'keywords', 'type',
		],
		exists: [
			'nette\/application', 'nette\/bootstrap', 'nette\/caching',
			'nette\/components', 'nette\/di', 'nette\/database',
			'nette\/finder', 'nette\/forms', 'nette\/http',
			'nette\/latte', 'nette\/mail', 'nette\/neon',
			'nette\/php-generator', 'nette\/robot-loader', 'nette\/routing',
			'nette\/safe-stream', 'nette\/security', 'nette\/schema',
			'nette\/tester', 'nette\/tokenizer', 'nette\/tracy',
			'nette\/utils',
		]
	},
	cakephp: {
		match: [
			'cakephp',
		],
		matchables: [
			'name', 'description', 'keywords', 'type',
		],
		exists: [
			'cakephp\/cakephp', 'cakephp\/cache', 'cakephp\/collection',
			'cakephp\/console', 'cakephp\/core', 'cakephp\/datasource',
			'cakephp\/database', 'cakephp\/event', 'cakephp\/filesystem',
			'cakephp\/form', 'cakephp\/http', 'cakephp\/i18n',
			'cakephp\/log', 'cakephp\/orm', 'cakephp\/utility',
			'cakephp\/validation',
		]
	},
	slim: {
		match: [
			'slim',
		],
		matchables: [
			'type',
		],
		exists: [
			'slim\/slim', 'slim\/http', 'slim\/http-cache', 'slim\/csrf',
			'slim\/twig-view', 'slim\/flash', 'slim\/views', 'slim\/extras',
			'slim\/light', 'slim\/middleware', 'slim\/pdo', 'slim\/strong',
			'slim\/slim-skeleton', 'slim\/shady', 'slim\/psr7',
			'slim\/plates', 'slim\/mvc', 'slim\/logger', 'slim\/php-view',
		]
	},
	laminas: {
		match: [
			'laminas',
		],
		matchables: [
			'name', 'description', 'keywords', 'type',
		],
		exists: [
			'laminas\/laminas-mvc', 'laminas\/laminas-component-installer',
			'laminas\/laminas-development-mode', 'laminas\/laminas-skeleton-installer',
			'laminas\/laminas-barcode', 'laminas\/laminas-cache',
			'laminas\/laminas-code', 'laminas\/laminas-db', 'laminas\/laminas-dom',
			'laminas\/laminas-eventmanager', 'laminas\/laminas-feed',
			'laminas\/laminas-file', 'laminas\/laminas-form',
			'laminas\/laminas-hydrator', 'laminas\/laminas-i18n',
			'laminas\/laminas-json', 'laminas\/laminas-loader', 'laminas\/laminas-log',
			'laminas\/laminas-math', 'laminas\/laminas-memory',
			'laminas\/laminas-progressbar', 'laminas\/laminas-router',
			'laminas\/laminas-serializer', 'laminas\/laminas-session',
			'laminas\/laminas-soap', 'laminas\/laminas-stdlib', 'laminas\/laminas-tag',
			'laminas\/laminas-text', 'laminas\/laminas-twitter', 'laminas\/laminas-view',
			'laminas\/laminas-xml2json', 'laminas\/laminas-diagnostics',
			'laminas\/laminas-config', 'laminas\/laminas-config-aggregator',
			'laminas\/laminas-config-aggregator-modulemanager',
			'laminas\/laminas-config-aggregator-parameters', 'laminas\/laminas-di',
			'laminas\/laminas-servicemanager', 'laminas\/laminas-console',
			'laminas\/laminas-servicemanager-di', 'laminas\/laminas-filter',
			'laminas\/laminas-inputfilter', 'laminas\/laminas-validator',
			'laminas\/laminas-http', 'laminas\/laminas-httphandlerrunner',
			'laminas\/laminas-uri', 'laminas\/laminas-mail', 'laminas\/laminas-mime',
			'laminas\/laminas-diactoros', 'laminas\/laminas-stratigility',
			'laminas\/laminas-navigation', 'laminas\/laminas-paginator',
			'laminas\/laminas-permissions-acl', 'laminas\/laminas-permissions-rbac',
			'laminas\/laminas-component-installer', 'laminas\/laminas-json-server',
			'laminas\/laminas-server', 'laminas\/laminas-xmlrpc',
			'laminas\/laminas-authentication', 'laminas\/laminas-captcha',
			'laminas\/laminas-crypt', 'laminas\/laminas-escaper',
			'laminas\/laminas-ldap', 'laminas\/laminas-modulemanager',
			'laminas\/laminas-mvc-console', 'laminas\/laminas-test',
			'laminas\/laminas-developer-tools', 'laminas\/laminas-mvc',
			'laminas\/laminas-mvc-plugin-flashmessenger',
			'laminas\/laminas-mvc-plugin-prg',
		],
		extra: [
			'laminas',
		],
	},
	aura: {
		match: [
			'aura',
		],
		matchables: [
			'name', 'description', 'keywords', 'type',
		],
		exists: [
			'aura\/framework', 'aura\/installer-default', 'aura\/autoload',
			'aura\/cli', 'aura\/di', 'aura\/filter', 'aura\/http',
			'aura\/input', 'aura\/intl', 'aura\/marshal', 'aura\/router',
			'aura\/session', 'aura\/signal', 'aura\/sql', 'aura\/uri',
			'aura\/view', 'aura\/web',
		]
	},
	phalcon: {
		match: [
			'phalcon',
		],
		matchables: [
			'name', 'description', 'keywords', 'type',
		],
	},
	codeigniter: {
		match: [
			'codeigniter',
		],
		matchables: [
			'name', 'description', 'keywords', 'type',
		],
	},
	kohana: {
		match: [
			'kohana',
		],
		matchables: [
			'name', 'description', 'keywords', 'type',
		],
		exists: [
			'kohana\/auth', 'kohana\/core', 'kohana\/orm',
			'kohana\/cache', 'kohana\/codebench', 'kohana\/database',
			'kohana\/image', 'kohana\/minion', 'kohana\/unittest',
			'kohana\/userguide',
		]
	},
	phpixie: {
		match: [
			'phpixie',
		],
		matchables: [
			'name', 'description', 'keywords', 'type',
		],
		exists: [
			'phpixie\/framework', 'phpixie\/bundles', 'phpixie\/debug',
			'phpixie\/route', 'phpixie\/template', 'phpixie\/filesystem',
			'phpixie\/database', 'phpixie\/config', 'phpixie\/orm',
			'phpixie\/slice', 'phpixie\/processors', 'phpixie\/http',
			'phpixie\/http-processors', 'phpixie\/security', 'phpixie\/auth',
			'phpixie\/auth-orm', 'phpixie\/auth-http', 'phpixie\/auth-login',
			'phpixie\/auth-social', 'phpixie\/auth-processors',
			'phpixie\/paginate', 'phpixie\/paginate-orm','phpixie\/image',
			'phpixie\/validate', 'phpixie\/social', 'phpixie\/cli',
			'phpixie\/console', 'phpixie\/migrate', 'phpixie\/cache',
		]
	},
	fuelphp: {
		match: [
			'fuelphp',
		],
		matchables: [
			'name', 'description', 'keywords', 'type',
		],
		exists: [
			'fuel\/fuel', 'fuel\/core', 'fuel\/docs', 'fuel\/auth',
			'fuel\/email', 'fuel\/oil', 'fuel\/orm', 'fuel\/parser',
		]
	},
	wordpress: {
		match: [
			'wordpress', 'wp_', 'wp-',
		],
		matchables: [
			'name', 'description', 'keywords', 'type',
		]
	},
}
