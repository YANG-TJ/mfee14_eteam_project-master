import React, { useState, useEffect } from 'react'

import CartCard from './components/CartCard'
import {
  // Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
  Hidden,
} from '@material-ui/core'
import GuessYouLikeCard from '../../global_components/GuessYouLikeCard'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  typography: {
    padding: theme.spacing(2),
  },
}))
function MyCart(props) {
  const { step1, setStep1, cateLabels, handleChange } = props

  console.log(step1)

  //猜你喜歡元件
  const [itemsArr, setItemsArr] = useState([])
  async function getAllItemsData(page) {
    // 連接的伺服器資料網址
    const url = `http://localhost:7000/items?iId=3`

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log('伺服器回傳的json資料by read', data)

    // 設定資料
    setItemsArr(data.result2)

    // setTotalPages(data.totalPages)
    // setNowPage(data.page)
  }
  useEffect(() => {
    getAllItemsData()
  }, [])

  const classes = useStyles()
  return (
    <>
      <div className="cartBody">
        <Grid container xs={12} className={classes.root}>
          <Grid item xs={12}>
            <table>
              <Hidden xsDown>
                <Paper xs={6} elevation={0}>
                  <Typography style={{ fontSize: '1.2rem', fontWeight: '700' }}>
                    <h2>我的購物車</h2>
                  </Typography>

                  <div className="cart-thead">
                    <div className="cart-th">商品圖片</div>
                    <div className="cart-th">商品名稱</div>
                    <div className="cart-th">規格</div>
                    <div className="cart-th">商品數量</div>
                    <div className="cart-th">商品價格</div>
                    <div className="cart-th">總價</div>
                    <div className="cart-th"> </div>
                    <div> </div>
                  </div>
                </Paper>
              </Hidden>
              {/* <Paper Paper xs={6} elevation={0}> */}
              {/* <tbody> */}
              <CartCard
                step1={step1}
                setStep1={setStep1}
                handleChange={handleChange}
                cateLabels={cateLabels}
              />
              {/* </tbody> */}
              {/* </Paper> */}
            </table>
          </Grid>
        </Grid>
      </div>
      <Grid container justifyContent="center" className="cartBody itemRecom">
        <Grid container justifyContent="center" className="GuessYouLike">
          <Grid item justify="flex-start">
            <h2
              style={{ fontSize: '1.2rem', fontWeight: '700' }}
              className="h4"
            >
              猜你也喜歡
            </h2>
          </Grid>
          <Grid item container>
            <Grid item container spacing={6} justifyContent="center">
              {itemsArr.slice(0, 4).map((value, index) => {
                return (
                  <Grid
                    key={index}
                    item
                    xs={2}
                    style={{ boxSizing: 'content-box' }}
                  >
                    <GuessYouLikeCard
                      product={value}
                      setStep1={setStep1}
                    ></GuessYouLikeCard>
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
export default MyCart
