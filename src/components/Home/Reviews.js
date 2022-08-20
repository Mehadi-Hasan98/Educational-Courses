import React from 'react';

const Reviews = () => {
    return (
        <div>
            <h1 className='text-3xl text-center font-mono mt-24 mb-12 font-semibold'>What Our Student Says!</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-20 mb-12 mt-12 gap-4'>
            <div class="card card-compact w-9/12 bg-base-100 shadow-xl">
  <figure><img src="https://img.freepik.com/free-photo/horizontal-shot-pretty-dark-skinned-woman-with-afro-hairstyle-has-broad-smile-white-teeth-shows-something-nice-friend-points-upper-right-corner-stands-against-wall_273609-16442.jpg?w=400&t=st=1660993098~exp=1660993698~hmac=dbcd20c8f20a9df76acb0cebbf9c8ccaacd41edc4ce903a064ddf6fb34da5e41" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Rebeca</h2>
    <p>Very beginner friendly and i've learned data science stuffs very well through Basic Data Science Course..</p>
    <div class="card-actions justify-end">
      <button class="btn btn-secondary">See more</button>
    </div>
  </div>
</div>
            <div class="card card-compact w-9/12 bg-base-100 shadow-xl">
  <figure><img src="https://img.freepik.com/free-photo/excited-cheerful-beautiful-black-woman_181624-45446.jpg?w=400&t=st=1660993160~exp=1660993760~hmac=986d008a15b770a026f64db5ff5aa747b5567c550a96000632ba16dd5e3a754c" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Jasmine</h2>
    <p>There are so many courses over the website. I enrolled for UI and UX design. Still i am learning. </p>
    <div class="card-actions justify-end">
    <button class="btn btn-secondary">See more</button>
    </div>
  </div>
</div>
            <div class="card card-compact w-9/12 bg-base-100 shadow-xl">
  <figure><img src="https://img.freepik.com/free-photo/inspired-african-student-glasses-holding-white-laptop-carefree-black-male-freelancer-smiling_197531-20160.jpg?w=400&t=st=1660993269~exp=1660993869~hmac=4c5288889454991abe3bfe9a1f9b4f305b6dd32cdfa492555c527bee42a4a173" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Phillip</h2>
    <p>They provided me some awesome contents for my Full Stack journey. Programming is just fun. I love this platform.</p>
    <div class="card-actions justify-end">
    <button class="btn btn-secondary">See more</button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Reviews;