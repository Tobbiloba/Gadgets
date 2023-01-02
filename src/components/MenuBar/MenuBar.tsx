import './MenuBar.css'
import { Button } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export const MenuBar = () => {
  return (
    <div className="menuBar__container">
      <div className="menuBar__company-name">
        <h1>
          <span>G</span>ADGETS
        </h1>
      </div>
      <div className="menuBar__item">
        <Button variant="outlined" className="menuBar__items">
          Home
        </Button>
        <Button variant="outlined" className="menuBar__items">
          About Us
        </Button>
        <Button variant="outlined" className="menuBar__items">
          Products <KeyboardArrowDownIcon />
        </Button>
        <Button variant="outlined" className="menuBar__items">
          Contact Us
        </Button>
        <Button variant="contained" className="menuBar__items login">
          Login
        </Button>
      </div>
    </div>
  )
}
