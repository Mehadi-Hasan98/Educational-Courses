import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-2xl text-center mt-10 font-mono font-semibold'>Our weekly Blogs</h1>
            <div class="card w-80 bg-base-100 shadow-xl mx-auto mt-8">
  <figure><img src="https://img.freepik.com/free-vector/wireframe-robot-ai-artificial-intelligence-robotic-hand-machine-learning-cyber-mind-domination-concept_127544-852.jpg?w=400&t=st=1660994425~exp=1660995025~hmac=518f640eb6ef74c74a9c4bb11e57de5d4123afa33bd36b2afec36e0fbf23668f" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Importance of Machine learning, AI and Data Science</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
</div>
            <div class="card w-80 bg-base-100 shadow-xl mx-auto mt-8">
  <figure><img src="https://img.freepik.com/premium-photo/programming-code-abstract-technology-background-software-developer-computer-script_34663-31.jpg?w=400" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Programming For Everybody</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
</div>
        </div>
    );
};

export default Blog;