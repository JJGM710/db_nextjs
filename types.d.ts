import mysql, {
    ConnectionOptions,
    ProcedureCallPacket,
    ResultSetHeader,
    RowDataPacket,
} from 'mysql2/promise';


type Track = RowDataPacket & {
    id: string,
    title: string,
    play: number

}