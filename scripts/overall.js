load('./criteria.js');

const auraPrepCriteria = prepareCriteria(criteria.aura);
const cursorAll_aura = db.packs.find(auraPrepCriteria).count();

const cursorAban_aura = db.packs.find(
{ $and: [
	auraPrepCriteria,
	{ 'usable.abandoned': { $exists: true } }
]}).count();

printjson({
	"title": "All aura packages",
	"count": cursorAll_aura
});

printjson({
	"title": "Abandoned aura packages",
	"count": cursorAban_aura
});



const cakephpPrepCriteria = prepareCriteria(criteria.cakephp);
const cursorAll_cakephp = db.packs.find(cakephpPrepCriteria).count();

const cursorAban_cakephp = db.packs.find(
{ $and: [
	cakephpPrepCriteria,
	{ 'usable.abandoned': { $exists: true } }
]}).count();

printjson({
	"title": "All cakephp packages",
	"count": cursorAll_cakephp
});

printjson({
	"title": "Abandoned cakephp packages",
	"count": cursorAban_cakephp
});



const codeigniterPrepCriteria = prepareCriteria(criteria.codeigniter);
const cursorAll_codeigniter = db.packs.find(codeigniterPrepCriteria).count();

const cursorAban_codeigniter = db.packs.find(
{ $and: [
	codeigniterPrepCriteria,
	{ 'usable.abandoned': { $exists: true } }
]}).count();

printjson({
	"title": "All codeigniter packages",
	"count": cursorAll_codeigniter
});

printjson({
	"title": "Abandoned codeigniter packages",
	"count": cursorAban_codeigniter
});



const fuelphpPrepCriteria = prepareCriteria(criteria.fuelphp);
const cursorAll_fuelphp = db.packs.find(fuelphpPrepCriteria).count();

const cursorAban_fuelphp = db.packs.find(
{ $and: [
	fuelphpPrepCriteria,
	{ 'usable.abandoned': { $exists: true } }
]}).count();

printjson({
	"title": "All fuelphp packages",
	"count": cursorAll_fuelphp
});

printjson({
	"title": "Abandoned fuelphp packages",
	"count": cursorAban_fuelphp
});



const yiiPrepCriteria = prepareCriteria(criteria.yii);
const cursorAll_yii = db.packs.find(yiiPrepCriteria).count();

const cursorAban_yii = db.packs.find(
{ $and: [
	yiiPrepCriteria,
	{ 'usable.abandoned': { $exists: true } }
]}).count();

printjson({
	"title": "All yii packages",
	"count": cursorAll_yii
});

printjson({
	"title": "Abandoned yii packages",
	"count": cursorAban_yii
});



const kohanaPrepCriteria = prepareCriteria(criteria.kohana);
const cursorAll_kohana = db.packs.find(kohanaPrepCriteria).count();

const cursorAban_kohana = db.packs.find(
{ $and: [
	kohanaPrepCriteria,
	{ 'usable.abandoned': { $exists: true } }
]}).count();

printjson({
	"title": "All kohana packages",
	"count": cursorAll_kohana
});

printjson({
	"title": "Abandoned kohana packages",
	"count": cursorAban_kohana
});



const laminasPrepCriteria = prepareCriteria(criteria.laminas);
const cursorAll_laminas = db.packs.find(laminasPrepCriteria).count();

const cursorAban_laminas = db.packs.find(
{ $and: [
	laminasPrepCriteria,
	{ 'usable.abandoned': { $exists: true } }
]}).count();

printjson({
	"title": "All laminas packages",
	"count": cursorAll_laminas
});

printjson({
	"title": "Abandoned laminas packages",
	"count": cursorAban_laminas
});



const laravelPrepCriteria = prepareCriteria(criteria.laravel);
const cursorAll_laravel = db.packs.find(laravelPrepCriteria).count();

const cursorAban_laravel = db.packs.find(
{ $and: [
	laravelPrepCriteria,
	{ 'usable.abandoned': { $exists: true } }
]}).count();

printjson({
	"title": "All laravel packages",
	"count": cursorAll_laravel
});

printjson({
	"title": "Abandoned laravel packages",
	"count": cursorAban_laravel
});



const nettePrepCriteria = prepareCriteria(criteria.nette);
const cursorAll_nette = db.packs.find(nettePrepCriteria).count();

const cursorAban_nette = db.packs.find(
{ $and: [
	nettePrepCriteria,
	{ 'usable.abandoned': { $exists: true } }
]}).count();

printjson({
	"title": "All nette packages",
	"count": cursorAll_nette
});

printjson({
	"title": "Abandoned nette packages",
	"count": cursorAban_nette
});



const phalconPrepCriteria = prepareCriteria(criteria.phalcon);
const cursorAll_phalcon = db.packs.find(phalconPrepCriteria).count();

const cursorAban_phalcon = db.packs.find(
{ $and: [
	phalconPrepCriteria,
	{ 'usable.abandoned': { $exists: true } }
]}).count();

printjson({
	"title": "All phalcon packages",
	"count": cursorAll_phalcon
});

printjson({
	"title": "Abandoned phalcon packages",
	"count": cursorAban_phalcon
});



const phpixiePrepCriteria = prepareCriteria(criteria.phpixie);
const cursorAll_phpixie = db.packs.find(phpixiePrepCriteria).count();

const cursorAban_phpixie = db.packs.find(
{ $and: [
	phpixiePrepCriteria,
	{ 'usable.abandoned': { $exists: true } }
]}).count();

printjson({
	"title": "All phpixie packages",
	"count": cursorAll_phpixie
});

printjson({
	"title": "Abandoned phpixie packages",
	"count": cursorAban_phpixie
});



const symfonyPrepCriteria = prepareCriteria(criteria.symfony);
const cursorAll_symfony = db.packs.find(symfonyPrepCriteria).count();

const cursorAban_symfony = db.packs.find(
{ $and: [
	symfonyPrepCriteria,
	{ 'usable.abandoned': { $exists: true } }
]}).count();

printjson({
	"title": "All symfony packages",
	"count": cursorAll_symfony
});

printjson({
	"title": "Abandoned symfony packages",
	"count": cursorAban_symfony
});



const slimPrepCriteria = prepareCriteria(criteria.slim);
const cursorAll_slim = db.packs.find(slimPrepCriteria).count();

const cursorAban_slim = db.packs.find(
{ $and: [
	slimPrepCriteria,
	{ 'usable.abandoned': { $exists: true } }
]}).count();

printjson({
	"title": "All slim packages",
	"count": cursorAll_slim
});

printjson({
	"title": "Abandoned slim packages",
	"count": cursorAban_slim
});



const wordpressPrepCriteria = prepareCriteria(criteria.wordpress);
const cursorAll_wordpress = db.packs.find(wordpressPrepCriteria).count();

const cursorAban_wordpress = db.packs.find(
{ $and: [
	wordpressPrepCriteria,
	{ 'usable.abandoned': { $exists: true } }
]}).count();

printjson({
	"title": "All wordpress packages",
	"count": cursorAll_wordpress
});

printjson({
	"title": "Abandoned wordpress packages",
	"count": cursorAban_wordpress
});



const zendPrepCriteria = prepareCriteria(criteria.zend);
const cursorAll_zend = db.packs.find(zendPrepCriteria).count();

const cursorAban_zend = db.packs.find(
{ $and: [
	zendPrepCriteria,
	{ 'usable.abandoned': { $exists: true } }
]}).count();

printjson({
	"title": "All zend packages",
	"count": cursorAll_zend
});

printjson({
	"title": "Abandoned zend packages",
	"count": cursorAban_zend
});