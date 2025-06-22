import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",
});
export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ["card"],
                mode: "payment",
                line_items: [
                    {
                        price: "price_1RcYAQFVbYwjbgXTYkNcg8t5",
                        quantity: 1,
                    },
                ],
                success_url: "https://crset-agi-commander.vercel.app/success",
                cancel_url: "https://crset-agi-commander.vercel.app/cancel",
            });
            res.status(200).json({ url: session.url });
        }
        catch (error) {
            console.error("Erro ao criar sessão de checkout:", error);
            res.status(500).json({ error: error.message });
        }
    }
    else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
}
