
export interface Photo {
    id: number;
    url: string;
    isMain: boolean;
}

export interface Member {
    id: number;
    username: string;
    photoUrl: string;
    dateBirth: Date;
    alias?: any;
    gender: string;
    introduction: string;
    lookingFor: string;
    interests: string;
    city: string;
    country: string;
    photos: Photo[];
    createdDate: Date;
    lastActive: Date;
}

