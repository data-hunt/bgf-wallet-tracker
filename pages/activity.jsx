import { ActivityFeed } from "../page-components/ActivityFeed";
import Head from "next/head";
import fetcher from "../lib/fetch";
import useSWR from "swr";

const ActivityPage = ({ data }) => {
	return <ActivityFeed data={data} />;
};

export const getStaticProps = async () => {
	const res = await fetch(
		"http://api-mainnet.magiceden.dev/v2/wallets/NcSuHQnpntJbeKGkRqiRxo4aswW1CYCjJEA8rLSnUDL/activities?offset=0&limit=100"
	);
	const data = await res.json();
	const dataFields = data.map((transaction) => ({
		type: transaction.type,
		source: transaction.source,
		collection: transaction.collection,
		price: transaction.price,
	}));
	return {
		props: {
			data: dataFields,
		},
	};
};

export default ActivityPage;
