import styles from "./TransactionList.module.css";
import { Table } from "antd";

const TransactionList = ({ data }) => {
	return (
		<div>
			<h2>Transactions</h2>

			{/* <table border='1'>
				<thead>
					<th>Collection</th>
					<th>Price</th>
					<th>Type</th>
					<th>Source</th>
				</thead>
				<tbody>
					{data.map((x, i) => (
						<tr key={i}>
							<td>{x.collection}</td>
							<td>{x.price}</td>
							<td>{x.type}</td>
							<td>{x.source}</td>
						</tr>
					))}
				</tbody>
			</table> */}
		</div>
	);
};

export default TransactionList;
