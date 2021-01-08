export class Satellite {

    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
        this.name = name;
        this.launchDate = launchDate;
        this.operational =  operational;
        this.type = type;
        this.orbitType = orbitType;
    }

    shouldShowWarning(): boolean{
        
        if(this.type.toUpperCase()=="SPACE DEBRIS")
        return true;
    else
    return false
    }
}
