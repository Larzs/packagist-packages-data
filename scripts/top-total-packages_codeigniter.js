const phpfw = 'codeigniter';
load('criteria.js');

const prepCriteria = prepareCriteria(criteria.codeigniter);

cursor = db.packs.aggregate( [
	{ $match: {
		$or: [
         prepCriteria
		]
	}},
      { $sort : { 'payload.package.downloads.total': -1 } },
      { $project: { _id:0, 'package':1, 'payload.package.downloads.total':1}},
      { $limit : 100 }
   ],
   { allowDiskUse: true }
)

while (cursor.hasNext()) {
   print(tojson(cursor.next()));
}
