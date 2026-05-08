import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const { axios } = useAppContext()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const { data } = await axios.post('/api/blog/subscribe', { email })
      if (data.success) {
        toast.success(data.message)
        setEmail('')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
     <div className='flex flex-col items-center justify-center text-center space-y-2 my-32'>
      <h1 className='md:text-4xl text-2xl font-semibold'>Never Miss a Blog!</h1>
      <p className='md:text-lg text-gray-500/70 pb-8'>
        Subscribe to get the latest blog, new tech, and exclusive news.
      </p>
      <form onSubmit={handleSubmit} className='flex items-center justify-between max-w-2xl w-full md:h-13 h-12'>
        <input
          type='email'
          required
          placeholder='Enter your email id'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='border border-gray-300 h-full outline-none w-full px-3 text-gray-500 rounded-md rounded-r-none border-r-0'
        />
        <button
          type='submit'
          disabled={loading}
          className='md:px-12 px-8 h-full text-white bg-primary/80 hover:bg-primary transition-all cursor-pointer rounded-md rounded-l-none disabled:opacity-60'
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </div>
  )
}

export default Newsletter
