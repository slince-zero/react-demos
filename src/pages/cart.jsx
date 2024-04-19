import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartTile from '../components/card-title/index'
import { increment, decrement } from '../store/test/test'

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0)
  const cart = useSelector((state) => state.card)

  const num = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  useEffect(() => {
    let total = 0
    cart.forEach((item) => {
      total += item.price
    })
    setTotalCart(total)
  }, [cart])

  return (
    <div className="flex justify-center">
      {cart && cart.length ? (
        <>
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center p-3">
              {cart.map((cartItem) => (
                <CartTile key={cartItem?.id} cartItem={cartItem} />
              ))}
            </div>
          </div>
          <div className="w-[300px]">
            <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
              <h1 className="font-bold text-lg text-red-800">
                Your Cart Summary
              </h1>
              <p>
                <span className="text-gray-800 font-bold">Total Item</span>
                <span>: {cart.length}</span>
              </p>
              <p>
                <span className="text-gray-800 font-bold">Total Amount</span>
                <span>: {totalCart}</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Your cart is empty
          </h1>
          <Link to="/">
            <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}

      <div>
        <h1>计时器：</h1>
        <button
          onClick={() => dispatch(increment())}
          className=" bg-purple-400 cursor-pointer "
        >
          +1
        </button>
        <span className=" m-5">{num}</span>
        <button
          onClick={() => dispatch(decrement())}
          className=" bg-purple-400 cursor-pointer "
        >
          -1
        </button>
      </div>
    </div>
  )
}
