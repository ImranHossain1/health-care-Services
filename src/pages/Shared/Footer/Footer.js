import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box className="mt-5">
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-10px" }}>
		Health Care Hospital
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink as={HashLink} to="/aboutus#mission" >Mission & Vission</FooterLink>
			<FooterLink as={HashLink} to="/aboutus#group">Health Care Group</FooterLink>
			<FooterLink as={HashLink} to="/aboutus#facilities">Hispital Facilities</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink as={Link} to="/services/1">Dental & Maxillofacial Surgery</FooterLink>
			<FooterLink as={Link} to="/services/2">Cardiology</FooterLink>
			<FooterLink as={Link} to="/services/3">Neurology</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink as={Link} to="/faq">Frequently Asked Question</FooterLink>
			<FooterLink as={Link} to="/doctors">Doctors</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
