export class Assessment {

    constructor(
        public id: string,
        public patientId: number,
        public date: Date,
        public assessment: string
      ) {

      
    }
  }