import { randomUUID } from "node:crypto";
import { getConnection } from "../../src/database.js";

export class MapModel {
  // GENERO
  static async getMap() {
    // const map = getConnection().data.map;
    return map;
  }
  // static async getGeneroByID({ id }) {
  //   const genero = getConnection().data.genero.find(
  //     (g) => g.id === parseInt(id)
  //   );

  //   if (!genero) return false;

  //   return genero;
  // }
  // // CREATE GENERO
  // static async createGenero({ input }) {
  //   const newGenero = {
  //     id: randomUUID(),
  //     ...input,
  //   };
  //   try {
  //     const db = getConnection();
  //     db.data.genero.push(newGenero);

  //     await db.write();
  //   } catch (error) {
  //     return { message: error };
  //   }
  //   return newGenero;
  // }
  // static async deleteGenero({ id }) {
  //   try {
  //     const db = getConnection()
      
  //     const genero = db.data.genero.find(a=>a.id===id)

  //     if (!genero) return false
      
  //     const newGenero = db.data.genero.filter(g=>g.id !== genero.id)
    
  //     db.data.genero=newGenero;
  //     await db.write()
      
  //     return newGenero;

  //   } catch (error) {
  //     return {error:error.message}
  //   }
  // }

  // // TURNO
  // static async getTurno() {
  //   const turno = getConnection().data.turno;
  //   return turno;
  // }
  // static async getTurnoByID({ id }) {
  //   const turno = getConnection().data.turno.find((t) => t.id === id);

  //   if (!turno) return false;

  //   return turno;
  // }
  // // CREATE TURNO
  // static async createTurno({ input }) {
  //   const newTurno = {
  //     id: randomUUID(),
  //     ...input,
  //   };
  //   try {
  //     const db = getConnection();
  //     db.data.turno.push(newTurno);

  //     await db.write();
  //   } catch (error) {
  //     return { message: error };
  //   }
  //   return newTurno;
  // }
  // static async deleteTurno({ id }) {
  //   try {
  //     const db = getConnection()
      
  //     const turno = db.data.turno.find(a=>a.id===id)

  //     if (!turno) return false
      
  //     const newTurno = db.data.turno.filter(g=>g.id !== turno.id)
    
  //     db.data.turno=newTurno;
  //     await db.write()
      
  //     return newTurno;

  //   } catch (error) {
  //     return {error:error.message}
  //   }
  // }

  // // SECCION
  // static async getSeccion() {
  //   const seccion = getConnection().data.seccion;
  //   return seccion;
  // }
  // static async getSeccionByID({ id }) {
  //   const seccion = getConnection().data.seccion.find(
  //     (s) => s.id === id
  //   );

  //   if (!seccion) return false;

  //   return seccion;
  // }
  // // CREATE SECCION
  // static async createSeccion({ input }) {
  //   const newSeccion = {
  //     id: randomUUID(),
  //     ...input,
  //   };
  //   try {
  //     const db = getConnection();
  //     db.data.seccion.push(newSeccion);

  //     await db.write();
  //   } catch (error) {
  //     return { message: error };
  //   }
  //   return newSeccion;
  // }
  // static async deleteSeccion({ id }) {
  //   try {
  //     const db = getConnection()
      
  //     const seccion = db.data.seccion.find(a=>a.id===id)

  //     if (!seccion) return false
      
  //     const newSeccion = db.data.seccion.filter(g=>g.id !== seccion.id)
    
  //     db.data.seccion=newSeccion;
  //     await db.write()
      
  //     return newSeccion;

  //   } catch (error) {
  //     return {error:error.message}
  //   }
  // }
  // // GRADO ACADEMICO
  // static async getGradoAcademico() {
  //   const gradoAcademico = getConnection().data.grado_academico;
  //   return gradoAcademico;
  // }
  // static async getGradoAcademicoByID({ id }) {
  //   const gradoAcademico = getConnection().data.grado_academico.find(
  //     (g) => g.id === id
  //   );

