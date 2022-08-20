import React from 'react';

const Reviews = () => {
    return (
        <div>
            <h1 className='text-2xl text-center font-mono mt-12 mb-12 font-semibold'>What Our Student Says!</h1>
           <div className='mx-auto'>
           <div class="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
  </div>
</div>
           <div class="card card-compact w-96 bg-base-100 shadow-xl mx-auto mt-10 mb-12">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
   
  </div>
</div>
           </div>
        </div>
    );
};

export default Reviews;