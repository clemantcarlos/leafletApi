import { validatePartialMap, validateMap} from "../schemas/map.js";

export class MapController {
  constructor({ mapModel }) {
    this.mapModel = mapModel;
  }
  // GENERO
  getMap = async (req, res) => {
    const map = await this.mapModel.getMap();
    // res.json(map);
  };
  // getGeneroByID = async (req, res) => {
  //   const { id } = req.params;
  //   const genero = await this.configModel.getGeneroByID({ id });

  //   if (genero) return res.json(genero);

  //   res.status(404).json({ message: "Genero not found" });
  // };
  // createGenero = async (req, res) => {
  //   const result = validateGenero(req.body)

  //   if (result.error) {
  //     return res.status(422).json({ error: JSON.parse(result.error.message) })
  //   }

  //   const newGenero = await this.configModel.createGenero({ input: result.data })

  //   res.status(201).json(newGenero)
  // }
  // deleteGenero = async (req, res) => {
  //   const { id } = req.params

  //   const result = await this.configModel.deleteGenero({ id })

  //   if (!result) {
  //     return res.status(404).json({ message: 'Genero not found' })
  //   }

  //   return res.json({ message: 'Genero deleted' })
  // }

  // // TURNO 
  // getTurno = async (req, res) => {
  //   const turno = await this.configModel.getTurno();
  //   res.json(turno);
  // };
  // getTurnoByID = async (req, res) => {
  //   const { id } = req.params;
  //   const turno = await this.configModel.getTurnoByID({ id });

  //   if (turno) return res.json(turno);

  //   res.status(404).json({ message: "Turno not found" });
  // };
  // createTurno = async (req, res) => {
  //   const result = validateTurno(req.body)

  //   if (result.error) {
  //     return res.status(422).json({ error: JSON.parse(result.error.message) })
  //   }

  //   const newTurno = await this.configModel.createTurno({ input: result.data })

  //   res.status(201).json(newTurno)
  // }
  // deleteTurno = async (req, res) => {
  //   const { id } = req.params

  //   const result = await this.configModel.deleteTurno({ id })

  //   if (!result) {
  //     return res.status(404).json({ message: 'Turno not found' })
  //   }

  //   return res.json({ message: 'Turno deleted' })
  // }
  
  // // SECCION
  // getSeccion = async (req, res) => {
  //   const seccion = await this.configModel.getSeccion();
  //   res.json(seccion);
  // };
  // getSeccionByID = async (req, res) => {
  //   const { id } = req.params;
  //   const seccion = await this.configModel.getSeccionByID({ id });

  //   if (seccion) return res.json(seccion);

  //   res.status(404).json({ message: "Seccion not found" });
  // };
  // createSeccion = async (req, res) => {
  //   const result = validateSeccion(req.body)

  //   if (result.error) {
  //     return res.status(422).json({ error: JSON.parse(result.error.message) })
  //   }

  //   const newSeccion = await this.configModel.createSeccion({ input: result.data })

  //   res.status(201).json(newSeccion)
  // }
  // deleteSeccion = async (req, res) => {
  //   const { id } = req.params

  //   const result = await this.configModel.deleteSeccion({ id })

  //   if (!result) {
  //     return res.status(404).json({ message: 'Seccion not found' })
  //   }

  //   return res.json({ message: 'Seccion deleted' })
  // }

  // // GRADO ACADEMICO
  // getGradoAcademico = async (req, res) => {
  //   const gradoAcademico = await this.configModel.getGradoAcademico();
  //   res.json(gradoAcademico);
  // };
  // getGradoAcademicoByID = async (req, res) => {
  //   const { id } = req.params;
  //   const gradoAcademico = await this.configModel.getGradoAcademicoByID({ id });

  //   if (gradoAcademico) return res.json(gradoAcademico);

  //   res.status(404).json({ message: "Grado academico not found" });
  // };
  // createGradoAcademico = async (req, res) => {
  //   const result = validateGradoAcademico(req.body)

  //   if (result.error) {
  //     return res.status(422).json({ error: JSON.parse(result.error.message) })
  //   }

  //   const newGradoAcademico = await this.configModel.createGradoAcademico({ input: result.data })

  //   res.status(201).json(newGradoAcademico)
  // }
  // deleteGradoAcademico = async (req, res) => {
  //   const { id } = req.params

  //   const result = await this.configModel.deleteGradoAcademico({ id })

  //   if (!result) {
  //     return res.status(404).json({ message: 'Grado academico not found' })
  //   }

  //   return res.json({ message: 'Grado academico deleted' })
  // }
 
  // // GRADO ESCOLAR
  // getGradoEscolar = async (req, res) => {
  //   const gradoEscolar = await this.configModel.getGradoEscolar();
  //   res.json(gradoEscolar);
  // };
  // getGradoEscolarByID = async (req, res) => {
  //   const { id } = req.params;
  //   const gradoEscolar = await this.configModel.getGradoEscolarByID({ id });

  //   if (gradoEscolar) return res.json(gradoEscolar);

  //   res.status(404).json({ message: "Grado escolar not found" });
  // };
  // createGradoEscolar = async (req, res) => {
  //   const result = validateGradoEscolar(req.body)

  //   if (result.error) {
  //     return res.status(422).json({ error: JSON.parse(result.error.message) })
  //   }

  //   const newGradoEscolar = await this.configModel.createGradoEscolar({ input: result.data })

  //   res.status(201).json(newGradoEscolar)
  // }
  // deleteGradoEscolar = async (req, res) => {
  //   const { id } = req.params

  //   const result = await this.configModel.deleteGradoEscolar({ id })

  //   if (!result) {
  //     return res.status(404).json({ message: 'Grado escolar not found' })
  //   }

  //   return res.json({ message: 'Grado escolar deleted' })
  // }
 
  // // TIPO PERSONAL
  // getTipoPersonal = async (req, res) => {
  //   const tipoPersonal = await this.configModel.getTipoPersonal();
  //   res.json(tipoPersonal);
  // };
  // getTipoPersonaByID = async (req, res) => {
  //   const { id } = req.params;
  //   const tipoPersonal = await this.configModel.getTipoPersonalByID({ id });

  //   if (tipoPersonal) return res.json(tipoPersonal);

  //   res.status(404).json({ message: "Tipo personal not found" });
  // };
  // createTipoPersonal = async (req, res) => {
  //   const result = validateTipoPersonal(req.body)

  //   if (result.error) {
  //     return res.status(422).json({ error: JSON.parse(result.error.message) })
  //   }

  //   const newTipoPersonal = await this.configModel.createTipoPersonal({ input: result.data })

  //   res.status(201).json(newTipoPersonal)

  // }
  // deleteTipoPersonal = async (req, res) => {
  //   const { id } = req.params

  //   const result = await this.configModel.deleteTipoPersonal({ id })

  //   if (!result) {
  //     return res.status(404).json({ message: 'Tipo personal not found' })
  //   }

  //   return res.json({ message: 'Tipo personal deleted' })
  // }
}

const mapController = new MapController({});
