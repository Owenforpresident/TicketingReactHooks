import React from "react";
import Moment from "react-moment";

//LogItem takes in a single log as a prop from the
//Logs component parent
//The Logs component(parent) has a component level state with an array of objects
//which was set by the API call when the Logs component mounts
const LogItem = ({ log }) => {
	console.log(log.date);

	return (
        <li className="collection-item">
		<div>
			<a
				href='#edit-log-modal'
				className={`modal-trigger ${log.attention ? "red-text " : "blue-text"}`}>
				{log.message}
			</a>
			<br />
			<li className='grey-text'>
				<span className='black-text'>ID #{log.id}</span> last updated by{" "}
				<span className='black-text'>{log.tech}</span> on{" "}
				<span>{log.date}</span>
				<a href='#!' className='secondary-content'>
					<i className='material-icons grey-text'>delete</i>
				</a>
			</li>
		</div>
    </li>
	);
};

export default LogItem;
