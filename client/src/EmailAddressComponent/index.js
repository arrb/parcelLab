import React, {useCallback, useState, useRef, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const EmailAddressComponent = () => {
  const navigate = useNavigate()
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState('')
  const isMounted = useRef(true)

  // set isMounted to false when we unmount the component
  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  const modifyArray = (arr) => {
    // When the user has multiple products, then it creates a new row.
    // For the next screen we don't need to know all the details, 
    // So we get rid of unwanted extra lines.
    let filteredArr = [...new Map(arr.map(item => [item.orderNo, item])).values()]
    navigate("/orderlist", { state: { orderList: arr, filteredArr: filteredArr} })
  }

  const fetchOrder = async (email) => {
    try {
      await axios(
        `/getorders`, {params: {email}}
      )
      .then((response) => response.data.length ? modifyArray(response.data) : setError('No records found'))
    } catch (error) {
      console.log("error")
      setError(error.message)
    }
  }

  const sendRequest = useCallback(async (email) => {
    // don't send again while we are sending
    if (isSending) return
    // update state
    setIsSending(true)
    // send the actual request
    setError('');
    await fetchOrder(email)
    
    // once the request is sent, update state again
    if (isMounted.current) {
    // only update if we are still mounted
      setIsSending(false)
    }
  }, [isSending]) // update the callback if the state changes

  const isValid = (em) => {
    return String(em)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }

  const clickSubmit = (e) => {
    console.log("Click submit")
    e.preventDefault()
    const email = e.target.email.value
    // Only send request when the email address is valid
    isValid(email) ?  sendRequest(email) : setError('Try again with a valid email address')
  } 

  return (
    <div className="form-center">
      <form className="square-section" onSubmit={clickSubmit} >
        <h5>Please enter your email address to see your recent orders</h5>
        <div className="text-danger">{error}</div>
        <label>Email</label>
        <input type="email" name="email" aria-label="email" placeholder="example@example.com"/>
        <input type="submit" disabled={isSending} value="Send"/>
      </form>
    </div>
  )

};

export default EmailAddressComponent
