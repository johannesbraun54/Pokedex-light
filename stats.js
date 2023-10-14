function renderStats(stats){
    for (let k = 0; k < stats.length; k++) {
        const statisticName = stats[k]['stat']['name']
        const statisticValue = stats[k]['base_stat'] 

        baseStatName.push(statisticName)
        baseStatValue.push(statisticValue)
        }
}
