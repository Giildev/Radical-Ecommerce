import React from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import './style.css';

const Category = () => (
	<Grid>
		<Row className="category">
			<Col md={2}>
				<Thumbnail
					src="https://upload.wikimedia.org/wikipedia/commons/f/fc/242x200.png"
					alt="242x200"
				>
					<span>Category label</span>
				</Thumbnail>
			</Col>
			<Col md={2}>
				<Thumbnail
					src="https://upload.wikimedia.org/wikipedia/commons/f/fc/242x200.png"
					alt="242x200"
				>
					<span>Category label</span>
				</Thumbnail>
			</Col>
			<Col md={2}>
				<Thumbnail
					src="https://upload.wikimedia.org/wikipedia/commons/f/fc/242x200.png"
					alt="242x200"
				>
					<span>Category label</span>
				</Thumbnail>
			</Col>
			<Col md={2}>
				<Thumbnail
					src="https://upload.wikimedia.org/wikipedia/commons/f/fc/242x200.png"
					alt="242x200"
				>
					<span>Category label</span>
				</Thumbnail>
			</Col>
			<Col md={2}>
				<Thumbnail
					src="https://upload.wikimedia.org/wikipedia/commons/f/fc/242x200.png"
					alt="242x200"
				>
					<span>Category label</span>
				</Thumbnail>
			</Col>
			<Col md={2}>
				<Thumbnail
					src="https://upload.wikimedia.org/wikipedia/commons/f/fc/242x200.png"
					alt="242x200"
				>
					<span>Category label</span>
				</Thumbnail>
			</Col>
		</Row>
	</Grid>
);

export default Category;
