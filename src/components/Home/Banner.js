import React from 'react';

const Banner = () => {
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center mb-6 mt-20'>Welcome to Educational Courses Online Platform!!</h1>
            <div class="carousel w-9/12 mt-10 mb-20 mx-auto">
  <div id="slide1" class="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-vector/electronic-document-management-landing-page_107791-5353.jpg?w=500&t=st=1661007810~exp=1661008410~hmac=f6055ce8d4bbea325e34de0dddf7a9981f035b102269f12003193bc87e00a5aa" class="w-full" alt=''/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-psd/e-learning-courses-social-media-posts_23-2149109785.jpg?w=500&t=st=1661007861~exp=1661008461~hmac=82fa2a39b14e0a3958d9554f34787b92a0670cb9de5672c3bede20e2e24bf0e3" class="w-full" alt=''/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-vector/education-horizontal-typography-banner-set-with-learning-knowledge-symbols-flat-illustration_1284-29493.jpg?w=1060&t=st=1661007896~exp=1661008496~hmac=71db3769c85c2a30f0a57abd7b1302ba8b42f7d503d0d8f371bb187f3f35c103" class="w-full" alt=''/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-vector/data-analysis-artificial-intelligence-isometric_107791-200.jpg?w=600&h=200&t=st=1661005962~exp=1661006562~hmac=bc76252aed361e467816a31a8ddad5a9be5d3577f89ccac51fc0c4bb1666928b" class="w-full" alt=''/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;