import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../src/assets/assets'
import { ShopContext } from '../context/ShopContext'

CartTotal
const Placeorder = () => {
  const {navigate} = useContext(ShopContext)
  const [method ,setMethod ]= useState('cod')
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-4 sm:pt-14 min-h-[80vh] border-t'>
      {/* left Side  */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />

        </div>
        <div className='flex gap-3 '>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='First Name' type="text" />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Last Name' type="text" />

        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Email' type="email" />
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Street' type="text" />
        <div className='flex gap-3 '>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='City' type="text" />
          <input list='droplist' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='State' type="text" />
        </div>
        <div className='flex gap-3 '>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Zip Code' type="number" />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' value={"India"} placeholder='Country' type="text" />

        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Number' type="number" />
        {/* <button className='bg-black text-white px-8 py-5 m-10'>Confirm Your order</button> */}

      </div>
      {/* Right Side  */}
      <div className='mt-8'>

        <div className=' mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12'>
          <Title text1={"PAYMENT"} text2={'METHOD'} />
          {/* Payment Method Selection */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setMethod('stripe') } className='flex item-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : '' }`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={()=>setMethod('razorpay') } className='flex item-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : '' }`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={()=>setMethod('cod') } className='flex item-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : '' }`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>
            <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm'>Place Order</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Placeorder