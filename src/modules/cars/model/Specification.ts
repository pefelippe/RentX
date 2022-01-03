import {v4 as uuid} from 'uuid';

class Specification {
  id?: string;
  name: string;
  description: string;
  created_At: Date;

  constructor( name: string, description: string) {
    this.id = uuid();
    this.name = name;
    this.description = description;
    this.created_At = new Date();
  }
}

export {Specification};
