"use server"
import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

let database: Database;
async function InitDB() {
    if (!database) {
        database = await open({
            filename: "./collection.db",
            driver: sqlite3.Database,
        });
    }
};

export async function GetDB(): Promise<Database> {
    await InitDB();
    return database;
}