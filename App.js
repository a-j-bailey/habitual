import * as React from 'react';
import Home from './views/Home';
import * as SQLite from "expo-sqlite";

function openDatabase() {
//  if (Platform.OS === "web") {
//    return {
//      transaction: () => {
//        return {
//          executeSql: () => {},
//        };
//      },
//    };
//  }

    const db = SQLite.openDatabase("db.db");
    
    db.transaction((tx) => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS habits (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT,
                hours INT,
                minutes INT,
                frequency TEXT
            )`
        );
    });
    
    db.transaction((tx) => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS habit_history (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                habit_id INT,
                date TEXT,
                time_started TEXT,
                time_ended TEXT,
                total_time TEXT
            )`
        );
    });
    return db;
}

const db = openDatabase();

export default function App() {
    return (
        <Home
            db={db}
        />
    );
}