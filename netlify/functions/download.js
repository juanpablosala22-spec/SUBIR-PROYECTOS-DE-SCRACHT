const { getStore, connectLambda } = require("@netlify/blobs");
exports.handler=async(event)=>{
 connectLambda(event);
 try{
  const id=event.queryStringParameters?.id;
  if(!id || !/^[a-z0-9-]+$/i.test(id)) return {statusCode:400,body:"ID inválido"};
  const store=getStore("scratch-games");
  const key=id+".sb3";
  const blob=await store.getWithMetadata(key,{type:"arrayBuffer"});
  if(!blob?.data)return {statusCode:404,body:"No encontrado"};
  const data=Buffer.from(blob.data);
  const meta=blob.metadata||{};
  return {statusCode:200,isBase64Encoded:true,headers:{
    "Content-Type":meta.mime||"application/x-scratch.sb3",
    "Content-Disposition":`attachment; filename="${String(meta.fileName||"proyecto.sb3").replace(/[^a-zA-Z0-9._-]/g,"_")}"`,
    "Cache-Control":"public, max-age=300"
  },body:data.toString("base64")};
 }catch(e){console.error(e);return {statusCode:500,body:"Error interno"}}
};
