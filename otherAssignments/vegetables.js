const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const judgeVegetable = function (vegetables, metric) {
  let highestMetric = 0
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[highestMetric][metric] < vegetables[i][metric]) {
      highestMetric = i
    }
  }
  console.log(vegetables[highestMetric].submitter)
  return vegetables[highestMetric].submitter
}

judgeVegetable(vegetables, 'redness')