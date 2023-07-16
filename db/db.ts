import mysql from 'mysql2/promise';



export default async function connectDB(): Promise<mysql.Connection> {
    const db = await mysql.createConnection({

        host: process.env.MYSQL_HOST,
        port: Number(process.env.MYSQL_PORT),
        database: process.env.MYSQL_DB,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS

    });
    return db

}

