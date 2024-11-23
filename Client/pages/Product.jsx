import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../src/assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency,addToCart } = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;

      }
    })
  }
  useEffect(() => {
    fetchProductData()
  }, [products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer ' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>
        {/* Product Info  */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className='pl-2'>(122)</p>

          </div>
          <p className='font-medium mt-5 text-3xl'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-[4/5]'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item} </button>
              ))}

            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>Add To Cart</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original Product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* Desciption & Review Section  */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'> Reviews (124)</p>
        </div>
        <div className='flex flex-col gap-4 border py-6 px-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit harum deserunt error optio tempora debitis nulla voluptates? Iusto, iste cupiditate necessitatibus laboriosam inventore at adipisci quibusdam molestiae error blanditiis qui animi, sunt, tempore delectus iure ex minus distinctio impedit ducimus praesentium explicabo eveniet reprehenderit. Blanditiis possimus nemo soluta necessitatibus repellat magnam libero dolor nam culpa, explicabo eligendi eaque quis doloremque obcaecati fugiat similique rerum inventore laudantium quam quae dignissimos esse cum. Nihil cumque reiciendis, rerum tenetur voluptatibus animi omnis, necessitatibus quisquam quia velit repellendus ab molestiae doloribus nulla! Fugit quibusdam ea optio odio id quod laborum explicabo quas vel nam vitae, hic ut excepturi porro qui voluptas odit velit dicta voluptatem tempore dolorum recusandae, minus, earum sapiente? Accusamus id laudantium ducimus odio fugit illum nulla.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nulla amet asperiores quod neque voluptates dolore sunt, molestiae fugit adipisci ex odit omnis. Adipisci tempore voluptate similique harum expedita dolor dolores rem vel, fuga corrupti earum veritatis vitae, architecto excepturi quos voluptatibus necessitatibus perspiciatis ullam consequuntur laborum, magni esse nesciunt alias! Quidem numquam magnam, vitae eos earum perspiciatis laboriosam ut possimus fugit. Dolore non impedit sint molestias illum aperiam numquam assumenda sequi nulla maxime, animi minima debitis, itaque ipsa commodi dolorum? In nihil cumque, officiis laborum ipsum fugiat quibusdam reiciendis beatae voluptatem consectetur est. Perferendis quae laudantium pariatur optio soluta!</p>
        </div>
      </div>
      {/* Display Related Products  */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : <div className='opacity-0'> </div>
}

export default Product
