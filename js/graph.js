class Graph {
    constructor() {
      this.vertices = {};
    }
  
    // Thêm một đỉnh mới vào đồ thị
    addVertex(vertex) {
      if (!this.vertices[vertex]) {
        this.vertices[vertex] = [];
      }
    }
  
    // Thêm một cạnh giữa hai đỉnh
    addEdge(vertex1, vertex2) {
      if (!this.vertices[vertex1] || !this.vertices[vertex2]) {
        throw new Error('Both vertices must exist in the graph');
      }
  
      this.vertices[vertex1].push(vertex2);
      this.vertices[vertex2].push(vertex1); // Nếu đồ thị là vô hướng
    }
  
    // In đồ thị
    printGraph() {
      const vertices = Object.keys(this.vertices);
      for (let i = 0; i < vertices.length; i++) {
        const vertex = vertices[i];
        const edges = this.vertices[vertex];
        let edgeString = '';
        for (let j = 0; j < edges.length; j++) {
          edgeString += edges[j] + ' ';
        }
        console.log(vertex + ' -> ' + edgeString);
      }
    }
  }
  
  // Sử dụng đồ thị
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addEdge('A', 'B');
  graph.addEdge('B', 'C');
  graph.printGraph();
  