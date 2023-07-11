export interface MajorCredits {
    brand: string
    credits: number;
}

export interface MinorCredits {
    brand?: string
    credits: number
}


export const sumMajorCredits = (subject1: MajorCredits, subject2: MajorCredits): number => {
    return subject1.credits + subject2.credits;
  }
  
export const sumMinorCredits = (subject1: MinorCredits, subject2: MinorCredits): number => {
    return subject1.credits + subject2.credits;
  }
