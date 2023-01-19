import { RaceStats } from "./race-stats";

export interface Race {
    name: string;
    stats: RaceStats;
    hairColors: string;
    eyeColors: string;
    minimumAge: number;
    maximumAge: number;
    baseHeight: number;
    minimumWeight: number;
    maximumWeight: number;
}
