function cryptic(type,inp,key){
    let out='';
    let limit=[32,126];
    for(let i=0;i<inp.length;i++){
        let decEq,
            shiftDecEq;
        decEq=inp.charCodeAt(i);
        if(decEq<limit[0] || decEq>limit[1])
            out+=inp[i];
        else{
            shiftDecEq=decEq;
            if(type==='e'){
                shiftDecEq=(decEq+key)%limit[1];
                if(shiftDecEq===0)
                    shiftDecEq=limit[1];
                if(shiftDecEq<limit[0])
                    shiftDecEq=shiftDecEq+(limit[0]-1);               
            }
            else if(type==='d'){
                if(shiftDecEq===limit[1])
                    shiftDecEq=0;
                if(shiftDecEq<(limit[0]+key))
                    shiftDecEq=shiftDecEq-(limit[0]-1);
                shiftDecEq=(decEq-key)%limit[1];                                
            }
            out+=String.fromCharCode(shiftDecEq);
        }
    }
    return out;
}
module.exports={cryptic}