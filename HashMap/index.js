

class HashMap{
    constructor(size = 16,){
        this.buckets = new Array(size)
        this.size = size
    }
    
    //hash function
    hash(key) {
        let hashCode = 0;
            
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    } 

    //set
    set(key,value){
        let index = this.hash(key)

        if(!this.buckets[index]){
            this.buckets[index] = []
        }

        this.buckets[index].push([key,value])
    }

    //get
    get(key){
        let index = this.hash(key)

        if(!this.buckets[index]){
            console.log("NOT FOUND ")
            return 
        }

        for(let i = 0; i < this.buckets[index].length; i++){
            if(this.buckets[index][i][0] === key){
                console.log(this.buckets[index][i][1])    
            }
        }

    }

    //has
    has(value){
        for(let bucket in this.buckets){
            for(let i = 0; i < this.buckets[bucket].length; i++){
                if(this.buckets[bucket][i][1] === value ){
                    console.log(true)
                    return
                }
            }
        }

        console.log(false)
    }

    //remove
    remove(key){
        let index = this.hash(key)

        if(!this.buckets[index]){
            console.log('NOT FOUND')
            return
        }

        for(let i = 0; i < this.buckets[index].length; i++){
            if(this.buckets[index][i][0] === key){
                this.buckets[index] = null
                return
            }
        }

    }
    //length
    length(){
        let count = 0;
        for(let bucket in this.buckets){
            count++
        }

        console.log(count)
    }   
    //get all keys
    getKeys(){  
        for(let bucket in this.buckets){
            if(this.buckets[bucket]){
                console.log(this.buckets[bucket][0][0])
            }
        }
    }
    //get all values
    getValues(){  
        for(let bucket in this.buckets){
            if(this.buckets[bucket]){
                console.log(this.buckets[bucket][0][1])
            }
        }
    }

    //get all entries[key,value]
    getAllEntries(){  
        for(let bucket in this.buckets){
            if(this.buckets[bucket]){
                console.log([this.buckets[bucket][0][0],this.buckets[bucket][0][1]])
            }
        }
    }
}

let newMap = new HashMap()

newMap.set('cat1','julius')
newMap.set('cat2','ariana')
newMap.set('cat3','nami')
newMap.set('cat4','miele')
newMap.get('cat1')
newMap.has('nami')
newMap.has('nlaksf')
newMap.length()
newMap.remove('cat4')
newMap.getKeys()
newMap.getValues()
newMap.getAllEntries()

console.log(newMap)







