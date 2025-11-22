import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const versaoPostgres = (await database.query("SHOW server_version;")).rows[0]
    .server_version;
  const maxConnections = (await database.query("SHOW max_connections;")).rows[0]
    .max_connections;
  const databaseName = process.env.POSTGRES_DB;
  const databaseOpenedConnectionsResult = await database.query({
    text: "SELECT COUNT(*) AS count FROM pg_stat_activity WHERE datname =$1;",
    values: [databaseName],
  });

  const databaseOpenedConectionsValue =
    databaseOpenedConnectionsResult.rows[0].count;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: versaoPostgres,
        max_connections: parseInt(maxConnections),
        connections_used: parseInt(databaseOpenedConectionsValue),
      },
    },
  });
}
export default status;
