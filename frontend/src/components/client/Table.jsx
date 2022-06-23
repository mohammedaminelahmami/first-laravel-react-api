import React, { useState } from 'react'
import edit from '../../assets/imgs/edit.png'
import bin from '../../assets/imgs/bin.png'
import Swal from 'sweetalert2'

const Table = () => {

    const [addModal, setAddModel] = useState(false);

    const HandleClickEdit = async ()=>{
        const { value: productName } = await Swal.fire({
            title: 'Add Product',
            input: 'text',
            inputLabel: 'Product Name',
            inputPlaceholder: 'Enter your Product ...',
            confirmButtonColor: '#2563eb'
          })
          
        if(productName) {
            // Swal.fire(`Entered product: ${productName}`)
            Swal.fire(
                'Product updated successfully !',
                '',
                'success',
                // confirmButtonColor: '#2563eb'
              )
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                })
          }
    }

    return (
    <div>
        <center>
        <div className="flex flex-col w-10/12">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                            <thead className="border-b">
                                <tr>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    #
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Product
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Price
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Category
                                </th>
                                <th>
                                    <button onClick={()=>{setAddModel(true)}} type='submit' className='px-8 py-3 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-900 transition-all'>Add Product</button>
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        Mark
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        Otto
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        @mdo
                                    </td>
                                    <td>
                                        <div className='flex gap-5'>
                                            <button type='submit' onClick={HandleClickEdit}><img src={edit} width='25' /></button>
                                            <button type='submit'><img src={bin} width='25' /></button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </center>

        {addModal&&
            <div className="p-20 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none bg-opacityColor">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="p-10 border-0 rounded-md shadow-lg relative flex flex-col w-96 bg-white outline-none focus:outline-none modal">
                        <div className='flex justify-center gap-14'>
                            <p className="text-xl">Add Product</p>
                            <button className="w-10 h-9 bg-red-600 text-white rounded-sm" onClick={()=>{setAddModel(false)}}>X</button>
                        </div>
                        <div className="flex justify-center gap-5 mt-5">
                            <form className='flex flex-col gap-4'>
                                <input type="text" className='p-4 border' placeholder='Add Product ...' />
                                <input type="text" className='p-4 border' placeholder='Add Price ...' />
                                <input type="text" className='p-4 border' placeholder='Add Category ...' />

                                <button type='submit' className='px-6 py-3 rounded-full bg-blue-600 text-white text-xs font-semibold hover:bg-blue-900 transition-all'>Add</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        }

    </div>
  )
}

export default Table