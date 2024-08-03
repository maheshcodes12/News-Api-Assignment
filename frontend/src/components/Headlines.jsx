import React, { useEffect, useState } from "react";
import {
	Box,
	Typography,
	Divider,
	Pagination,
	Select,
	MenuItem,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const Headlines = () => {
	const [q, setQ] = useState();
	const [sources, setSources] = useState();
	const [country, setCountry] = useState();
	const [catagory, setCatagory] = useState();

	//states used for styling/components-------------------------------------------------
	const [pagination, setPagination] = useState(1);
	const [resultsPerPage, setResultsPerPage] = useState(10);
	let size = 20;
	//---------------------------------------------------------------

	//Redux code-----------------------------------------------------
	const dispatch = useDispatch();
	const headlines = useSelector((state) => state.headlines.items);
	const status = useSelector((state) => state.headlines.status);
	const error = useSelector((state) => state.headlines.error);

	useEffect(() => {
		size = Number(headlines?.length / resultsPerPage) || 20;
		setPagination(size / resultsPerPage);
	}, [headlines, resultsPerPage]);

	const everything = useSelector((state) => state.everything.items);
	const status2 = useSelector((state) => state.everything.status);
	const error2 = useSelector((state) => state.everything.error);

	//---------------------------------------------------------------

	//handling functions---------------------------------------------
	const handleResultsPerPageChange = (e) => {
		e.preventDefault();
		setResultsPerPage(e.target.value);
	};
	const handlePaginationChange = (event, value) => {
		event.preventDefault();
		setPagination(value);
		console.log(pagination);
	};
	// ---------------------------------------------------------------
	if (everything?.length == 0 || headlines?.length == 0) {
		return <Box>Sorry There are no updates for now :(</Box>;
	}

	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			maxWidth={"80vw"}
			justifyContent={"center"}
			alignContent={"center"}>
			<Box
				display={"flex"}
				sx={{ flexDirection: { xs: "column", md: "row" } }}>
				<Box flex={1}>
					<Typography
						variant='subtitle1'
						color='initial'>
						Headlines
					</Typography>
					<Box
						display={"flex"}
						justifyContent={"space-between"}
						p={4}
						pl={0}>
						<Box pr={2}>
							<Typography
								variant='h5'
								mb={2}
								color='initial'>
								<a
									href={`${headlines[(pagination - 1) * resultsPerPage]?.url}`}
									target='_blank'
									rel='noopener noreferrer'>
									{headlines[(pagination - 1) * resultsPerPage]?.title ||
										headlines[(pagination - 1) * resultsPerPage]?.description}
								</a>
							</Typography>
							<Typography
								sx={{ fontStyle: "italic" }}
								variant='body2'
								color='initial'>
								{headlines[(pagination - 1) * resultsPerPage]?.source.name}
							</Typography>
							<Typography
								my={1}
								sx={{ fontStyle: "italic" }}
								variant='body2'
								color='initial'>
								{headlines[
									(pagination - 1) * resultsPerPage
								]?.publishedAt.slice(0, 10)}
							</Typography>

							<Typography
								variant='body2'
								color='initial'>
								{headlines[(pagination - 1) * resultsPerPage]?.description}
							</Typography>
						</Box>
						<img
							width={200}
							height={200}
							src={`${
								headlines[(pagination - 1) * resultsPerPage]?.urlToImage
							}`}
							onError={(e) => {
								e.target.src = "/news.png";
							}}
							alt='image'
						/>
					</Box>
					<Divider />
					{headlines?.map((element, index) => {
						return (
							index > (pagination - 1) * resultsPerPage &&
							index < pagination * resultsPerPage && (
								<>
									<Box
										display={"flex"}
										justifyContent={"space-between"}
										my={4}
										pr={2}
										textOverflow={"clip"}>
										<Box pr={2}>
											<Typography
												variant='h6'
												mb={2}
												color='initial'>
												<a
													href={`${element?.url}`}
													target='_blank'
													rel='noopener noreferrer'>
													{element?.title}
												</a>
											</Typography>
											<Typography
												sx={{ fontStyle: "italic" }}
												variant='body2'
												color='initial'>
												{element?.source.name}
											</Typography>
											<Typography
												my={1}
												sx={{ fontStyle: "italic" }}
												variant='body2'
												color='initial'>
												{element?.publishedAt?.slice(0, 10)}
											</Typography>
											<Typography
												variant='body2'
												color='initial'>
												{element?.description}
											</Typography>
										</Box>
										<Box sx={{ display: { xs: "none", md: "block" } }}>
											<img
												width={100}
												height={100}
												src={`${element?.urlToImage}`}
												onError={(e) => {
													e.target.src = "/news.png";
												}}
												alt='image'
											/>
										</Box>
									</Box>
									<Divider />
								</>
							)
						);
					})}
				</Box>
				<Divider
					flexItem
					orientation='vertical'
					variant='middle'
				/>
				<Box flex={1}>
					<Typography
						pl={2}
						variant='subtitle1'
						color='initial'>
						Search Results
					</Typography>
					<Box
						display={"flex"}
						flexDirection={"column"}
						justifyContent={"space-between"}
						p={4}>
						{everything?.map((element, index) => {
							return (
								index < pagination * resultsPerPage && (
									<>
										<Box
											display={"flex"}
											my={2}>
											<Box pr={2}>
												<Typography
													variant='h6'
													mb={2}
													color='initial'>
													<a
														href={`${element?.url}`}
														target='_blank'
														rel='noopener noreferrer'>
														{element?.title}
													</a>
												</Typography>
												<Typography
													sx={{ fontStyle: "italic" }}
													variant='body2'
													color='initial'>
													{element?.source.name}
												</Typography>
												<Typography
													my={1}
													sx={{ fontStyle: "italic" }}
													variant='body2'
													color='initial'>
													{element?.publishedAt?.slice(0, 10)}
												</Typography>
												<Typography
													variant='body2'
													color='initial'>
													{element?.description}
												</Typography>
											</Box>
											<Box sx={{ display: { xs: "none", md: "block" } }}>
												<img
													width={100}
													height={100}
													src={`${element?.urlToImage}`}
													onError={(e) => {
														e.target.src = "/news.png";
													}}
													alt='image'
												/>
											</Box>
										</Box>
										<Divider />
									</>
								)
							);
						})}
					</Box>
				</Box>
			</Box>
			<Box
				display='flex'
				justifyContent='center'
				alignContent={"center"}
				gap={10}
				my={4}>
				<Pagination
					count={Number(size / resultsPerPage)}
					page={pagination}
					shape='rounded'
					onChange={handlePaginationChange}
				/>
				<Box>
					<span style={{ paddingRight: 6 }}>Results per page</span>
					<Select
						labelId='select-label'
						id='simple-select'
						value={resultsPerPage}
						label='number'
						onChange={handleResultsPerPageChange}>
						<MenuItem value={5}>5</MenuItem>
						<MenuItem value={10}>10</MenuItem>
						<MenuItem value={15}>15</MenuItem>
						<MenuItem value={20}>20</MenuItem>
					</Select>{" "}
				</Box>
			</Box>
		</Box>
	);
};

export default Headlines;
