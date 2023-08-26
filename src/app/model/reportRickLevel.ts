import { RiskLevel } from "./riskLevel";



  export class ReportRiskLevel {
    constructor(
      public patientAge:number,
      public riskLevel: RiskLevel,
      ) {

      
    }
  }