/**
 * gets the information for the stats from a JSON an renders it with a for-loop 
 * @param {JSON} stats 
 */

function renderStats(stats){
    for (let k = 0; k < stats.length; k++) {
        const statisticName = stats[k]['stat']['name']
        const statisticValue = stats[k]['base_stat'] 

        baseStatName.push(statisticName)
        baseStatValue.push(statisticValue)
        }
}
