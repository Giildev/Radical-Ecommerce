import React from 'react';
import {
	Grid,
	Row,
	Col,
	FormGroup,
	FormControl,
	Glyphicon,
	Button,
	ButtonGroup,
	Image
} from 'react-bootstrap';
import './style.css';

const Header = () => (
	<header className="header">
		<Grid>
			<Row className="header__container vcenter">
				<Col md={2}>
					<Image
						src="https://yt3.ggpht.com/-josExwJl2Os/AAAAAAAAAAI/AAAAAAAAAAA/Z9NW4trGHAg/s100-c-k-no-mo-rj-c0xffffff/photo.jpg"
						circle
						responsive
					/>
				</Col>
				<Col md={6}>
					<FormGroup>
						<FormControl
							className="header__search"
							type="text"
							placeholder="Search"
						/>
					</FormGroup>
				</Col>
				<Col md={4}>
					<ul className="header__buttonGroup">
						<li className="header__item">
							<a className="header__register" href="">
								Register
							</a>
						</li>
						<li className="header__item">
							<a className="header__sign-in" href="">
								Sign in
							</a>
						</li>
						<li className="header__item">
							<a className="header__cart" href="">
								Cart
								<Glyphicon
									className="header__cart__icon"
									glyph="shopping-cart"
								/>
							</a>
						</li>
					</ul>
				</Col>
			</Row>
		</Grid>
	</header>
);

export default Header;
