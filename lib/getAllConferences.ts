import connectDB from '@/db/db';
import { Track } from '@/types';


export default async function getAllConferences(): Promise<Track[]> {


    const mysql = await connectDB()

    try {

        const [results] = await mysql.query<Track[]>('SELECT * FROM testdatabase.tracks LIMIT 0,10')

        await mysql.end()

        return results
    } catch (error) {

        throw new Error('could not bring the data form the DB')

    }

}