import React from "react";
import Markup from './markup/markup';

// React Modal Video
import 'react-modal-video/css/modal-video.min.css';

// Fonts
import "./vendor/line-awesome/css/line-awesome.min.css";
import "./vendor/font-awesome/css/font-awesome.min.css";
import "./vendor/flaticon/flaticon.css";
import "./vendor/themify/themify-icons.css";

// StyleSheet
import './App.scss';

function App() {
	return (
		<div className="page-wraper">
			<Markup />
		</div>
	);
}

export default App;