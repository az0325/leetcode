/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    const result = []
    const graph = {}

    tickets.forEach(([key, value]) => {
        if(graph[key]){
            graph[key] = [...graph[key], value].sort().reverse()
        } else {
            graph[key] = [value]
        }
    })

    const dfs = (key) => {
        const destinations = graph[key];
        while(destinations && destinations.length) {
            dfs(destinations.pop())
        }

        result.push(key)
    }


    // 시작점
    dfs('JFK')
    return result.reverse()
};