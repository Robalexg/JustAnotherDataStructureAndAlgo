class Node{
    constructor(data,next = null){
        this.data = data
        this.next = next
    }
}


class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    ///insert first node
    insertFirst(data){
        this.head = new Node(data,this.head)
        this.size++
    }
    //insert last node
    insertLast(data){
        let current = this.head

        while(current){
            if(current.next === null){
                current.next = new Node(data,null)
                current = current.next
                this.size++
                break;
            }
            current = current.next
        }
    }
    //insert at index
    insertAtIndex(data,index){
        let count = 0
        let current = this.head
        while(current){ 
            count++
            if(count === index){
                let temp = current.next
                current.next = new Node(data,temp)
                this.size++
                break;
            }
            current = current.next
        }
    }
    //Get node at index
    getNodeAtIndex(index){
        let count = 0
        let current = this.head

        while(current){
            count++

            if(count === index){
                console.log(current)
                break
            }
            current = current.next
        }
    }
    //remove at index

    removeAtIndex(index){
        let count = 0;
        let current = this.head

        while(current){
            count++
            if(count === index){
                let prev = current
                current = current.next
                prev.next = current.next
                this.size--

                break 
            }
            current = current.next

        }

    }

    //return size of list
    getLength(){
        console.log('Length:',this.size)
    }
    //return head
    getHead(){
        console.log(this.head)
    }    
    
    //return tail
    getTail(){
        let current = this.head

        while(current){
            if(current.next === null){
                console.log(current)
                break
            }
            current = current.next
        }
    }

    //pop(remove last item in list)
    pop(){
        let current = this.head

        while(current){
            let prev = current
            current = current.next

            if(current.next === null){
                prev.next = null
                this.size--
                break;
            }


        }
    }

    //contains(return true if value is in the list)
    contains(value){
        let current = this.head

        while(current){
            if(current.data === value){
                console.log(current)
                break
            }
            current = current.next
        }
    }
    //find(Find a value and return the index)
    find(value){
        let current = this.head
        let count = 0
        while(current){
            count++
            if(current.data === value){
                console.log(count)
                break
            }
            current = current.next
        }
    }
    //clear list
    clear(){
        this.head = null
    }
    //print list 
    print(){
        let current = this.head

        while(current){
            console.log(current.data)
            current = current.next
        }
    }



}

const testList = new LinkedList()

testList.insertFirst(100)
testList.insertFirst(200)
testList.insertFirst(453)
testList.insertLast(200000)
testList.insertFirst(543)
testList.insertFirst(345)
testList.insertLast(1)
testList.insertAtIndex(4,4)
testList.insertAtIndex(333333,2)
testList.insertAtIndex(333333,1)
testList.insertLast(4)
testList.insertFirst(2)
testList.getNodeAtIndex(3)
testList.removeAtIndex(2)
testList.getHead()
testList.getTail()
testList.pop()
testList.contains(543)
testList.find(200000)





testList.getLength()
testList.print()
testList.clear()
console.log("--------------")
testList.insertFirst(453)
testList.print()

