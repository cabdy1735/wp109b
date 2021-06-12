class Vector {
    constructor(array) {
      this.a = array
    }
    add(y) {
      var r = []
      var x = this
      for (var i=0; i<x.a.length; i++) {
        r[i] = x.a[i]+y.a[i]
      }
      return new Vector(r)
    }
    dot(y){
      var r=[]
      var x=this
      var n=0
      for(var i=0;i<x.a.length;i++)
      {
          r[i] = x.a[i]*y.a[i]
          n+=r[i]
      }
      return n
  }
  neg(y){
    var r=[]
    var x=this
    for(var i=0;i<x.a.length;i++)
    {
        r[i] = -x.a[i]
    }
    return new Vector(r)
  }

  sub(y){
      var r=[];
      var x=this;
      for(var i=0;i<x.a.length;i++)r[i]=x.a[i]-y.a[i];
      return new Vector(r);
  }
}
  
var x = new Vector([1,2,3])
var y = new Vector([1,1,1])
console.log('x.add(y)=', x.add(y)) /*Vector { a: [ 2, 3, 4 ] }*/
//console.log('x.add(y).add(y).add(x)=', x.add(y).add(y).add(x)) /* Vector { a: [ 4, 6, 8 ] }*/
// x.dot(y) 應該是 6
// x.neg() 應該是 Vector([-1,-2,-3])
// x.sub(y) 應該是 Vector([0,1,2])
console.log('x.dot(y)=', x.dot(y))
console.log('x.neg(y)=', x.neg(y))
console.log('x.sub(y)=', x.sub(y))