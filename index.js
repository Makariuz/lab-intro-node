class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length;
  }

  add(item) {

    //is this incorrect?
    this.items.sort()

    //this should add a single value to SortedList no?
    this.items.push(item)
    return this.items
    
  }


  get(pos) {

    if (!this.items[pos]) throw new Error('OutOfBounds');
    return this.items[pos]

  }

  max() {
    if(this.items.length === 0) throw new Error('EmptySortedList');
    //sort from lowest to highest
    this.items.sort()
    //last pos is the max
    return this.items.slice(-1)

  }

  min() {
    if(this.items.length === 0) throw new Error('EmptySortedList');
    //sort from lowest to highest
    this.items.sort()
    //first pos is the lowes
    return this.items[0]

  }

  sum() {
    if(this.items.length === 0) return 0
   let sum= this.items.reduce(function(prev, curr){
      return prev + curr
    })
    return sum
  }

  avg() {
    if(this.items.length === 0) throw new Error('EmptySortedList');
    return this.sum()/this.items.length
  }
}

module.exports = SortedList;
