interface DevProfile {
  name: string;
  city: string;
  experienceYears: number;
  available: boolean;
  weeklyHours: number;
  technologies: string[];
}

function getAvailabilityStatus(profile: DevProfile): string {
  if (profile.available && profile.weeklyHours >= 8) {
    return "DISPONIBLE";
  } else {
    return "INDISPONIBLE";
  }
}

function computeProfileScore(profile: DevProfile): number {
  const score =
    profile.experienceYears * 10 +
    profile.technologies.length * 10 +
    profile.weeklyHours;

  return Math.min(score, 100);
}

class Developer {
  name: string;
  city: string;
  experienceYears: number;
  available: boolean;
  weeklyHours: number;
  technologies: string[];

  constructor(
    name: string,
    city: string,
    experienceYears: number,
    available: boolean,
    weeklyHours: number,
    technologies: string[]
  ) {
    this.name = name;
    this.city = city;
    this.experienceYears = experienceYears;
    this.available = available;
    this.weeklyHours = weeklyHours;
    this.technologies = technologies;
  }

  getStatus(): string {
    return getAvailabilityStatus({
      name: this.name,
      city: this.city,
      experienceYears: this.experienceYears,
      available: this.available,
      weeklyHours: this.weeklyHours,
      technologies: this.technologies
    });
  }

  getScore(): number {
    return computeProfileScore({
      name: this.name,
      city: this.city,
      experienceYears: this.experienceYears,
      available: this.available,
      weeklyHours: this.weeklyHours,
      technologies: this.technologies
    });
  }

  printSummary(): void {
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

const developerName: string = "Shahrzad Nematzadeh";
const city: string = "Liège";
const experienceYears: number = 2;
const available: boolean = true;
let weeklyHours: number = 10;

const technologies: string[] = [
  "TypeScript",
  "Node.js",
  "Git",
  "PostgreSQL"
];

const developer = new Developer(
  developerName,
  city,
  experienceYears,
  available,
  weeklyHours,
  technologies
);

developer.printSummary();