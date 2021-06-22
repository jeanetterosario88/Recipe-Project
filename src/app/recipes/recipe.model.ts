export class Recipe {
    public name: string; // this is public info
    public description: string;
    public imagePath: string;

    //executed whenever you create a new instance
    constructor(name: string, desc: string, imagePath: string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }

}