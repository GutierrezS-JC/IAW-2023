import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios';

declare namespace Components {
    namespace Schemas {
        /**
         * loopback.Count
         */
        export interface LoopbackCount {
            count?: number;
        }
        /**
         * NewSitio
         * (tsType: Omit<Sitio, 'id'>, schemaOptions: { title: 'NewSitio', exclude: [ 'id' ] })
         */
        export interface NewSitio {
            nombre: string;
            url: string;
            niveles: number;
            frecuencia: number;
            docExtractor: string;
            customLinkSelector?: string;
            userEmail: string;
            habilitado?: boolean;
        }
        /**
         * NewSnapshotInTarea
         * (tsType: @loopback/repository-json-schema#Optional<Omit<Snapshot, 'id'>, 'tareaId'>, schemaOptions: { title: 'NewSnapshotInTarea', exclude: [ 'id' ], optional: [ 'tareaId' ] })
         */
        export interface NewSnapshotInTarea {
            nombre: string;
            estado: string;
            timestamp: string; // date-time
            documentos: {
                [key: string]: any;
            }[];
            tareaId?: string;
        }
        /**
         * NewTarea
         * (tsType: Omit<Tarea, 'id'>, schemaOptions: { title: 'NewTarea', exclude: [ 'id' ] })
         */
        export interface NewTarea {
            timestamp: string; // date-time
            nombre: string;
            estado: string;
            sitioId?: string;
        }
        /**
         * NewTareaInSitio
         * (tsType: @loopback/repository-json-schema#Optional<Omit<Tarea, 'id'>, 'sitioId'>, schemaOptions: { title: 'NewTareaInSitio', exclude: [ 'id' ], optional: [ 'sitioId' ] })
         */
        export interface NewTareaInSitio {
            timestamp: string; // date-time
            nombre: string;
            estado: string;
            sitioId?: string;
        }
        /**
         * PingResponse
         */
        export interface PingResponse {
            greeting?: string;
            date?: string;
            url?: string;
            headers?: {
                [name: string]: any;
                "Content-Type"?: string;
            };
        }
        /**
         * Sitio
         */
        export interface Sitio {
            id?: string;
            nombre: string;
            url: string;
            niveles: number;
            frecuencia: number;
            docExtractor: string;
            customLinkSelector?: string;
            userEmail: string;
            habilitado?: boolean;
        }
        /**
         * Sitio.Filter
         */
        export interface SitioFilter {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            /**
             * Sitio.WhereFilter
             */
            where?: {
                [name: string]: any;
            };
            /**
             * Sitio.Fields
             */
            fields?: /* Sitio.Fields */ {
                id?: boolean;
                nombre?: boolean;
                url?: boolean;
                niveles?: boolean;
                frecuencia?: boolean;
                docExtractor?: boolean;
                customLinkSelector?: boolean;
                userEmail?: boolean;
                habilitado?: boolean;
            } | ("id" | "nombre" | "url" | "niveles" | "frecuencia" | "docExtractor" | "customLinkSelector" | "userEmail" | "habilitado")[];
            /**
             * Sitio.IncludeFilter
             */
            include?: (/* Sitio.IncludeFilter.Items */ SitioIncludeFilterItems | string)[];
        }
        /**
         * Sitio.Filter
         */
        export interface SitioFilter1 {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            /**
             * Sitio.Fields
             */
            fields?: /* Sitio.Fields */ {
                id?: boolean;
                nombre?: boolean;
                url?: boolean;
                niveles?: boolean;
                frecuencia?: boolean;
                docExtractor?: boolean;
                customLinkSelector?: boolean;
                userEmail?: boolean;
                habilitado?: boolean;
            } | ("id" | "nombre" | "url" | "niveles" | "frecuencia" | "docExtractor" | "customLinkSelector" | "userEmail" | "habilitado")[];
            /**
             * Sitio.IncludeFilter
             */
            include?: (/* Sitio.IncludeFilter.Items */ SitioIncludeFilterItems | string)[];
        }
        /**
         * Sitio.IncludeFilter.Items
         */
        export interface SitioIncludeFilterItems {
            relation?: "tareas";
            scope?: /* Sitio.ScopeFilter */ SitioScopeFilter;
        }
        /**
         * SitioPartial
         * (tsType: Partial<Sitio>, schemaOptions: { partial: true })
         */
        export interface SitioPartial {
            id?: string;
            nombre?: string;
            url?: string;
            niveles?: number;
            frecuencia?: number;
            docExtractor?: string;
            customLinkSelector?: string;
            userEmail?: string;
            habilitado?: boolean;
        }
        /**
         * Sitio.ScopeFilter
         */
        export interface SitioScopeFilter {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            where?: {
                [name: string]: any;
            };
            fields?: {
                [name: string]: any;
            } | string[];
            include?: {
                [name: string]: any;
            }[];
        }
        /**
         * SitioWithRelations
         * (tsType: SitioWithRelations, schemaOptions: { includeRelations: true })
         */
        export interface SitioWithRelations {
            id?: string;
            nombre: string;
            url: string;
            niveles: number;
            frecuencia: number;
            docExtractor: string;
            customLinkSelector?: string;
            userEmail: string;
            habilitado?: boolean;
            tareas?: /**
             * TareaWithRelations
             * (tsType: TareaWithRelations, schemaOptions: { includeRelations: true })
             */
            TareaWithRelations[];
        }
        /**
         * Snapshot
         */
        export interface Snapshot {
            id?: string;
            nombre: string;
            estado: string;
            timestamp: string; // date-time
            documentos: {
                [key: string]: any;
            }[];
            tareaId?: string;
        }
        /**
         * SnapshotPartial
         * (tsType: Partial<Snapshot>, schemaOptions: { partial: true })
         */
        export interface SnapshotPartial {
            id?: string;
            nombre?: string;
            estado?: string;
            timestamp?: string; // date-time
            documentos?: {
                [key: string]: any;
            }[];
            tareaId?: string;
        }
        /**
         * SnapshotWithRelations
         * (tsType: SnapshotWithRelations, schemaOptions: { includeRelations: true })
         */
        export interface SnapshotWithRelations {
            id?: string;
            nombre: string;
            estado: string;
            timestamp: string; // date-time
            documentos: {
                [key: string]: any;
            }[];
            tareaId?: string;
        }
        /**
         * Tarea
         */
        export interface Tarea {
            id?: string;
            timestamp: string; // date-time
            nombre: string;
            estado: string;
            sitioId?: string;
        }
        /**
         * Tarea.Filter
         */
        export interface TareaFilter {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            /**
             * Tarea.Fields
             */
            fields?: /* Tarea.Fields */ {
                id?: boolean;
                timestamp?: boolean;
                nombre?: boolean;
                estado?: boolean;
                sitioId?: boolean;
            } | ("id" | "timestamp" | "nombre" | "estado" | "sitioId")[];
            /**
             * Tarea.IncludeFilter
             */
            include?: (/* Tarea.IncludeFilter.Items */ TareaIncludeFilterItems | string)[];
        }
        /**
         * Tarea.Filter
         */
        export interface TareaFilter1 {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            /**
             * Tarea.WhereFilter
             */
            where?: {
                [name: string]: any;
            };
            /**
             * Tarea.Fields
             */
            fields?: /* Tarea.Fields */ {
                id?: boolean;
                timestamp?: boolean;
                nombre?: boolean;
                estado?: boolean;
                sitioId?: boolean;
            } | ("id" | "timestamp" | "nombre" | "estado" | "sitioId")[];
            /**
             * Tarea.IncludeFilter
             */
            include?: (/* Tarea.IncludeFilter.Items */ TareaIncludeFilterItems | string)[];
        }
        /**
         * Tarea.IncludeFilter.Items
         */
        export interface TareaIncludeFilterItems {
            relation?: "snapshots";
            scope?: /* Tarea.ScopeFilter */ TareaScopeFilter;
        }
        /**
         * TareaPartial
         * (tsType: Partial<Tarea>, schemaOptions: { partial: true })
         */
        export interface TareaPartial {
            id?: string;
            timestamp?: string; // date-time
            nombre?: string;
            estado?: string;
            sitioId?: string;
        }
        /**
         * Tarea.ScopeFilter
         */
        export interface TareaScopeFilter {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            where?: {
                [name: string]: any;
            };
            fields?: {
                [name: string]: any;
            } | string[];
            include?: {
                [name: string]: any;
            }[];
        }
        /**
         * TareaWithRelations
         * (tsType: TareaWithRelations, schemaOptions: { includeRelations: true })
         */
        export interface TareaWithRelations {
            id?: string;
            timestamp: string; // date-time
            nombre: string;
            estado: string;
            sitioId?: string;
            snapshots?: /**
             * SnapshotWithRelations
             * (tsType: SnapshotWithRelations, schemaOptions: { includeRelations: true })
             */
            SnapshotWithRelations[];
        }
    }
}
declare namespace Paths {
    namespace BusquedaControllerConsulta {
        namespace Parameters {
            export type Id = string;
            export type Q = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            q?: Parameters.Q;
        }
        namespace Responses {
            /**
             * Array of documents from Snapshot which belongs to a specific Tarea
             * example:
             * [
             *   {
             *     "title": "string",
             *     "price": "string",
             *     "description": "string"
             *   }
             * ]
             */
            export type $200 = any;
        }
    }
    namespace BusquedaControllerDocumentos {
        namespace Parameters {
            export type Q = string;
        }
        export interface QueryParameters {
            q?: Parameters.Q;
        }
        namespace Responses {
            /**
             * Array of documents and Snapshot Info
             * example:
             * [
             *   {
             *     "title": "string",
             *     "price": "string",
             *     "description": "string"
             *   }
             * ]
             */
            export type $200 = any;
        }
    }
    namespace BusquedaControllerSnapshotDocumentos {
        namespace Parameters {
            export type Id = string;
            export type Q = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            q?: Parameters.Q;
        }
        namespace Responses {
            /**
             * Array of documents and Snapshot Info which belongs to a specific Tarea
             * example:
             * [
             *   {
             *     "title": "string",
             *     "price": "string",
             *     "description": "string"
             *   }
             * ]
             */
            export type $200 = any;
        }
    }
    namespace BusquedaControllerTareasEnRango {
        namespace Parameters {
            export type FechaFin = string; // date
            export type FechaInicio = string; // date
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            fechaInicio?: Parameters.FechaInicio /* date */;
            fechaFin?: Parameters.FechaFin /* date */;
        }
        namespace Responses {
            export type $200 = /* Tarea */ Components.Schemas.Tarea[];
        }
    }
    namespace MetricasControllerMetricasInicio {
        namespace Parameters {
            export type Filter = /* Sitio.Filter */ Components.Schemas.SitioFilter;
            export type UserEmail = string;
        }
        export interface QueryParameters {
            userEmail?: Parameters.UserEmail;
            filter?: Parameters.Filter;
        }
        namespace Responses {
            /**
             * Metricas sobre sitios, tareas y snapshots registrados
             */
            export type $200 = any;
        }
    }
    namespace MetricasControllerMetricasTarea {
        namespace Parameters {
            export type SitioId = string;
        }
        export interface PathParameters {
            sitioId: Parameters.SitioId;
        }
        namespace Responses {
            /**
             * Metricas y datos de un sitio especifico
             */
            export type $200 = any;
        }
    }
    namespace MetricasControllerMetricasTareaEnRango {
        namespace Parameters {
            export type FechaFin = string;
            export type FechaInicio = string;
            export type SitioId = string;
        }
        export interface PathParameters {
            sitioId: Parameters.SitioId;
        }
        export interface QueryParameters {
            fechaInicio?: Parameters.FechaInicio;
            fechaFin?: Parameters.FechaFin;
        }
        namespace Responses {
            /**
             * Metricas y datos de un sitio especifico
             */
            export type $200 = any;
        }
    }
    namespace MetricasControllerObtenerCantidadDocumentos {
        namespace Parameters {
            export type SitioId = string;
        }
        export interface PathParameters {
            sitioId: Parameters.SitioId;
        }
        namespace Responses {
            /**
             * Cantidad de documentos de un sitio especifico
             */
            export type $200 = any;
        }
    }
    namespace PingControllerGreet {
        namespace Responses {
            export type $200 = /* PingResponse */ Components.Schemas.PingResponse;
        }
    }
    namespace PingControllerPing {
        namespace Responses {
            export type $200 = /* PingResponse */ Components.Schemas.PingResponse;
        }
    }
    namespace SitioControllerCount {
        namespace Parameters {
            /**
             * Sitio.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface QueryParameters {
            where?: /* Sitio.WhereFilter */ Parameters.Where;
        }
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace SitioControllerCreate {
        export type RequestBody = /**
         * NewSitio
         * (tsType: Omit<Sitio, 'id'>, schemaOptions: { title: 'NewSitio', exclude: [ 'id' ] })
         */
        Components.Schemas.NewSitio;
        namespace Responses {
            export type $200 = /* Sitio */ Components.Schemas.Sitio;
        }
    }
    namespace SitioControllerDeleteById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Sitio DELETE success
             */
            export type $204 = any;
        }
    }
    namespace SitioControllerDeleteTasksSnapshotsSite {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Sitio, tareas, snapshots DELETE success
             */
            export type $204 = any;
        }
    }
    namespace SitioControllerFind {
        namespace Parameters {
            export type Filter = /* Sitio.Filter */ Components.Schemas.SitioFilter;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /**
             * SitioWithRelations
             * (tsType: SitioWithRelations, schemaOptions: { includeRelations: true })
             */
            Components.Schemas.SitioWithRelations[];
        }
    }
    namespace SitioControllerFindByEmail {
        namespace Parameters {
            export type Filter = /* Sitio.Filter */ Components.Schemas.SitioFilter;
            export type UserEmail = string;
        }
        export interface QueryParameters {
            userEmail?: Parameters.UserEmail;
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace SitioControllerFindById {
        namespace Parameters {
            export type Filter = /* Sitio.Filter */ Components.Schemas.SitioFilter1;
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /**
             * SitioWithRelations
             * (tsType: SitioWithRelations, schemaOptions: { includeRelations: true })
             */
            Components.Schemas.SitioWithRelations;
        }
    }
    namespace SitioControllerReplaceById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /* Sitio */ Components.Schemas.Sitio;
        namespace Responses {
            /**
             * Sitio PUT success
             */
            export type $204 = any;
        }
    }
    namespace SitioControllerUpdateAll {
        namespace Parameters {
            /**
             * Sitio.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface QueryParameters {
            where?: /* Sitio.WhereFilter */ Parameters.Where;
        }
        export type RequestBody = /**
         * SitioPartial
         * (tsType: Partial<Sitio>, schemaOptions: { partial: true })
         */
        Components.Schemas.SitioPartial;
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace SitioControllerUpdateById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /**
         * SitioPartial
         * (tsType: Partial<Sitio>, schemaOptions: { partial: true })
         */
        Components.Schemas.SitioPartial;
        namespace Responses {
            /**
             * Sitio PATCH success
             */
            export type $204 = any;
        }
    }
    namespace SitioControllerUpdateHabilitado {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface RequestBody {
            habilitado?: boolean;
        }
        namespace Responses {
            /**
             * Sitio PATCH success
             */
            export type $204 = any;
        }
    }
    namespace SitioTareaControllerCreate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /**
         * NewTareaInSitio
         * (tsType: @loopback/repository-json-schema#Optional<Omit<Tarea, 'id'>, 'sitioId'>, schemaOptions: { title: 'NewTareaInSitio', exclude: [ 'id' ], optional: [ 'sitioId' ] })
         */
        Components.Schemas.NewTareaInSitio;
        namespace Responses {
            export type $200 = /* Tarea */ Components.Schemas.Tarea;
        }
    }
    namespace SitioTareaControllerDelete {
        namespace Parameters {
            export type Id = string;
            /**
             * Tarea.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            where?: /* Tarea.WhereFilter */ Parameters.Where;
        }
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace SitioTareaControllerFind {
        namespace Parameters {
            export interface Filter {
                [name: string]: any;
            }
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /* Tarea */ Components.Schemas.Tarea[];
        }
    }
    namespace SitioTareaControllerPatch {
        namespace Parameters {
            export type Id = string;
            /**
             * Tarea.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            where?: /* Tarea.WhereFilter */ Parameters.Where;
        }
        export type RequestBody = /**
         * TareaPartial
         * (tsType: Partial<Tarea>, schemaOptions: { partial: true })
         */
        Components.Schemas.TareaPartial;
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace TareaControllerCount {
        namespace Parameters {
            /**
             * Tarea.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface QueryParameters {
            where?: /* Tarea.WhereFilter */ Parameters.Where;
        }
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace TareaControllerCreate {
        export type RequestBody = /**
         * NewTarea
         * (tsType: Omit<Tarea, 'id'>, schemaOptions: { title: 'NewTarea', exclude: [ 'id' ] })
         */
        Components.Schemas.NewTarea;
        namespace Responses {
            export type $200 = /* Tarea */ Components.Schemas.Tarea;
        }
    }
    namespace TareaControllerDeleteById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Tarea DELETE success
             */
            export type $204 = any;
        }
    }
    namespace TareaControllerFind {
        namespace Parameters {
            export type Filter = /* Tarea.Filter */ Components.Schemas.TareaFilter1;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /**
             * TareaWithRelations
             * (tsType: TareaWithRelations, schemaOptions: { includeRelations: true })
             */
            Components.Schemas.TareaWithRelations[];
        }
    }
    namespace TareaControllerFindById {
        namespace Parameters {
            export type Filter = /* Tarea.Filter */ Components.Schemas.TareaFilter;
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /**
             * TareaWithRelations
             * (tsType: TareaWithRelations, schemaOptions: { includeRelations: true })
             */
            Components.Schemas.TareaWithRelations;
        }
    }
    namespace TareaControllerReplaceById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /* Tarea */ Components.Schemas.Tarea;
        namespace Responses {
            /**
             * Tarea PUT success
             */
            export type $204 = any;
        }
    }
    namespace TareaControllerUpdateAll {
        namespace Parameters {
            /**
             * Tarea.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface QueryParameters {
            where?: /* Tarea.WhereFilter */ Parameters.Where;
        }
        export type RequestBody = /**
         * TareaPartial
         * (tsType: Partial<Tarea>, schemaOptions: { partial: true })
         */
        Components.Schemas.TareaPartial;
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace TareaControllerUpdateById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /**
         * TareaPartial
         * (tsType: Partial<Tarea>, schemaOptions: { partial: true })
         */
        Components.Schemas.TareaPartial;
        namespace Responses {
            /**
             * Tarea PATCH success
             */
            export type $204 = any;
        }
    }
    namespace TareaSnapshotControllerCreate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /**
         * NewSnapshotInTarea
         * (tsType: @loopback/repository-json-schema#Optional<Omit<Snapshot, 'id'>, 'tareaId'>, schemaOptions: { title: 'NewSnapshotInTarea', exclude: [ 'id' ], optional: [ 'tareaId' ] })
         */
        Components.Schemas.NewSnapshotInTarea;
        namespace Responses {
            export type $200 = /* Snapshot */ Components.Schemas.Snapshot;
        }
    }
    namespace TareaSnapshotControllerDelete {
        namespace Parameters {
            export type Id = string;
            /**
             * Snapshot.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            where?: /* Snapshot.WhereFilter */ Parameters.Where;
        }
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace TareaSnapshotControllerFind {
        namespace Parameters {
            export interface Filter {
                [name: string]: any;
            }
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /* Snapshot */ Components.Schemas.Snapshot[];
        }
    }
    namespace TareaSnapshotControllerPatch {
        namespace Parameters {
            export type Id = string;
            /**
             * Snapshot.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            where?: /* Snapshot.WhereFilter */ Parameters.Where;
        }
        export type RequestBody = /**
         * SnapshotPartial
         * (tsType: Partial<Snapshot>, schemaOptions: { partial: true })
         */
        Components.Schemas.SnapshotPartial;
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
}

export interface OperationMethods {
  /**
   * PingController.greet
   */
  'PingController.greet'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PingControllerGreet.Responses.$200>
  /**
   * MetricasController.obtenerCantidadDocumentos
   */
  'MetricasController.obtenerCantidadDocumentos'(
    parameters?: Parameters<Paths.MetricasControllerObtenerCantidadDocumentos.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.MetricasControllerObtenerCantidadDocumentos.Responses.$200>
  /**
   * MetricasController.metricasTareaEnRango
   */
  'MetricasController.metricasTareaEnRango'(
    parameters?: Parameters<Paths.MetricasControllerMetricasTareaEnRango.PathParameters & Paths.MetricasControllerMetricasTareaEnRango.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.MetricasControllerMetricasTareaEnRango.Responses.$200>
  /**
   * MetricasController.metricasTarea
   */
  'MetricasController.metricasTarea'(
    parameters?: Parameters<Paths.MetricasControllerMetricasTarea.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.MetricasControllerMetricasTarea.Responses.$200>
  /**
   * MetricasController.metricasInicio
   */
  'MetricasController.metricasInicio'(
    parameters?: Parameters<Paths.MetricasControllerMetricasInicio.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.MetricasControllerMetricasInicio.Responses.$200>
  /**
   * PingController.ping
   */
  'PingController.ping'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PingControllerPing.Responses.$200>
  /**
   * BusquedaController.tareasEnRango
   */
  'BusquedaController.tareasEnRango'(
    parameters?: Parameters<Paths.BusquedaControllerTareasEnRango.PathParameters & Paths.BusquedaControllerTareasEnRango.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.BusquedaControllerTareasEnRango.Responses.$200>
  /**
   * BusquedaController.documentos
   */
  'BusquedaController.documentos'(
    parameters?: Parameters<Paths.BusquedaControllerDocumentos.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.BusquedaControllerDocumentos.Responses.$200>
  /**
   * SitioController.count
   */
  'SitioController.count'(
    parameters?: Parameters<Paths.SitioControllerCount.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SitioControllerCount.Responses.$200>
  /**
   * SitioController.findByEmail
   */
  'SitioController.findByEmail'(
    parameters?: Parameters<Paths.SitioControllerFindByEmail.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SitioControllerFindByEmail.Responses.$200>
  /**
   * SitioController.deleteTasksSnapshotsSite
   */
  'SitioController.deleteTasksSnapshotsSite'(
    parameters?: Parameters<Paths.SitioControllerDeleteTasksSnapshotsSite.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SitioControllerDeleteTasksSnapshotsSite.Responses.$204>
  /**
   * SitioController.updateHabilitado
   */
  'SitioController.updateHabilitado'(
    parameters?: Parameters<Paths.SitioControllerUpdateHabilitado.PathParameters> | null,
    data?: Paths.SitioControllerUpdateHabilitado.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SitioControllerUpdateHabilitado.Responses.$204>
  /**
   * SitioTareaController.find
   */
  'SitioTareaController.find'(
    parameters?: Parameters<Paths.SitioTareaControllerFind.PathParameters & Paths.SitioTareaControllerFind.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SitioTareaControllerFind.Responses.$200>
  /**
   * SitioTareaController.create
   */
  'SitioTareaController.create'(
    parameters?: Parameters<Paths.SitioTareaControllerCreate.PathParameters> | null,
    data?: Paths.SitioTareaControllerCreate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SitioTareaControllerCreate.Responses.$200>
  /**
   * SitioTareaController.patch
   */
  'SitioTareaController.patch'(
    parameters?: Parameters<Paths.SitioTareaControllerPatch.PathParameters & Paths.SitioTareaControllerPatch.QueryParameters> | null,
    data?: Paths.SitioTareaControllerPatch.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SitioTareaControllerPatch.Responses.$200>
  /**
   * SitioTareaController.delete
   */
  'SitioTareaController.delete'(
    parameters?: Parameters<Paths.SitioTareaControllerDelete.PathParameters & Paths.SitioTareaControllerDelete.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SitioTareaControllerDelete.Responses.$200>
  /**
   * SitioController.findById
   */
  'SitioController.findById'(
    parameters?: Parameters<Paths.SitioControllerFindById.PathParameters & Paths.SitioControllerFindById.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SitioControllerFindById.Responses.$200>
  /**
   * SitioController.replaceById
   */
  'SitioController.replaceById'(
    parameters?: Parameters<Paths.SitioControllerReplaceById.PathParameters> | null,
    data?: Paths.SitioControllerReplaceById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SitioControllerReplaceById.Responses.$204>
  /**
   * SitioController.updateById
   */
  'SitioController.updateById'(
    parameters?: Parameters<Paths.SitioControllerUpdateById.PathParameters> | null,
    data?: Paths.SitioControllerUpdateById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SitioControllerUpdateById.Responses.$204>
  /**
   * SitioController.deleteById
   */
  'SitioController.deleteById'(
    parameters?: Parameters<Paths.SitioControllerDeleteById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SitioControllerDeleteById.Responses.$204>
  /**
   * SitioController.find
   */
  'SitioController.find'(
    parameters?: Parameters<Paths.SitioControllerFind.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SitioControllerFind.Responses.$200>
  /**
   * SitioController.create
   */
  'SitioController.create'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.SitioControllerCreate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SitioControllerCreate.Responses.$200>
  /**
   * SitioController.updateAll
   */
  'SitioController.updateAll'(
    parameters?: Parameters<Paths.SitioControllerUpdateAll.QueryParameters> | null,
    data?: Paths.SitioControllerUpdateAll.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SitioControllerUpdateAll.Responses.$200>
  /**
   * TareaController.count
   */
  'TareaController.count'(
    parameters?: Parameters<Paths.TareaControllerCount.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TareaControllerCount.Responses.$200>
  /**
   * BusquedaController.consulta
   */
  'BusquedaController.consulta'(
    parameters?: Parameters<Paths.BusquedaControllerConsulta.PathParameters & Paths.BusquedaControllerConsulta.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.BusquedaControllerConsulta.Responses.$200>
  /**
   * BusquedaController.snapshotDocumentos
   */
  'BusquedaController.snapshotDocumentos'(
    parameters?: Parameters<Paths.BusquedaControllerSnapshotDocumentos.PathParameters & Paths.BusquedaControllerSnapshotDocumentos.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.BusquedaControllerSnapshotDocumentos.Responses.$200>
  /**
   * TareaSnapshotController.find
   */
  'TareaSnapshotController.find'(
    parameters?: Parameters<Paths.TareaSnapshotControllerFind.PathParameters & Paths.TareaSnapshotControllerFind.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TareaSnapshotControllerFind.Responses.$200>
  /**
   * TareaSnapshotController.create
   */
  'TareaSnapshotController.create'(
    parameters?: Parameters<Paths.TareaSnapshotControllerCreate.PathParameters> | null,
    data?: Paths.TareaSnapshotControllerCreate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TareaSnapshotControllerCreate.Responses.$200>
  /**
   * TareaSnapshotController.patch
   */
  'TareaSnapshotController.patch'(
    parameters?: Parameters<Paths.TareaSnapshotControllerPatch.PathParameters & Paths.TareaSnapshotControllerPatch.QueryParameters> | null,
    data?: Paths.TareaSnapshotControllerPatch.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TareaSnapshotControllerPatch.Responses.$200>
  /**
   * TareaSnapshotController.delete
   */
  'TareaSnapshotController.delete'(
    parameters?: Parameters<Paths.TareaSnapshotControllerDelete.PathParameters & Paths.TareaSnapshotControllerDelete.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TareaSnapshotControllerDelete.Responses.$200>
  /**
   * TareaController.findById
   */
  'TareaController.findById'(
    parameters?: Parameters<Paths.TareaControllerFindById.PathParameters & Paths.TareaControllerFindById.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TareaControllerFindById.Responses.$200>
  /**
   * TareaController.replaceById
   */
  'TareaController.replaceById'(
    parameters?: Parameters<Paths.TareaControllerReplaceById.PathParameters> | null,
    data?: Paths.TareaControllerReplaceById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TareaControllerReplaceById.Responses.$204>
  /**
   * TareaController.updateById
   */
  'TareaController.updateById'(
    parameters?: Parameters<Paths.TareaControllerUpdateById.PathParameters> | null,
    data?: Paths.TareaControllerUpdateById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TareaControllerUpdateById.Responses.$204>
  /**
   * TareaController.deleteById
   */
  'TareaController.deleteById'(
    parameters?: Parameters<Paths.TareaControllerDeleteById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TareaControllerDeleteById.Responses.$204>
  /**
   * TareaController.find
   */
  'TareaController.find'(
    parameters?: Parameters<Paths.TareaControllerFind.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TareaControllerFind.Responses.$200>
  /**
   * TareaController.create
   */
  'TareaController.create'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.TareaControllerCreate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TareaControllerCreate.Responses.$200>
  /**
   * TareaController.updateAll
   */
  'TareaController.updateAll'(
    parameters?: Parameters<Paths.TareaControllerUpdateAll.QueryParameters> | null,
    data?: Paths.TareaControllerUpdateAll.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TareaControllerUpdateAll.Responses.$200>
}

export interface PathsDictionary {
  ['/greet']: {
    /**
     * PingController.greet
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PingControllerGreet.Responses.$200>
  }
  ['/metricas/sitio/{sitioId}/documentos/count']: {
    /**
     * MetricasController.obtenerCantidadDocumentos
     */
    'get'(
      parameters?: Parameters<Paths.MetricasControllerObtenerCantidadDocumentos.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.MetricasControllerObtenerCantidadDocumentos.Responses.$200>
  }
  ['/metricas/sitio/{sitioId}/rango']: {
    /**
     * MetricasController.metricasTareaEnRango
     */
    'get'(
      parameters?: Parameters<Paths.MetricasControllerMetricasTareaEnRango.PathParameters & Paths.MetricasControllerMetricasTareaEnRango.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.MetricasControllerMetricasTareaEnRango.Responses.$200>
  }
  ['/metricas/sitio/{sitioId}']: {
    /**
     * MetricasController.metricasTarea
     */
    'get'(
      parameters?: Parameters<Paths.MetricasControllerMetricasTarea.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.MetricasControllerMetricasTarea.Responses.$200>
  }
  ['/metricas']: {
    /**
     * MetricasController.metricasInicio
     */
    'get'(
      parameters?: Parameters<Paths.MetricasControllerMetricasInicio.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.MetricasControllerMetricasInicio.Responses.$200>
  }
  ['/ping']: {
    /**
     * PingController.ping
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PingControllerPing.Responses.$200>
  }
  ['/search/sitios/{id}/tareas/busqueda-en-rango']: {
    /**
     * BusquedaController.tareasEnRango
     */
    'get'(
      parameters?: Parameters<Paths.BusquedaControllerTareasEnRango.PathParameters & Paths.BusquedaControllerTareasEnRango.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.BusquedaControllerTareasEnRango.Responses.$200>
  }
  ['/search']: {
    /**
     * BusquedaController.documentos
     */
    'get'(
      parameters?: Parameters<Paths.BusquedaControllerDocumentos.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.BusquedaControllerDocumentos.Responses.$200>
  }
  ['/sitios/count']: {
    /**
     * SitioController.count
     */
    'get'(
      parameters?: Parameters<Paths.SitioControllerCount.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SitioControllerCount.Responses.$200>
  }
  ['/sitios/email']: {
    /**
     * SitioController.findByEmail
     */
    'get'(
      parameters?: Parameters<Paths.SitioControllerFindByEmail.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SitioControllerFindByEmail.Responses.$200>
  }
  ['/sitios/{id}/eliminar-tareas-snapshots-sitio']: {
    /**
     * SitioController.deleteTasksSnapshotsSite
     */
    'delete'(
      parameters?: Parameters<Paths.SitioControllerDeleteTasksSnapshotsSite.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SitioControllerDeleteTasksSnapshotsSite.Responses.$204>
  }
  ['/sitios/{id}/habilitado']: {
    /**
     * SitioController.updateHabilitado
     */
    'patch'(
      parameters?: Parameters<Paths.SitioControllerUpdateHabilitado.PathParameters> | null,
      data?: Paths.SitioControllerUpdateHabilitado.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SitioControllerUpdateHabilitado.Responses.$204>
  }
  ['/sitios/{id}/tareas']: {
    /**
     * SitioTareaController.create
     */
    'post'(
      parameters?: Parameters<Paths.SitioTareaControllerCreate.PathParameters> | null,
      data?: Paths.SitioTareaControllerCreate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SitioTareaControllerCreate.Responses.$200>
    /**
     * SitioTareaController.patch
     */
    'patch'(
      parameters?: Parameters<Paths.SitioTareaControllerPatch.PathParameters & Paths.SitioTareaControllerPatch.QueryParameters> | null,
      data?: Paths.SitioTareaControllerPatch.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SitioTareaControllerPatch.Responses.$200>
    /**
     * SitioTareaController.find
     */
    'get'(
      parameters?: Parameters<Paths.SitioTareaControllerFind.PathParameters & Paths.SitioTareaControllerFind.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SitioTareaControllerFind.Responses.$200>
    /**
     * SitioTareaController.delete
     */
    'delete'(
      parameters?: Parameters<Paths.SitioTareaControllerDelete.PathParameters & Paths.SitioTareaControllerDelete.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SitioTareaControllerDelete.Responses.$200>
  }
  ['/sitios/{id}']: {
    /**
     * SitioController.replaceById
     */
    'put'(
      parameters?: Parameters<Paths.SitioControllerReplaceById.PathParameters> | null,
      data?: Paths.SitioControllerReplaceById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SitioControllerReplaceById.Responses.$204>
    /**
     * SitioController.updateById
     */
    'patch'(
      parameters?: Parameters<Paths.SitioControllerUpdateById.PathParameters> | null,
      data?: Paths.SitioControllerUpdateById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SitioControllerUpdateById.Responses.$204>
    /**
     * SitioController.findById
     */
    'get'(
      parameters?: Parameters<Paths.SitioControllerFindById.PathParameters & Paths.SitioControllerFindById.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SitioControllerFindById.Responses.$200>
    /**
     * SitioController.deleteById
     */
    'delete'(
      parameters?: Parameters<Paths.SitioControllerDeleteById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SitioControllerDeleteById.Responses.$204>
  }
  ['/sitios']: {
    /**
     * SitioController.create
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.SitioControllerCreate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SitioControllerCreate.Responses.$200>
    /**
     * SitioController.updateAll
     */
    'patch'(
      parameters?: Parameters<Paths.SitioControllerUpdateAll.QueryParameters> | null,
      data?: Paths.SitioControllerUpdateAll.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SitioControllerUpdateAll.Responses.$200>
    /**
     * SitioController.find
     */
    'get'(
      parameters?: Parameters<Paths.SitioControllerFind.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SitioControllerFind.Responses.$200>
  }
  ['/tareas/count']: {
    /**
     * TareaController.count
     */
    'get'(
      parameters?: Parameters<Paths.TareaControllerCount.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TareaControllerCount.Responses.$200>
  }
  ['/tareas/{id}/consulta']: {
    /**
     * BusquedaController.consulta
     */
    'get'(
      parameters?: Parameters<Paths.BusquedaControllerConsulta.PathParameters & Paths.BusquedaControllerConsulta.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.BusquedaControllerConsulta.Responses.$200>
  }
  ['/tareas/{id}/search']: {
    /**
     * BusquedaController.snapshotDocumentos
     */
    'get'(
      parameters?: Parameters<Paths.BusquedaControllerSnapshotDocumentos.PathParameters & Paths.BusquedaControllerSnapshotDocumentos.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.BusquedaControllerSnapshotDocumentos.Responses.$200>
  }
  ['/tareas/{id}/snapshots']: {
    /**
     * TareaSnapshotController.create
     */
    'post'(
      parameters?: Parameters<Paths.TareaSnapshotControllerCreate.PathParameters> | null,
      data?: Paths.TareaSnapshotControllerCreate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TareaSnapshotControllerCreate.Responses.$200>
    /**
     * TareaSnapshotController.patch
     */
    'patch'(
      parameters?: Parameters<Paths.TareaSnapshotControllerPatch.PathParameters & Paths.TareaSnapshotControllerPatch.QueryParameters> | null,
      data?: Paths.TareaSnapshotControllerPatch.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TareaSnapshotControllerPatch.Responses.$200>
    /**
     * TareaSnapshotController.find
     */
    'get'(
      parameters?: Parameters<Paths.TareaSnapshotControllerFind.PathParameters & Paths.TareaSnapshotControllerFind.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TareaSnapshotControllerFind.Responses.$200>
    /**
     * TareaSnapshotController.delete
     */
    'delete'(
      parameters?: Parameters<Paths.TareaSnapshotControllerDelete.PathParameters & Paths.TareaSnapshotControllerDelete.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TareaSnapshotControllerDelete.Responses.$200>
  }
  ['/tareas/{id}']: {
    /**
     * TareaController.replaceById
     */
    'put'(
      parameters?: Parameters<Paths.TareaControllerReplaceById.PathParameters> | null,
      data?: Paths.TareaControllerReplaceById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TareaControllerReplaceById.Responses.$204>
    /**
     * TareaController.updateById
     */
    'patch'(
      parameters?: Parameters<Paths.TareaControllerUpdateById.PathParameters> | null,
      data?: Paths.TareaControllerUpdateById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TareaControllerUpdateById.Responses.$204>
    /**
     * TareaController.findById
     */
    'get'(
      parameters?: Parameters<Paths.TareaControllerFindById.PathParameters & Paths.TareaControllerFindById.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TareaControllerFindById.Responses.$200>
    /**
     * TareaController.deleteById
     */
    'delete'(
      parameters?: Parameters<Paths.TareaControllerDeleteById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TareaControllerDeleteById.Responses.$204>
  }
  ['/tareas']: {
    /**
     * TareaController.create
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.TareaControllerCreate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TareaControllerCreate.Responses.$200>
    /**
     * TareaController.updateAll
     */
    'patch'(
      parameters?: Parameters<Paths.TareaControllerUpdateAll.QueryParameters> | null,
      data?: Paths.TareaControllerUpdateAll.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TareaControllerUpdateAll.Responses.$200>
    /**
     * TareaController.find
     */
    'get'(
      parameters?: Parameters<Paths.TareaControllerFind.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TareaControllerFind.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
