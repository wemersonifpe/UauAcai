import { Injectable } from '@angular/core';
import { DatabaseService } from 'src/app/care/service/database.service';
import { Fruta } from './fruta';

@Injectable({
  providedIn: 'root'
})
export class FrutaService {

  constructor(private db: DatabaseService) { }

  save(fruta: Fruta){
    if(fruta.id > 0){
      return this.update(fruta);
    } else {
      return this.insert(fruta);
    }
  }

  private insert(fruta: Fruta){
    const sql = 'insert into fruta (nome) values (?)';
    const data = [fruta.nome];

    return this.db.executeSQL(sql, data);
  }

  private update(fruta: Fruta){
    const sql = 'update fruta set name = ? where id = ?';
    const data = [fruta.nome, fruta.id];

    return this.db.executeSQL(sql, data);
  }

  delete(id: number){
    const sql = 'delete fromm fruta where id: ?';
    const data = [id];

    return this.db.executeSQL(sql, data);
  }

  async getById(id: number){
    const sql = 'select * from fruta where id = ?';
    const data = [id];
    const result = await this.db.executeSQL(sql, data);
    const rows = result.rows;
    const fruta = new Fruta();
    if(rows && rows.length > 0){
      const item = rows.item(0);
      fruta.id = item.id;
      fruta.nome = item.nome;
    }
    return fruta;
  }

  async getAll(){
    const sql = 'select * from fruta';
    const result = await this.db.executeSQL(sql);
    const frutas = this.fillFrutas(result.rows);
    return frutas;
  }

  async filter(text: string){
    const sql = 'select * from fruta where name like ?';
    const data = [`%${text}%`];
    const result = await this.db.executeSQL(sql, data);
    const frutas = this.fillFrutas(result.rows);
    return frutas;
  }

  private fillFrutas(rows: any){
    const frutas: Fruta[] = [];

    for (let i=0; i < rows.length; i++){
      const item = rows.item(i);
      const fruta = new Fruta();
      fruta.id = item.id;
      fruta.nome = item.nome;
      frutas.push(fruta);
    }

    return frutas;
  }

}
