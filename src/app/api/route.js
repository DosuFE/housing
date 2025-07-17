import { NextResponse } from 'next/server';

export async function GET(_request) {
    const about = [
        {
            id: 1,
            image: '/assets/steven-green.jpg',
            name: 'steven green',
            description: 'Owner'
        },
        {
            id: 2,
            image: '/assets/carl-brymo.jpg',
            name: 'Carl Brmo',
            description: 'Agent'
        },
        {
            id: 3,
            image: '/assets/magret-leo.jpg',
            name: 'magret leo',
            description: 'Supervisor'
        },
        {
            id: 4,
            image: '/assets/antonio-elias.jpg',
            name: 'antonio elias',
            description: 'PRO'
        },
        {
            id: 5,
            image: '/assets/morgan-lotus.jpg',
            name: 'morgan lotus',
            description: 'Financial Secretary'
        },
        {
            id: 6,
            image: '/assets/frank-thomas.jpg',
            name: 'frank thomas',
            description: 'Secretary'
        },
    ];
    return NextResponse.json(about);
} 