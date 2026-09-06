"use strict";
function getAvailabilityStatus(profile) {
    if (profile.available && profile.weeklyHours >= 8) {
        return "DISPONIBLE";
    }
    else {
        return "INDISPONIBLE";
    }
}
function computeProfileScore(profile) {
    const score = profile.experienceYears * 10 +
        profile.technologies.length * 10 +
        profile.weeklyHours;
    return Math.min(score, 100);
}
class Developer {
    name;
    city;
    experienceYears;
    available;
    weeklyHours;
    technologies;
    constructor(name, city, experienceYears, available, weeklyHours, technologies) {
        this.name = name;
        this.city = city;
        this.experienceYears = experienceYears;
        this.available = available;
        this.weeklyHours = weeklyHours;
        this.technologies = technologies;
    }
    getStatus() {
        return getAvailabilityStatus({
            name: this.name,
            city: this.city,
            experienceYears: this.experienceYears,
            available: this.available,
            weeklyHours: this.weeklyHours,
            technologies: this.technologies
        });
    }
    getScore() {
        return computeProfileScore({
            name: this.name,
            city: this.city,
            experienceYears: this.experienceYears,
            available: this.available,
            weeklyHours: this.weeklyHours,
            technologies: this.technologies
        });
    }
    printSummary() {
        console.log("=== DEVBOARD CLI ===");
        console.log("Nom :", this.name);
        console.log("Ville :", this.city);
        console.log("Experience :", this.experienceYears, "ans");
        console.log("Disponible :", this.available ? "oui" : "non");
        console.log("Technos :", this.technologies.join(", "));
        console.log("Charge :", this.weeklyHours, "h/semaine");
        console.log("Statut :", this.getStatus());
        console.log("Score :", this.getScore() + "/100");
        console.log("====================");
    }
}
const developerName = "Shahrzad Nematzadeh";
const city = "Liège";
const experienceYears = 2;
const available = true;
let weeklyHours = 10;
const technologies = [
    "TypeScript",
    "Node.js",
    "Git",
    "PostgreSQL"
];
const developer = new Developer(developerName, city, experienceYears, available, weeklyHours, technologies);
developer.printSummary();
