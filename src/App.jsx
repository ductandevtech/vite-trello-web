import React from 'react'
import Button from '@mui/material/Button'
import {
  useColorScheme
} from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp'
import SettingsSystemDaydreamSharpIcon from '@mui/icons-material/SettingsSystemDaydreamSharp'



function ModeSelect() {
  // useColorScheme get current mode and a function to update it
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    setMode(event.target.value)
  }

  return (
    <Box sx={{ maxWidth: 160 }} size="small">
      <FormControl fullWidth>
        <InputLabel id="label-select-dark-mode-light-mode">Mode</InputLabel>
        <Select
          labelId="label-select-dark-mode-light-mode"
          id="select-dark-mode-light-mode"
          value={mode}
          label="Mode"
          onChange={handleChange}
        >
          <MenuItem value="light">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LightModeIcon sx={{ mr: 1 }} />Light
            </Box>
          </MenuItem>
          <MenuItem value="dark">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <DarkModeSharpIcon sx={{ mr: 1 }} />Dark
            </Box>
          </MenuItem>

          <MenuItem value="system">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <SettingsSystemDaydreamSharpIcon sx={{ mr: 1 }} />
              System
            </Box>
          </MenuItem>

        </Select>
      </FormControl>
    </Box>
  )
}

function App() {
  return (
    <>
      <ModeSelect />
    </>
  )
}

export default App
