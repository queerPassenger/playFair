class Key{
    constructor(lmt=1,ulmt=5){
        this.lLPrmSet=lmt;
        this.uLPrmSet=ulmt;
        this.primeSet=[];
        this.setPrimeSet();
    }
    checkPrime(n){
        for(let i=2;i<=Math.sqrt(n);i++){
            if(n%i===0)
                return false;
        }
        return (n!==1 && n!==0);
    }
    setPrimeSet(){
        for(let i=Math.pow(2,this.lLPrmSet);i<Math.pow(2,this.uLPrmSet);i++){
            if(this.checkPrime(i))
                this.primeSet.push(i);
        }
    }
    getFactors(n,factors){
        let flag=false;
        for(let i=2;i<n;i++){
            //Factors
            if(n%i===0){
                //Is it sudividable
                if(this.checkPrime(i)){
                    //If not subdividable insert
                    if(factors.indexOf(i)===-1)
                        factors.push(i);
                }
                else
                    this.getFactors(i,factors);

                flag=true;
            }
        }
        if(!flag){
            factors.push(n);
        }
        return factors;
    }
    getRandom(_limit,_not){
        let val;
        do{
            val=Math.floor(Math.random()*_limit)+1;
        }
        while(val===_not)
        return val;
    }
    getKeys(){
        let prime1,
            prime2,
            public_key,
            o_n,
            private_key1,
            pk2Set,
            private_key2;
        
        let ind1=this.getRandom(this.primeSet.length-1,null);
        let ind2=this.getRandom(this.primeSet.length-1,ind1);

        prime1=this.primeSet[ind1];
        prime2=this.primeSet[ind2];

        public_key=prime1*prime2;
        
        o_n=(prime1-1)*(prime2-1);

        //Private key1 Calculation
        let f1=this.getFactors(o_n,this.getFactors(public_key,[]));
        for(let i=2;i<o_n;i++){
            let f2=this.getFactors(i,[]);
            let count=0;
            for(let j=0;j<f2.length;j++){
                if(f1.indexOf(f2[j])===-1)
                    count++;
            }
            if(count===f2.length && count!==0){
                private_key1=i;
                break;
            }
        }

        //Private key2 Calculation
        let k=0;
        pk2Set=[];
        while(pk2Set.length<2){
            if((k*private_key1)%o_n===1)
                pk2Set.push(k);
            k++;            
        }
        private_key2=pk2Set.pop();

        return [public_key,private_key1,private_key2];
    }
    getter(key){
        return JSON.parse(JSON.stringify(this[key]));
    }
}
module.exports={Key}