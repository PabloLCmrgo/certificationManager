export interface Icertification {
    id:number;
    id_contrato_marco:number;
    codigo_contrato_marco:number;
    pedido:number;
    contrato_marco:string;
    id_periodo:number;
    periodo:string;
    fecha_inicio_periodo:string;
    fecha_fin_periodo:string;
    id_certificacion_volume:number;
    id_certificacion_volumen_detalle:number;
    id_estado:number;
    activo:number;
    fecha_registro:Date;
    id_usuario_registro:number;
    id_consolidacion_volumen_detalle:number;
    id_consolidacion_volumen:number;
    consolidacion_volumen:string;
    id_orden_trabajo_avance_detalle:number;
    id_orden_trabajo:number;
    id_item:number;
    precio_estandar:number;
    item:string;
    codigo_item:string;
    descripcion_compuesta:number;
    id_especialidad:number;
    especialidad:string;
    std:number;
    id_unidad_medida:number;
    unidad_medida:string;
    cantidad_volumen:number;
    monto_calculado:number;
    id_posicion:number;
    id_subposicion:number;
}
