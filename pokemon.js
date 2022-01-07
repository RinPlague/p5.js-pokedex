class pokemon {
    constructor(in_name, in_type, in_secondary_type, in_height_m, in_weight_kg, in_image, in_shiny_image) {
        this.name = in_name;
        this.type = in_type;
        this.secondary_type = in_secondary_type;
        this.height = in_height_m;
        this.weight_kg = in_weight_kg;
        this.image = in_image;
        this.shiny_image = in_shiny_image;
    }

    toString() { 
        return "Pokemon: name=" + this.name + ", type=" + this.type + ", secondary type=" + this.secondary_type + ", height="+ this.height + " weight=" + this.weight_kg + "kg";
    }
}