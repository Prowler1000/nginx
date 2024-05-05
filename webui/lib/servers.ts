"use server"
import { GetDB } from './db';

export interface ServerData {
    id: number,
    name: string,
    hostname: string,
    port: number,
    ssl_port: number,
    http_redirect: boolean,
}

function map_to_serverdata(x: any): ServerData {
    return {
        id: x["id"],
        name: x["name"],
        hostname: x["hostname"],
        port: x["Non SSL Port"],
        ssl_port: x["SSL Port"],
        http_redirect: x["Redirect HTTP"],
    } as ServerData;
}

export async function GetAllServers(): Promise<ServerData[]> {
    const database = await GetDB();
    const result = await database.all("SELECT * FROM servers");
    let servers: ServerData[] = [];
    console.log(result);
    result.forEach(x => {
        servers.push(map_to_serverdata(x));
    });
    return servers;
}