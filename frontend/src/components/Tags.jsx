import { Box, Typography, Divider } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../store/slices/headlinesSlice";

const Tags = () => {
	const [selectedCatagory, setSelectedCatagory] = useState();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(
			fetchData({
				q: "",
				sources: "",
				catagory: selectedCatagory,
				country: "",
			})
		);
	}, [selectedCatagory]);
	return (
		<Box
			sx={{ cursor: "pointer" }}
			display={"flex"}
			px={4}
			pb={1}
			gap={4}
			overflow={"auto"}>
			<Typography
				variant='button'
				onClick={() => setSelectedCatagory("technology")}>
				#Tech
			</Typography>
			<Divider
				orientation='vertical'
				flexItem
			/>
			<Typography
				variant='button'
				onClick={() => setSelectedCatagory("entertainment")}>
				#Entertainment
			</Typography>
			<Divider
				orientation='vertical'
				flexItem
			/>
			<Typography
				variant='button'
				onClick={() => setSelectedCatagory("sports")}>
				#Sports
			</Typography>
			<Divider
				orientation='vertical'
				flexItem
			/>
			<Typography
				variant='button'
				onClick={() => setSelectedCatagory("business")}>
				#Business
			</Typography>
		</Box>
	);
};

export default Tags;
