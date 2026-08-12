const { getStore, connectLambda } = require("@netlify/blobs");
exports.handler=async(event)=>{
 connectLambda(event);
 try{
  const store=getStore("scratch-games");
  const result=await store.list({details:true});
  const games=(result.blobs||[]).filter(x=>x.key.endsWith(".sb3")).map(x=>{
   const m=x.metadata||{};
   return {id:x.key.replace(/\.sb3$/,""),title:m.title||x.key,fileName:m.fileName||x.key,sizeMB:(Number(m.size||0)/1024/1024).toFixed(2),createdAt:m.createdAt||""};
  }).sort((a,b)=>b.createdAt.localeCompare(a.createdAt));
  return {statusCode:200,headers:{"content-type":"application/json"},body:JSON.stringify({games})};
 }catch(e){console.error(e);return {statusCode:500,body:JSON.stringify({error:e.message||"Error interno"})};
}
