try{
   console.log("Hello");
   throw Error("Error");
}catch(e){
   console.log(e);
}finally{
   console.log("Exit.");
}