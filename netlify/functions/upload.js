const { getStore, connectLambda } = require("@netlify/blobs");
const Busboy = require("busboy");
const crypto = require("crypto");

exports.handler = async (event) => {
  connectLambda(event);
  if (event.httpMethod !== "POST") return {statusCode:405, body:JSON.stringify({error:"Método no permitido"})};
  try {
    const bb = Busboy({headers:event.headers});
    let title="", fileName="", mime="", chunks=[], size=0;
    const done = new Promise((resolve,reject)=>{
      bb.on("field",(name,val)=>{if(name==="title") title=val.slice(0,60)});
      bb.on("file",(name,file,info)=>{
        if(name!=="file"){file.resume();return}
        fileName=info.filename; mime=info.mimeType;
        file.on("data",d=>{size+=d.length;if(size<=5*1024*1024)chunks.push(d)});
        file.on("limit",()=>reject(new Error("Archivo demasiado grande")));
      });
      bb.on("finish",resolve); bb.on("error",reject);
    });
    const body=event.isBase64Encoded?Buffer.from(event.body,"base64"):Buffer.from(event.body||"");
    bb.end(body); await done;
    if(!fileName || !/\.sb3$/i.test(fileName)) return {statusCode:400,body:JSON.stringify({error:"Archivo .sb3 inválido"})};
    if(size>5*1024*1024) return {statusCode:413,body:JSON.stringify({error:"Máximo 5 MB"})};
    const id=Date.now().toString(36)+"-"+crypto.randomBytes(5).toString("hex");
    const store=getStore("scratch-games");
    await store.set(id+".sb3",Buffer.concat(chunks),{metadata:{title:title||fileName.replace(/\.sb3$/i,""),fileName,size:String(size),mime:"application/x.scratch.sb3",createdAt:new Date().toISOString()}});
    return {statusCode:200,body:JSON.stringify({ok:true,id})};
  } catch(e){console.error(e);return {statusCode:500,body:JSON.stringify({error:e.message||"Error interno"})};
  }
};
