const { getStore, connectLambda } = require("@netlify/blobs");

exports.handler = async (event) => {
  connectLambda(event);

  try {
    const store = getStore("scratch-games");
    const { blobs } = await store.list();

    const games = await Promise.all(
      blobs
        .filter((b) => b.key.endsWith(".sb3"))
        .map(async (b) => {
          const entry = await store.getMetadata(b.key);
          const m = entry?.metadata || {};
          return {
            id: b.key.replace(/\.sb3$/i, ""),
            title: m.title || b.key.replace(/\.sb3$/i, ""),
            fileName: m.fileName || b.key,
            sizeMB: (Number(m.size || 0) / 1024 / 1024).toFixed(2),
            createdAt: m.createdAt || ""
          };
        })
    );

    games.sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store"
      },
      body: JSON.stringify({ games })
    };
  } catch (e) {
    console.error("games:", e);
    return {
      statusCode: 500,
      headers: {"Content-Type": "application/json; charset=utf-8"},
      body: JSON.stringify({ error: e.message || "Error interno al listar juegos" })
    };
  }
};
