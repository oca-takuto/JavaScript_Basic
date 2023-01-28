module.exports.print = a=>console.log(`${a}さん、こんにちは。`);
module.exports.status = ()=>{
   for(a of this.constructor.name){
      for(b in a){
         console.log(`${b}:${a[b]}`);
      }
   }
}
module.exports.all = ()=>{
   //console.log(this);
   i = 0;
   for(b in this){
      if(i < 3){
         i++;
         continue
      }
      console.log(`${b}:${this[b]}`);
   }
}
