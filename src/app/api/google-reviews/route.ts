import { NextResponse } from "next/server";

export async function GET() {
    const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
    const apiKey = process.env.GOOGLE_API_KEY;

    if (!placeId || !apiKey) {
        return NextResponse.json(
            { error: "Unable to fetch google reviews, Missing google reviews credentials." },
            { status: 500 },
        );
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status !== "OK") {
            return NextResponse.json(
                { error: "Unable to fetch google reviews. Please try again later.", details: data },
                { status: 500 },
            );
        }

        return NextResponse.json(data.result);
    } catch (error) {
        return NextResponse.json({ error: "An unexpected error occurred", details: error }, { status: 500 });
    }
}
