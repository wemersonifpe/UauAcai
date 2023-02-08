import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';

@Injectable({
  providedIn: 'root'
})
//primeiro projeto 2022
export class DatabaseService {
  db: SQLiteObject;
  databaseName: string = 'acai.db';

  constructor( private sqLite: SQLite, private sqLitePorter: SQLitePorter) { }

   async openDataBase(){
    try {
      this.db = await this.sqLite.create({name: this.databaseName, location: 'defult'});
      await this.createDataBase();
    } catch (error) {
      console.error('Ocorreu um erro ao criar o banco de dados',  error);
    }
  }

  async createDataBase(){
    const sqlCreateDatabase = this.getCreateDatabase();
    const result = await this.sqLitePorter.importSqlToDb(this.db, sqlCreateDatabase);
    return result ? true : false;
  }

  getCreateDatabase(){
    const sqls = [];
    sqls.push('CREATE TABLE IF EXISTS fruta (id integer primary key AUTOINCREMET, name varchar(100));');
    //caso precise criar outra tabela
    sqls.push('CREATE TABLE IF EXISTS cobertura (id integer primary key AUTOINCREMET, name varchar(100));');
    return sqls.join('\n');
  }

  executeSQL( sql: string, params?: any[]){
    return this.db.executeSql(sql, params);
  }
}
