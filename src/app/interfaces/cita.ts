import { Alumno } from "./alumno"
import { CitaConfirmacion } from "./cita-confirmacion"
import { CitaModalidad } from "./cita-modalidad"
import { CitaTipo } from "./cita-tipo"

export interface Cita {
    cita_id?: number,
    alumno_id: number,
    alumno?: Alumno,
    cita_fecha: Date,
    cita_hora: string,
    cita_descripcion: string,
    citaModalidad_id: number,
    citamodalidad?: CitaModalidad,
    citaTipo_id: number,
    citatipo?: CitaTipo,
    citaconfirmacion_id: number,
    citaconfirmacion?: CitaConfirmacion
}
