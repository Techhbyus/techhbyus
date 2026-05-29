import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

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
            {
                success: false,
                message: "Something went wrong",
                error: error.message,
            },
            { status: 500 }
        );
    }
}