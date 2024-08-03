import React, { useEffect, useState } from "react";
import {
	Box,
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Divider,
	Drawer,
	List,
	TextField,
	ListItemButton,
	ListItemText,
	InputAdornment,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Tags from "./Tags";
import { fetchDataForEverythingNews } from "../store/slices/everthingNewsSlice";
import { useDispatch } from "react-redux";

const Header = () => {
	const [open, setOpen] = useState(false);
	const [selectedCatagory, setSelectedCatagory] = useState();
	const [searchInput, setSearchInput] = useState();

	const toggleMenu = () => {
		setOpen(!open);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const handleCatagoryChange = (tag) => {
		setSelectedCatagory(tag);
	};
	const handleKeyDown = (event) => {
		if (event.key == "Enter") {
			setSearchInput(event.target.value);
		}
	};
	//Redux Code--------------------------------------------------------
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(
			fetchDataForEverythingNews({
				q: searchInput?.trim() || selectedCatagory,
				sources: "",
				from: "",
				to: "",
				language: "",
				sortBy: "",
			})
		);
	}, [dispatch, searchInput, selectedCatagory]);

	//------------------------------------------------------------------

	return (
		<AppBar
			sx={{ boxShadow: "none" }}
			position='sticky'
			color='primary'>
			<Toolbar display='flex'>
				<IconButton
					aria-label='menuicon'
					onClick={() => toggleMenu()}
					flex={1}>
					<MenuIcon />
				</IconButton>
				<Drawer
					mt={10}
					position='absolute'
					width={100}
					open={open}
					onClose={handleClose}
					anchor='left'>
					<List sx={{ width: 300, marginTop: 16 }}>
						<ListItemButton>
							<ListItemText
								sx={{ textAlign: "center" }}
								primary='Politics'
								onClick={() => handleCatagoryChange("politics")}
							/>
						</ListItemButton>
						<ListItemButton>
							<ListItemText
								sx={{ textAlign: "center" }}
								primary='Business'
								onClick={() => handleCatagoryChange("business")}
							/>
						</ListItemButton>
						<ListItemButton>
							<ListItemText
								sx={{ textAlign: "center" }}
								primary='Tech'
								onClick={() => handleCatagoryChange("technology")}
							/>
						</ListItemButton>
						<ListItemButton>
							<ListItemText
								sx={{ textAlign: "center" }}
								primary='Science'
								onClick={() => handleCatagoryChange("science")}
							/>
						</ListItemButton>
						<ListItemButton>
							<ListItemText
								sx={{ textAlign: "center" }}
								primary='Sports'
								onClick={() => handleCatagoryChange("sports")}
							/>
						</ListItemButton>
						<ListItemButton>
							<ListItemText
								sx={{ textAlign: "center" }}
								primary='Travel'
								onClick={() => handleCatagoryChange("travel")}
							/>
						</ListItemButton>
					</List>
				</Drawer>
				<Typography
					variant='h6'
					flex={3}>
					The FortNightly
				</Typography>
				<Box
					flex={10}
					sx={{ display: { xs: "none", md: "flex" } }}>
					<Tags />
				</Box>
				<Box flex={2}>
					<TextField
						id='standard-basic'
						variant='standard'
						placeholder='Search...'
						onKeyDown={handleKeyDown}
						InputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									<SearchIcon />
								</InputAdornment>
							),
						}}
					/>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
