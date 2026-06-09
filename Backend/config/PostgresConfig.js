import "dotenv/config";
import pg from "pg";

const {Pool}=pg

const pool=new Pool({
      user:process.env.PG_USERNAME,
      host:process.env.PG_HOST,
      database:process.env.PG_DATABASE,
      password:process.env.PG_PASSWORD,
      port:process.env.PG_PORT
})

pool.query("SELECT NOW()")
  .then(() => console.log("Postgres connected"))
  .catch(err => console.log(err));

export default pool