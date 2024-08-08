import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import dashboardRoutes from "./routes/dashboardRoutes";
import productRoutes from "./routes/productRoutes";
import userRoutes from "./routes/userRoutes";
import expenseRoutes from "./routes/expenseRoutes";

// route imports

// configurations
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(
	helmet.crossOriginResourcePolicy({
		policy: "cross-origin",
	})
);
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/expenses", expenseRoutes);

// server
const port = Number(process.env.PORT) || 3001;
app.listen(port, "0.0.0.0", () => {
	console.log(`Server is running on port ${port}`);
});
