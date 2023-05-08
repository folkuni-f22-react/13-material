import { useState } from 'react'
import './App.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add';

function App() {
	const [count, setCount] = useState(0)

	const fabStyle = {
		position: 'absolute',
		right: '2em',
		bottom: '2em'
	}

	return (
		<div>
			<div>
				<Typography variant="h1"> Settings </Typography>
				<FormControlLabel control={<Checkbox />} label="Check it out" />
				<FormControlLabel control={<Switch defaultChecked />} label="Switch it up" />

				
				<TextField label="Please input your name" />

			</div>

			<div>
				<Fab color="primary"
					sx={fabStyle}
				> <AddIcon /> </Fab>
			</div>

			<Stack spacing={2} direction="row">
				<Button variant="text">Text</Button>
				<Button variant="contained">Contained</Button>
				<Button variant="outlined">Outlined</Button>
			</Stack>
		</div>

		
	)
}

export default App
