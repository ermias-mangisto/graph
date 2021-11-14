
// class Vertex{

//   constructor(_value,){
//     this.value=_value
//     this.adjacents=[]

//   }
//   addAdjacent(vertex){
//     let index =this.adjacents.indexOf(vertex)
//     if(index==-1){ 
// this.adjacents.push(vertex)}
//   }
//   removeAdjacent(vertex){
// let index =this.adjacents.indexOf(vertex)
// if(index>-1){
//     this.adjacents.splice(index,1)
// }
//   }
// }

// class Graph{
//   Vertexs;
//   constructor(conditon){
//       this.Vertexs=new Map;
//       this.directed=conditon;
//   }
// addVertex(key,data){
//     if(!this.Vertexs.has(key)){
//     this.Vertexs.set(key,new Vertex(data))}
// }
// deleteVertex(key){
//     let current=this.Vertexs.get(key)
// if(current){
//    for(let item of this.Vertexs.values()){
//        item.removeAdjacent(curr)
//    }
// }
// this.Vertexs.delete(key)
// }
// addEdge(souKey,desKey){
//     if(this.Vertexs[souKey] && this.Vertexs[desKey]){
//     let source=this.Vertexs.get(souKey)
//     let des=this.Vertexs.get(desKey)
//     source.addAdjacent(des)
//     if(this.directed==false){
//        des.addAdjacent(source)
//     }
// }

// }
// deleteEdge(souKey,desKey){
//     let des=this.Vertexs.get(desKey)
//    let source=this.Vertexs.get(souKey)
//     if(source && des){
//   source.removeAdjacent(des)
// }
// if(this.directed==false){
// des.removeAdjacent(source)}
// }
// }
// let graph=new Graph(false)
// console.log(graph);
// graph.addVertex("user1",{name:"avi",age:12})
// graph.addVertex("user2",{name:"eli",age:13})
// graph.addEdge("user1","user2")
// console.log(graph);
  let nums=[1,23,3,6,7,98,90]
  function reNums(nums){
      let last=nums.length;
      if(nums.length==1){
      return nums[0]
      }
     let sum = nums[0]+reNums(nums.slice(1,last))
      return sum
  }
  console.log(reNums(nums));
 
