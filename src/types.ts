// src/types.ts
export interface Meal {
    id: string;
    name: string;
    details: string;
    calories: number;
    carbs?: string; // ✅ Ensure all optional fields
    protein?: string;
    vegetables?: string;
}
