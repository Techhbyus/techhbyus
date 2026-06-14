import pool from "../../../lib/db";

export async function POST(req) {
    try {

        const body = await req.json();

        const {
            name,
            email,
            business,
            service,
            details,
        } = body;

        // Basic validation
        if (!name || !email || !service) {
            return Response.json(
                {
                    success: false,
                    message: "Required fields are missing",
                },
                { status: 400 }
            );
        }

        await pool.query(
            `
            INSERT INTO service_requests
            (name, email, business, service, details)
            VALUES (?, ?, ?, ?, ?)
            `,
            [
                name,
                email,
                business || "",
                service,
                details || "",
            ]
        );

        return Response.json({
            success: true,
            message: "Request submitted successfully",
        });

    } catch (error) {

        console.error("DATABASE ERROR:", error);

        return Response.json(
            { success: false, message: "Something went wrong" },
            { status: 500 }
        );
    }
}