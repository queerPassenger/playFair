
/*JULIUS*/
     
        const cryptic=require('./algorithms/julius.js').cryptic;
        for(let i=32;i<127;i++){
            let input=String.fromCharCode(i);
            //input=JSON.stringify(input);
            let encrypted=cryptic('e',input,5);
            let decrypted=cryptic('d',encrypted,5);
            console.log(input+'~~~'+encrypted+'~~~'+decrypted);
        }
        

    
/*RSA*/

    /*
    const Key=require('./keyGeneration/rsa.js').Key;

    function generate(){
        let inst=new Key(2,4);
        console.log('Keys',inst.getKeys());
    }
    setInterval(generate,1000);  
    */
