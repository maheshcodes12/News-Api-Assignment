import React from "react";
import Header from "../components/Header";
import { Box, Typography } from "@mui/material";

const Article = () => {
	return (
		<Box>
			<Header />
			<Box
				my={4}
				display={"flex"}
				flexDirection={"column"}
				justifyContent={"space-evenly"}
				alignContent={"center"}>
				<Typography
					variant='subtitle1'
					color='initial'>
					Topic
				</Typography>
				<Typography
					variant='h4'
					color='initial'>
					HEader od the news
				</Typography>
				<Typography
					variant='h6'
					color='initial'>
					Text in short explaining the news
				</Typography>
				<Typography
					variant='subtitle1'
					color='initial'>
					By Author
				</Typography>
				<Typography
					variant='subtitle1'
					color='initial'>
					Location
				</Typography>
				<Typography
					variant='subtitle1'
					color='initial'>
					Time
				</Typography>
				<Typography
					variant='h1'
					color='initial'>
					F
				</Typography>
				<Typography
					variant='body1'
					color='initial'>
					body of the news
				</Typography>
			</Box>
		</Box>
	);
};

export default Article;
