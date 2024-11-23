import React from 'react'
import Title from '../components/Title'
import { assets } from '../src/assets/assets'
import Newsletter from '../components/Newsletter'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] ' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 '>
          <p>Forever frfjve Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque possimus accusantium suscipit soluta quibusdam perferendis distinctio ipsam accusamus ratione eos quidem quisquam, obcaecati vitae recusandae?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, fugiat alias. Amet eum eligendi vel molestiae sequi nulla rerum tempore, ex fugit blanditiis odio ipsa, dignissimos inventore, repellat commodi quam.</p>
          <b className='text-gray-800'>Our Misson</b>
          <p>Our mission Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ducimus, modi quos quasi nisi rerum iure maxime quae velit non itaque, pariatur, sint eveniet harum corporis adipisci voluptate excepturi? Illum quisquam voluptatum id ad alias?</p>
        </div>
      </div>
      <div className='text-xl py-4 justify-center flex mt-20'>
        <Title text1={"CONNECT"} text2={"WITH US"} />
      </div>
      <div className='flex justify-center gap-10 mb-10'>
        <img className='w-16 h-16' src='https://cdns.iconmonstr.com/wp-content/releases/preview/2017/240/iconmonstr-facebook-6.png' alt="Facebook" />
        <img className='w-16 h-16' src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-twitter-3.png" alt="Twitter" />
        <img className='w-16 h-16' src="https://cdns.iconmonstr.com/wp-content/releases/preview/2016/240/iconmonstr-instagram-13.png" alt="instagram" />
        <img className='w-16 h-16' src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-pinterest-3.png&r=0&g=0&b=0" alt="Pinterest" />
      </div>
      <div className='text-xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-500'>We meticulously selectand vet each product to ensure it meets our stringent Lorem ipsum dolor sit amet consectetur adipisicing elit. Non molestiae ipsa sed tempora, repellendus neque voluptate est quod, corporis maxime ab doloremque quisquam nobis et!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-500'>We meticulously selectand vet each product to ensure it meets our stringent Lorem ipsum dolor sit amet consectetur adipisicing elit. Non molestiae ipsa sed tempora, repellendus neque voluptate est quod, corporis maxime ab doloremque quisquam nobis et!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-500'>We meticulously selectand vet each product to ensure it meets our stringent Lorem ipsum dolor sit amet consectetur adipisicing elit. Non molestiae ipsa sed tempora, repellendus neque voluptate est quod, corporis maxime ab doloremque quisquam nobis et!</p>
        </div>
      </div>
      <Newsletter/>
    </div>
  )
}

export default About