import React from "react";
import { connect } from 'react-redux';
import { deleteLogs } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';


//LogItem takes in a single log as a prop from the
//Logs component parent
//The Logs component(parent) has a component level state with an array of objects
//which was set by the API call when the Logs component mounts
const LogItem = ({ log, deleteLogs }) => {
	const onDelete = () => {
		deleteLogs(log.id);
		M.toast({ html: 'Log Deleted' });
	  };

	return (
        <ul className="collection -item">
			<a
				href='#edit-log-modal'
				className={`modal-trigger   ${log.attention ? "red-text " : "blue-text"}`}>
				{log.message}
			</a>
			<br />
			<li className='grey-text'>
				<span className='black-text'>ID #{log.id}</span> last updated by{" "}
				<span className='black-text'>{log.tech}</span> on{" "}
				<span>{log.date}</span>
				<a href='#' onClick={onDelete} className='secondary-content'>
					<i className='material-icons grey-text'>delete</i>
				</a>
			</li>
    </ul>
	);
};

export default connect(null, {deleteLogs})(LogItem);
