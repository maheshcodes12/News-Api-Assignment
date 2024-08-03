import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Tags from "../components/Tags";
import Header from "../components/Header";
import Headlines from "../components/Headlines";

const Landing = () => {
	return (
		<div>
			<Box overflow={"auto"}>
				<Header />
				<Box
					mt={4}
					display={"flex"}
					justifyContent={"center"}
					alignContent={"center"}
					overflow={"auto"}
					sx={{ display: { xs: "flex", md: "none" } }}>
					<Tags />
				</Box>
				<Box
					mt={8}
					display={"flex"}
					justifyContent={"center"}>
					<Headlines />
				</Box>
			</Box>
		</div>
	);
};

export default Landing;
