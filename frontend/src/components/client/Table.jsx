import React from 'react'
import edit from '../../assets/imgs/edit.png'
import bin from '../../assets/imgs/bin.png'
import Swal from 'sweetalert2'

const Table = () => {

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
                                    <button type='submit' className='px-8 py-3 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-900 transition-all'>Add Product</button>
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
    </div>
  )
}

export default Table