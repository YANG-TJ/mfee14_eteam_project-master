import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io'
import { GiCoffeeBeans } from 'react-icons/gi'

function CategoriesList(props) {
  const { open, setOpen, setICateId } = props

  return (
    <List aria-labelledby="nested-list-subheader">
      <ListItem
        button
        onClick={() => {
          setOpen(!open)
        }}
      >
        <ListItemIcon>
          {open ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </ListItemIcon>
        <ListItemText
          primary="全部商品"
          onClick={(event) => {
            setICateId(event.currentTarget.id)
            // console.log(event.currentTarget.id)
          }}
        />
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemIcon>
              <GiCoffeeBeans />
            </ListItemIcon>
            <ListItemText
              id="1"
              primary="咖啡"
              // inset
              onClick={(event) => {
                setICateId(event.currentTarget.id)
                // console.log(event.currentTarget)
              }}
            />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <GiCoffeeBeans />
            </ListItemIcon>
            <ListItemText
              id="2"
              primary="器材"
              // inset
              onClick={(event) => {
                setICateId(event.currentTarget.id)
                // console.log(event.currentTarget)
              }}
            />
          </ListItem>

          <ListItem button inset>
            <ListItemIcon>
              <GiCoffeeBeans />
            </ListItemIcon>
            <ListItemText
              id="3"
              primary="甜點"
              // inset
              onClick={(event) => {
                setICateId(event.currentTarget.id)
                // console.log(event.currentTarget)
              }}
            />
          </ListItem>

          <ListItem button inset>
            <ListItemIcon>
              <GiCoffeeBeans />
            </ListItemIcon>
            <ListItemText
              id="4"
              primary="品牌周邊"
              // inset
              onClick={(event) => {
                setICateId(event.currentTarget.id)
                // console.log(event.currentTarget)
              }}
            />
          </ListItem>
        </List>
      </Collapse>

      {/* <ListItem button>
        <ListItemIcon>
          <GiCoffeeBeans />
        </ListItemIcon>
        <ListItemText primary="新品上市" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <GiCoffeeBeans />
        </ListItemIcon>
        <ListItemText primary="限時優惠" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <GiCoffeeBeans />
        </ListItemIcon>
        <ListItemText primary="熱門商品" />
      </ListItem> */}
    </List>
  )
}
export default CategoriesList
