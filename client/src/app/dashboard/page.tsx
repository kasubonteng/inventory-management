"use client";

import { CheckCircle, Package, TrendingDown, TrendingUp } from "lucide-react";
import CardExpenseSummary from "./CardExpenseSummary";
import CardPopularProducts from "./CardPopularProducts";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardSalesSummary from "./CardSalesSummary";
import StatCard from "./StatCard";

const Dashboard = () => {
	return (
		<div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
			<CardPopularProducts />
			<CardSalesSummary />
			<CardPurchaseSummary />
			<CardExpenseSummary />
			<StatCard
				title="Customer & Expenses"
				dateRange="22 - 29 October 2023"
				details={[
					{
						title: "Customer Growth",
						amount: "1755.00",
						changePercentage: 121,
						IconComponent: TrendingUp,
					},
					{
						title: "Expenses",
						amount: "1755.00",
						changePercentage: -56,
						IconComponent: TrendingDown,
					},
				]}
				primaryIcon={<Package className=" size-6 text-blue-600" />}
			/>
			<StatCard
				title="Dues & Pending Orders"
				dateRange="22 - 29 October 2023"
				details={[
					{
						title: "Dues",
						amount: "1755.00",
						changePercentage: 121,
						IconComponent: TrendingUp,
					},
					{
						title: "Pending Orders",
						amount: "1755.00",
						changePercentage: -56,
						IconComponent: TrendingDown,
					},
				]}
				primaryIcon={<CheckCircle className=" size-6 text-blue-600" />}
			/>
			<StatCard
				title="Sales & Discounts"
				dateRange="22 - 29 October 2023"
				details={[
					{
						title: "Sales",
						amount: "1755.00",
						changePercentage: 121,
						IconComponent: TrendingUp,
					},
					{
						title: "Discounts",
						amount: "1755.00",
						changePercentage: -56,
						IconComponent: TrendingDown,
					},
				]}
				primaryIcon={<CheckCircle className=" size-6 text-blue-600" />}
			/>
		</div>
	);
};

export default Dashboard;
