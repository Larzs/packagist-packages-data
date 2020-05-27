const phpfw = 'phpixie';
load('criteria.js');

const prepCriteria = prepareCriteria(criteria.phpixie);

cursor = db.packs.aggregate( [
	{ $match: {
		$or: [
         prepCriteria
		]
	}},
      { $sort : { 'payload.package.downloads.monthly': -1 } },
      { $project: { _id:0, 'package':1, 'payload.package.downloads.monthly':1}},
      { $limit : 100 }
   ],
   { allowDiskUse: true }
)

while (cursor.hasNext()) {
   print(tojson(cursor.next()));
}
