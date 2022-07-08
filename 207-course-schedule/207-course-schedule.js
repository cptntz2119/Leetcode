/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []); // precourse: [course]
	const indegree = Array.from({ length: numCourses }, () => 0); // course: dependency count

	for (const [x, y] of prerequisites) {
		graph[y].push(x); // y is requirement of x
		indegree[x]++;
	}

	const queue = [];
	let count = 0;

	// add starting nodes to queue
	for (let i = 0; i < indegree.length; i++) {
		if (indegree[i] === 0) queue.push(i);
	}

	while (queue.length) {
		const x = queue.shift();

		count++;
		for (const y of graph[x]) { // traverse adjacents
			indegree[y]--; // decrement visited

			// add nodes with indegree 0 to queue
			if (!indegree[y]) queue.push(y);
		}
	}

	return count === numCourses;
};