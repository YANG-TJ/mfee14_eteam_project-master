import React, { useEffect } from 'react'
import { Grid, Paper, makeStyles, Hidden } from '@material-ui/core'
import { Link } from 'react-router-dom'
// import FinalCheck from './FinalCheck'
//組件
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(10),
    height: '100%',
    minHeight: '500PX',
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
  h3: {
    margin: '60px auto',
  },
  button: {
    margin: '30px 10px',
    width: '50px',
  },
  h4: {
    margin: '-50px auto 50px',
  },
}))
function Completed(props) {
  const classes = useStyles()
  const { setStep1 } = props

  async function clearSessionFromServer() {
    //清空session

    const url2 = 'http://localhost:7000/cart/session/clear'

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request2 = new Request(url2, {
      credentials: 'include',
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response2 = await fetch(request2)
    const data2 = await response2.json()
    console.log(data2.cart)

    setStep1(data2.cart)
  }
  useEffect(() => {
    clearSessionFromServer()
  }, [])

  return (
    <>
      <div className={classes.root}>
        {/* <Hidden xsUp>
          <FinalCheck
            step1={step1}
            step2={step2}
            step3={step3}
            cateLabels={cateLabels}
            handleChange={handleChange}
          />
        </Hidden> */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper}>
              <h3 className={classes.h3}>感謝您的購買!</h3>
              <div className="success-checkmark">
                <div className="check-icon">
                  <span className="icon-line line-tip"></span>
                  <span className="icon-line line-long"></span>
                  <div className="icon-circle"></div>
                  <div className="icon-fix"></div>
                </div>
              </div>
              <div className={classes.h3}>
                <h4 className={classes.h4}>訂單已成立！</h4>

                {/* 連去消費紀錄 */}
                <Link to="/usersConsumption">
                  <button className="outlineChoose margin1">
                    去看我的訂單
                  </button>
                </Link>

                {/* 連去首頁 */}
                <Link to="/">
                  <button className="outlineChoose">回首頁</button>
                </Link>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
export default Completed
