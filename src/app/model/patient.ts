export class Patient {
    constructor(
      public id:string,
      public firstName:string,
      public lastName:string,
      public birthDate:Date,
      public gender:string,
      public address:string,
      public phoneNumber: string
      ) {

      
    }
  }