import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = ({ url }) => {


  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`)

      if (response.data.success) {
        setList(response.data.foods)
      } else {
        toast.error(response.data.message || "Failed to fetch list")
      }
    } catch (error) {
      console.error("Fetch list error:", error)
      toast.error("Error while fetching list")
    }
  }

  const removeFood = async (id) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id })

      if (response.data.success) {
        toast.success(response.data.message)
        fetchList()
      } else {
        toast.error(response.data.message || "Failed to remove food")
      }
    } catch (error) {
      console.error("Remove food error:", error)
      toast.error("Error while removing food")
    }
  }

  useEffect(() => {
    const loadFoods = async () => {
      await fetchList()
    }
    loadFoods()
  }, )
  return (
    <div className="list add flex-col">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {list.map((item, index) => (
          <div key={index} className="list-table-format">
            <img src={`${url}/images/${item.image}`} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <p onClick={() => removeFood(item._id)} className="cursor">X</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List