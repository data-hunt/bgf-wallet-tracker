import TransactionList from "./TransactionList";

export const ActivityFeed = ({ data }) => {
	return (
		<div>
			<TransactionList data={data} />
		</div>
	);
};