  //   if (!gradoAcademico) return false;

  //   return gradoAcademico;
  // }
  // // CREATE GRADO ACADEMICO
  // static async createGradoAcademico({ input }) {
  //   const newGradoAcademico = {
  //     id: randomUUID(),
  //     ...input,
  //   };
  //   try {
  //     const db = getConnection();
  //     db.data.grado_academico.push(newGradoAcademico);

  //     await db.write();
  //   } catch (error) {
  //     return { message: error };
  //   }
  //   return newGradoAcademico;
  // }
  // static async deleteGradoAcademico({ id }) {
  //   try {
  //     const db = getConnection()
      
  //     const gradoAcademico = db.data.grado_academico.find(a=>a.id===id)

  //     if (!gradoAcademico) return false
      
  //     const newGradoAcademico = db.data.grado_academico.filter(g=>g.id !== gradoAcademico.id)
    
  //     db.data.grado_academico=newGradoAcademico;
  //     await db.write()
      
  //     return newGradoAcademico;

  //   } catch (error) {
  //     return {error:error.message}
  //   }
  // }
  // // GRADO ESCOLAR
  // static async getGradoEscolar() {
  //   const gradoEscolar = getConnection().data.grado_escolar;
  //   return gradoEscolar;
  // }
  // static async getGradoEscolarByID({ id }) {
  //   const gradoEscolar = getConnection().data.grado_escolar.find(
  //     (g) => g.id === parseInt(id)
  //   );

  //   if (!gradoEscolar) return false;

  //   return gradoEscolar;
  // }
  // // CREATE GRADO ESCOLAR
  // static async createGradoEscolar({ input }) {
  //   const newGradoEscolar = {
  //     id: randomUUID(),
  //     ...input,
  //   };
  //   try {
  //     const db = getConnection();
  //     db.data.grado_escolar.push(newGradoEscolar);

  //     await db.write();
  //   } catch (error) {
  //     return { message: error };
  //   }
  //   return newGradoEscolar;
  // }
  // static async deleteGradoEscolar({ id }) {
  //   try {
  //     const db = getConnection()
      
  //     const gradoEscolar = db.data.grado_escolar.find(a=>a.id===id)

  //     if (!gradoEscolar) return false
      
  //     const newGradoEscolar = db.data.grado_escolar.filter(g=>g.id !== gradoEscolar.id)
    
  //     db.data.grado_escolar=newGradoEscolar;
  //     await db.write()
      
  //     return newGradoEscolar;

  //   } catch (error) {
  //     return {error:error.message}
  //   }
  // }
  // // TIPO PERSONAL
  // static async getTipoPersonal() {
  //   const tipoPersonal = getConnection().data.tipo_personal;
  //   return tipoPersonal;
  // }

  // static async getTipoPersonalByID({ id }) {
  //   const tipoPersonal = getConnection().data.tipo_personal.find(
  //     (t) => t.id === id
  //   );

  //   if (!tipoPersonal) return false;

  //   return tipoPersonal;
  // }
  // // CREATE TIPO PERSONAL
  // static async createTipoPersonal({ input }) {
  //   const newTipoPersonal = {
  //     id: randomUUID(),
  //     ...input,
  //   };
  //   try {
  //     const db = getConnection();
  //     db.data.tipo_personal.push(newTipoPersonal);

  //     await db.write();
  //   } catch (error) {
  //     return { message: error };
  //   }
  //   return newTipoPersonal;
  // }
  // static async deleteTipoPersonal({ id }) {
  //   try {
  //     const db = getConnection()
      
  //     const tipoPersonal = db.data.tipo_personal.find(a=>a.id===id)

  //     if (!tipoPersonal) return false
      
  //     const newTipoPersonal = db.data.tipo_personal.filter(g=>g.id !== tipoPersonal.id)
    
  //     db.data.tipo_personaL=newTipoPersonal;
  //     await db.write()
      
  //     return newTipoPersonal;

  //   } catch (error) {
  //     return {error:error.message}
  //   }
  // }
}
